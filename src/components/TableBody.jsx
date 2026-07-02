import React from "react";
import TableRow from "./TableRow";

function TableBody({ posts }) {
  return (
    <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
      {posts.map((post) => (
        <TableRow key={post.id} post={post} />
      ))}
    </tbody>
  );
}

export default TableBody;
