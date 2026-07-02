import React from "react";

function TableRow({ post }) {
  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="py-4 font-semibold text-slate-800 text-left max-w-xs md:max-w-md truncate">
        {post.title}
      </td>
      <td className="py-4 text-left">
        <span
          className={`px-2.5 py-1 rounded-md text-xs font-semibold ${post.catBg}`}
        >
          {post.category}
        </span>
      </td>
      <td className="py-4 text-left text-slate-500 font-medium">{post.date}</td>
      <td className="py-4 text-left">
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-bold ${post.statusBg}`}
        >
          {post.status}
        </span>
      </td>
      <td className="py-4 text-center">
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors cursor-pointer"
            onClick={() => console.log(`Edit: ${post.id}`)}
          >
            Edit
          </button>
          <button
            type="button"
            className="text-red-500 hover:text-red-700 font-medium text-sm transition-colors cursor-pointer"
            onClick={() => console.log(`Delete: ${post.id}`)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
