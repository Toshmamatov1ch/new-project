import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ post }) => {
  // Status ranglari (Published yoki Draft)
  const statusClasses =
    post.status === "Published"
      ? "bg-green-50 text-green-500 font-medium"
      : "bg-gray-100 text-gray-500 font-medium";

  // Category ranglari
  const categoryClasses =
    post.category === "Technology"
      ? "bg-blue-50 text-blue-500"
      : post.category === "Productivity"
        ? "bg-indigo-50 text-indigo-500"
        : post.category === "Design"
          ? "bg-purple-50 text-purple-500"
          : "bg-gray-50 text-gray-500";

  return (
    <tr className="border-b border-gray-50 last:border-0 text-sm hover:bg-gray-50/50 transition-colors">
      {/* Title */}
      <td className="py-4 px-6 font-semibold text-gray-800">{post.title}</td>

      {/* Category */}
      <td className="py-4 px-6">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${categoryClasses}`}
        >
          {post.category}
        </span>
      </td>

      {/* Date */}
      <td className="py-4 px-6 text-gray-400">{post.date}</td>

      {/* Status */}
      <td className="py-4 px-6">
        <span className={`px-3 py-1 rounded-full text-xs ${statusClasses}`}>
          {post.status}
        </span>
      </td>

      {/* Actions */}
      <td className="py-4 px-6 text-right space-x-3">
        <Link
          to={`/admin/update/${post.id}`} // <-- Boshida mütloqo /admin/ bo'lishi shart!
          className="text-blue-500 hover:"
        >
          Edit
        </Link>
        <button className="text-red-500 hover:underline font-medium">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
