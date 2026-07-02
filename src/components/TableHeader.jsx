import React from "react";

function TableHeader() {
  return (
    <thead>
      <tr className="border-b border-slate-100 text-slate-400 text-xs font-semibold uppercase tracking-wider">
        <th className="pb-4 font-medium text-left">Title</th>
        <th className="pb-4 font-medium text-left">Category</th>
        <th className="pb-4 font-medium text-left">Date</th>
        <th className="pb-4 font-medium text-left">Status</th>
        <th className="pb-4 font-medium text-center">Actions</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
