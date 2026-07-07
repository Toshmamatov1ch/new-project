import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ posts }) => {
  return (
    <tbody>
      {posts.map((post) => (
        <TableRow key={post.id} post={post} />
      ))}
    </tbody>
  );
};

export default TableBody;
