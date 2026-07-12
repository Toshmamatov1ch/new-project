import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiUpload,
  FiChevronDown,
  FiCheckCircle,
  FiArrowLeft,
} from "react-icons/fi";
import { usePosts } from "../../components/PostContext"; // Context manzilingizni tekshiring

export default function UpdatePosts() {
  const { id } = useParams(); // App.jsx'dagi :id ni qabul qiladi
  const navigate = useNavigate();
  const { posts, updatePost } = usePosts();

  // Tahrirlanayotgan postni topamiz (ID string bo'lishi mumkinligini hisobga olamiz)
  const currentPost = posts.find((p) => String(p.id) === String(id));

  // State'lar
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology");
  const [imagePreview, setImagePreview] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const fileInputRef = useRef(null);

  // Sahifa yuklanganda eski ma'lumotlarni maydonlarga to'ldirish
  useEffect(() => {
    if (currentPost) {
      setTitle(currentPost.title);
      // Agar 'content' bo'lsa uni, yo'qsa 'description'ni yuklaydi
      setContent(currentPost.content || currentPost.description || "");
      setCategory(currentPost.category || "Technology");
      setImagePreview(currentPost.image || null);
    }
  }, [currentPost]);

  // Agar bunday ID'li post topilmasa Not Found chiqmasligi uchun darhol tekshiramiz
  if (!currentPost) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] font-sans">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Post Data Loading or Not Found
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          Please check if the URL contains the correct ID.
        </p>
        <button
          onClick={() => navigate("/admin")}
          className="px-4 py-2 bg-[#4F46E5] text-white text-sm font-semibold rounded-xl"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    const updatedData = {
      title: title,
      category: category,
      description: content.substring(0, 120) + "...", // Qisqa tavsif
      content: content, // To'liq matn
      image: imagePreview,
    };

    // Context'dagi tahrirlash funksiyasini chaqiramiz
    updatePost(id, updatedData);

    // Muvaffaqiyatli bajarilganlik xabari (Toast)
    setShowToast(true);

    // 2 soniyadan keyin admin dashboard'ga qaytish
    setTimeout(() => {
      setShowToast(false);
      navigate("/admin");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-12 font-sans text-[#0F172A] relative">
      {/* Toast Popup Notification */}
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-white border border-gray-100 shadow-xl rounded-xl px-5 py-3.5 flex items-center gap-3 animate-fade-in">
          <FiCheckCircle className="text-emerald-500" size={22} />
          <span className="text-sm font-semibold text-[#0F172A]">
            Post updated successfully!
          </span>
        </div>
      )}

      {/* Sarlavha qismi */}
      <div className="max-w-6xl mx-auto mb-8">
        <button
          type="button"
          onClick={() => navigate("/admin")}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-[#4F46E5] mb-4 uppercase tracking-wider cursor-pointer"
        >
          <FiArrowLeft /> Cancel & Go Back
        </button>
        <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Update Post</h1>
        <p className="text-gray-500 text-sm">
          Modify the details below to save your changes
        </p>
      </div>

      {/* Form Grid */}
      <form
        onSubmit={handleFormSubmit}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
      >
        {/* Chap taraf: Matnlar */}
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
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-indigo-500 text-sm transition"
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
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-indigo-500 text-sm resize-none transition"
            />
          </div>
        </div>

        {/* O'ng taraf: Sozlamalar va Rasm */}
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

          {/* Rasm qismi */}
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
                    Click to change image
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Saqlash va Bekor qilish tugmalari */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm font-medium rounded-xl transition shadow-sm flex-1 cursor-pointer"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="px-5 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 text-sm font-medium rounded-xl transition flex-1 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
