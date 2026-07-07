import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { recentPostsData } from "../data/recentPostsData";

const RecentPostsTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-6xl mx-auto my-8 font-sans">
      {/* Teppa qism sarlavhalari */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recent Posts</h2>
        <p className="text-sm text-gray-400 mt-1">
          Manage and monitor your latest content
        </p>
      </div>

      {/* Jadval korpusi */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <TableHeader />
          <TableBody posts={recentPostsData} />
        </table>
      </div>
    </div>
  );
};

export default RecentPostsTable;
