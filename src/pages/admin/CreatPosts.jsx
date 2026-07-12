import React, { useState, useRef } from "react";
import { FiUpload, FiChevronDown, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // <-- Admin panelga qaytish uchun
import { usePosts } from "../../components/PostContext";

export default function CreatPosts() {
  const { addPost } = usePosts();
  const navigate = useNavigate(); // <-- Navigatsiya funksiyasi

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  // Chiroyli Toast chiqishi uchun state
  const [showToast, setShowToast] = useState(false);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handlePublish = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return; // HTML5 validation block
    }

    // Aynan siz xohlagan strukturadagi yangi post obyekti
    const newPost = {
      id: Date.now(), // unikal ID yaratish uchun vaqt millisekundlari
      title: title,
      category: category || "Technology",
      date: new Date().toISOString().split("T")[0], // "2026-07-12" ko'rinishida sana beradi
      status: "Published", // Yangi yaratilgan post to'g'ridan-to'g'ri nashr qilinadi
      description: content.substring(0, 120) + "...", // Kartochka uchun qisqa matn
      content: content, // Detail page uchun to'liq matn
      image:
        imagePreview ||
        "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?w=500", // Rasm URL
    };

    addPost(newPost); // Global arrayga (state-ga) qo'shish

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      navigate("/admin"); // Admin panelga qaytarish
    }, 2000);
  };

  return (
    <div className="min-h-screen  p-6 md:p-12 font-sans text-[#0F172A] relative">
      {/* --- CHIROYLI TOAST NOTIFICATION --- */}
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
      </div>

      <form
        onSubmit={handlePublish}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
      >
        {/* Left column */}
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

        {/* Right column */}
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
                  <option value="" disabled hidden>
                    Select category
                  </option>
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

          {/* Featured Image */}
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

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white text-sm font-medium rounded-xl transition shadow-sm flex-1 cursor-pointer"
            >
              Publish Post
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin")} // Cancel bosilsa ham admin panelga qaytadi
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
