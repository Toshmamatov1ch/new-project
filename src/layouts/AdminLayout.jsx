import React from "react";
import { Outlet } from "react-router-dom"; // 1. Outlet'ni import qilish shart!
import AdminBar from "../components/AdminBar";

function AdminLayout() {
  return (
    <div className="flex ">
      {/* Bu yerda sizning Sidebar yoki Menyuyingiz bo'lishi mumkin */}
      <aside>
        <AdminBar />
      </aside>
      <main className="text-align grow py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
