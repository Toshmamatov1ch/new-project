import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // 🚀 Axios import qilindi

const TableRow = ({ post, onDeleteSuccess }) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  // 1. Kategoriya nomini obyektdan xavfsiz ajratib olamiz
  const categoryName = post?.category?.name || post?.category || "Technology";

  // 2. Statusni backend'dagi 'is_active' maydoniga moslab aniqlaymiz
  const isPublished =
    post?.is_active !== undefined
      ? post.is_active
      : post?.status === "Published";
  const statusText = isPublished ? "Published" : "Draft";

  const statusClasses = isPublished
    ? "bg-green-50 text-green-500 font-medium"
    : "bg-gray-100 text-gray-500 font-medium";

  // 3. Kategoriyaga qarab ranglarni xavfsiz tanlaymiz
  const categoryClasses =
    categoryName === "Technology"
      ? "bg-blue-50 text-blue-500"
      : categoryName === "Productivity"
        ? "bg-indigo-50 text-indigo-500"
        : categoryName === "Design"
          ? "bg-purple-50 text-purple-500"
          : "bg-gray-50 text-gray-500";

  // 4. Sanani chiroyli formatda kesib olamiz
  const formattedDate = post?.created_at
    ? post.created_at.substring(0, 10)
    : post?.date || "No date";

  // 🚀 Backenddan maqolani o'chirish funksiyasi
  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);

    // LocalStorage'dan faol tokenni qidiramiz
    const token =
      localStorage.getItem("token") || localStorage.getItem("access");

    if (!token) {
      setError(
        "O‘chirish uchun tizimga kirgan bo‘lishingiz kerak (Token topilmadi).",
      );
      setIsDeleting(false);
      return;
    }

    try {
      const BASE_URL = "https://tevoj98108.pythonanywhere.com/api/v1/";

      // Backendga DELETE so'rovini token bilan birga yuboramiz
      await axios.delete(`${BASE_URL}articles/${post.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`, // Agar JWT bo'lsa 'Bearer', agar Token bo'lsa 'Token' deb yozing
        },
      });

      // Agar o'chirish muvaffaqiyatli bo'lsa, o'zgarishni ekranda aks ettirish uchun ota komponentni xabardor qilamiz
      if (onDeleteSuccess) {
        onDeleteSuccess(post.id);
      }
    } catch (err) {
      console.error("O'chirishda xatolik yuz berdi:", err);

      if (err.response && err.response.status === 401) {
        setError(
          "Token muddati tugagan yoki noto'g'ri. Iltimos, qayta login qiling.",
        );
      } else {
        setError("O‘chirishda xatolik yuz berdi.");
      }
      setIsDeleting(false);
      setIsConfirming(false);
    }
  };

  return (
    <tr className="border-b border-gray-50 last:border-0 text-sm hover:bg-gray-50/50 transition-colors">
      <td className="py-4 px-6 font-semibold text-gray-800">{post?.title}</td>
      <td className="py-4 px-6">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${categoryClasses}`}
        >
          {categoryName}
        </span>
      </td>
      <td className="py-4 px-6 text-gray-400">{formattedDate}</td>
      <td className="py-4 px-6">
        <span className={`px-3 py-1 rounded-full text-xs ${statusClasses}`}>
          {statusText}
        </span>
      </td>
      <td className="py-4 px-6 text-right">
        {!isConfirming ? (
          <div className="flex justify-end items-center space-x-3">
            <Link
              to={`/admin/update/${post?.id}`}
              className="text-blue-500 hover:underline font-medium"
            >
              Edit
            </Link>
            <button
              onClick={() => setIsConfirming(true)}
              className="text-red-500 hover:underline font-medium"
            >
              Delete
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-end space-y-1">
            <span className="text-xs text-gray-500">O‘chirilsinmi?</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="text-red-600 hover:underline font-semibold text-xs disabled:opacity-50"
              >
                {isDeleting ? "..." : "Ha"}
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setIsConfirming(false)}
                disabled={isDeleting}
                className="text-gray-500 hover:underline text-xs disabled:opacity-50"
              >
                Yo'q
              </button>
            </div>
            {error && <span className="text-[10px] text-red-500">{error}</span>}
          </div>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
