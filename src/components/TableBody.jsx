import React from "react";
import TableRow from "./TableRow";

// onDeleteSuccess propini qabul qilamiz
const TableBody = ({ posts, onDeleteSuccess }) => {
  return (
    <tbody>
      {posts.map((post) => (
        <TableRow
          key={post.id}
          post={post}
          onDeleteSuccess={onDeleteSuccess} // Uni TableRow-ga uzatamiz
        />
      ))}
    </tbody>
  );
};

export default TableBody;
