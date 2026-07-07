import React from "react";

const TableHeader = () => {
  return (
    <thead className="border-b border-gray-100 text-left text-sm text-gray-400">
      <tr>
        <th className="py-4 px-6 font-normal">Title</th>
        <th className="py-4 px-6 font-normal">Category</th>
        <th className="py-4 px-6 font-normal">Date</th>
        <th className="py-4 px-6 font-normal">Status</th>
        <th className="py-4 px-6 text-right font-normal">Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
