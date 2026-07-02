import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function RecentPostsTable() {
  const recentPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      category: "Technology",
      date: "2025-11-20",
      status: "Published",
      catBg: "bg-blue-50 text-blue-600",
      statusBg: "bg-emerald-50 text-emerald-600",
    },
    {
      id: 2,
      title: "Mastering Productivity",
      category: "Productivity",
      date: "2025-11-18",
      status: "Published",
      catBg: "bg-purple-50 text-purple-600",
      statusBg: "bg-emerald-50 text-emerald-600",
    },
    {
      id: 3,
      title: "Design Principles That Matter",
      category: "Design",
      date: "2025-11-15",
      status: "Draft",
      catBg: "bg-pink-50 text-pink-600",
      statusBg: "bg-gray-100 text-gray-600",
    },
    {
      id: 4,
      title: "Building Scalable Applications",
      category: "Technology",
      date: "2025-11-12",
      status: "Published",
      catBg: "bg-blue-50 text-blue-600",
      statusBg: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
      <div className="mb-6 text-left">
        <h2 className="text-lg font-bold text-slate-900">Recent Posts</h2>
        <p className="text-slate-400 text-xs mt-0.5">
          Manage and monitor your latest content
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <TableHeader />
          <TableBody posts={recentPosts} />
        </table>
      </div>
    </div>
  );
}

export default RecentPostsTable;
