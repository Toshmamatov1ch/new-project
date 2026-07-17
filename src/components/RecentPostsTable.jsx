import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { usePosts } from "./PostContext"; // Context-ni import qilamiz

const RecentPostsTable = () => {
  const { posts, loading, error, deletePost } = usePosts();

  // O'chirish tugmasi bosilganda context-dagi deletePost funksiyasini chaqiramiz
  const handlePostDeleted = async (deletedId) => {
    await deletePost(deletedId);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-6xl mx-auto my-8 font-sans">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recent Posts</h2>
        <p className="text-sm text-gray-400 mt-1">
          Manage and monitor your latest content
        </p>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500">Yuklanmoqda...</div>
      ) : error ? (
        <div className="text-center py-10 text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <TableHeader />
            <TableBody posts={posts} onDeleteSuccess={handlePostDeleted} />
          </table>
        </div>
      )}
    </div>
  );
};

export default RecentPostsTable;
