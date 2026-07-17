import React, { useState, useRef } from "react";
import { FiUpload, FiChevronDown, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../../components/PostContext";
import axios from "axios"; // 🚀 Axios import qilindi

export default function CreatPosts() {
  const { fetchPosts } = usePosts(); // Postlarni qayta yuklash uchun context'dan fetchPosts funksiyasini olamiz
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology"); // Default holatda biror kategoriya tursin
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null); // 🚀 Haqiqiy faylni saqlash uchun state
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false); // Tugmani bloklab turish uchun loading
  const [error, setError] = useState(null);

  const fileInputRef = useRef(null);

  // Kategoriya nomlarini ID larga moslash (Backend qabul qilishi uchun)
  const categoryIds = {
    Technology: 1,
    Productivity: 2,
    Design: 3,
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // 🚀 Faylni o'zini stateda saqlaymiz
      setImagePreview(URL.createObjectURL(file)); // Ekranda ko'rsatish uchun URL formatga o'tkazamiz
    }
  };

  // Backend API ga post yuborish funksiyasi
  const handlePublish = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Iltimos, sarlavha va kontentni to'ldiring.");
      return;
    }

    setLoading(true);
    setError(null);

    const BASE_URL = "https://tevoj98108.pythonanywhere.com/api/v1/";
    const selectedCategoryId = categoryIds[category] || 1;

    // 🚀 1. Birinchi navbatda localStorage'dan tokenni tekshiramiz
    let token = localStorage.getItem("token") || localStorage.getItem("access");

    // 🚀 2. Agar token topilmasa, vaqtinchalik brauzerdan so'raymiz (prompt orqali)
    if (!token) {
      const inputToken = prompt(
        "Backendga so'rov yuborish uchun faol Access Token kiriting (Swagger yoki Postmandan olingan tokenni joylang):",
      );

      if (inputToken && inputToken.trim() !== "") {
        token = inputToken.trim();
        localStorage.setItem("token", token); // Keyingi safar so'ramasligi uchun saqlab qo'yamiz
      } else {
        setError("Token kiritilmadi! Postni yaratish uchun token majburiy.");
        setLoading(false);
        return;
      }
    }

    try {
      let response;

      // Django SimpleJWT odatda 'Bearer <token>' formatini talab qiladi
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      if (imageFile) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category", selectedCategoryId);
        formData.append("image", imageFile);

        response = await axios.post(`${BASE_URL}articles/`, formData, {
          headers: {
            ...headers,
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        const postData = {
          title: title,
          content: content,
          category: selectedCategoryId,
        };

        response = await axios.post(`${BASE_URL}articles/`, postData, {
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
        });
      }

      if (response.status === 201 || response.status === 200) {
        setShowToast(true);
        if (fetchPosts) {
          await fetchPosts();
        }
        setTimeout(() => {
          setShowToast(false);
          navigate("/admin");
        }, 2000);
      }
    } catch (err) {
      console.error("Post yaratishda xatolik yuz berdi:", err);

      // Agar token eskirgan yoki noto'g'ri bo'lsa, foydalanuvchiga tozalash imkonini beramiz
      if (err.response && err.response.status === 401) {
        localStorage.removeItem("token"); // Eskirgan tokenni o'chiramiz keyingi safar yangisini so'rashi uchun
        setError(
          "Siz kiritgan token yaroqsiz yoki muddati o'tgan. Sahifani yangilab (F5), yangi token kiriting.",
        );
      } else if (err.response && err.response.data) {
        const backendError =
          err.response.data.detail || JSON.stringify(err.response.data);
        setError(`Backend xatoligi: ${backendError}`);
      } else {
        setError(
          "Postni backendga yuklashda xatolik yuz berdi. Qayta urinib ko'ring.",
        );
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen p-6 md:p-12 font-sans text-[#0F172A] relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-white border border-gray-100 shadow-xl rounded-xl px-5 py-3.5 flex items-center gap-3 animate-bounce">
          <FiCheckCircle className="text-emerald-500" size={22} />
          <span className="text-sm font-semibold text-[#0F172A] tracking-wide">
            Post created successfully!
          </span>
        </div>
      )}

      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-2">
          Create New Post
        </h1>
        <p className="text-gray-500 text-sm">
          Fill in the details to create a new blog post
        </p>
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
            {error}
          </div>
        )}
      </div>

      <form
        onSubmit={handlePublish}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
      >
        {/* Chap ustun */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-[#0F172A]">
              Post Title
            </label>
            <input
              type="text"
              required
              placeholder="Enter post title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-indigo-500 placeholder-gray-400 text-sm transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-[#0F172A]">
              Content
            </label>
            <textarea
              required
              placeholder="Write your post content here..."
              rows={12}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-indigo-500 placeholder-gray-400 text-sm resize-none transition"
            />
          </div>
        </div>

        {/* O'ng ustun */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-[#0F172A]">
              Post Settings
            </h2>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#0F172A]">
                Category
              </label>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-indigo-500 text-gray-700 bg-white appearance-none cursor-pointer pr-10 text-sm transition"
                >
                  <option value="Technology">Technology</option>
                  <option value="Productivity">Productivity</option>
                  <option value="Design">Design</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                  <FiChevronDown size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image rasm yuklash */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-[#0F172A]">
              Featured Image
            </h2>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
            <div
              onClick={() => fileInputRef.current.click()}
              className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl p-6 bg-white cursor-pointer hover:border-indigo-400 transition group overflow-hidden h-40 relative"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover absolute inset-0"
                />
              ) : (
                <>
                  <FiUpload
                    size={28}
                    className="text-gray-400 mb-3 group-hover:text-indigo-500 transition"
                  />
                  <p className="text-xs text-center text-gray-600 font-medium">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    PNG, JPG or WEBP
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Action tugmalari */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm font-medium rounded-xl transition shadow-sm flex-1 cursor-pointer disabled:opacity-50"
            >
              {loading ? "Publishing..." : "Publish Post"}
            </button>
            <button
              type="button"
              disabled={loading}
              onClick={() => navigate("/admin")}
              className="px-5 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 text-sm font-medium rounded-xl transition flex-1 cursor-pointer disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
