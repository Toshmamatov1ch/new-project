import React from "react";
import { Outlet } from "react-router-dom"; // 1. Outlet'ni import qilish shart!

function AdminLayout() {
  return (
    <div className="admin-container">
      {/* Bu yerda sizning Sidebar yoki Menyuyingiz bo'lishi mumkin */}
      <aside></aside>

      <main className="admin-content">
        {/* 2. Dashboard yoki CreatePosts sahifalari aynan shu Outlet o'rniga kelib o'tiradi */}
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
