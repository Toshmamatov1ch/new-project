import React from "react";
import DashboardStats from "../../components/DashboardStats";
import RecentPostsTable from "../../components/RecentPostsTable";

const Dashboard = () => {
  return (
    // Bu butun sahifani o'rab turuvchi wrapper. padding (px-6) har doim chetlarni bir xil ushlab turadi.
    <div className="min-h-screen bg-gray-50/50 py-8 px-6 md:px-12 font-sans">
      {/* Dashboard Sarlavhasi */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-950">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">
          Welcome back! Here's an overview of your blog.
        </p>
      </div>

      {/* Tepadagi 4 ta Karta - kengligi va chetlari jadval bilan bir xil bo'lishi uchun max-w-7xl beramiz */}
      <div className="max-w-7xl mx-auto mb-6">
        <DashboardStats />
      </div>

      {/* Pastdagi Jadval - bu ham max-w-7xl va mx-auto ichida bo'ladi */}
      <div className="max-w-7xl mx-auto">
        <RecentPostsTable />
      </div>
    </div>
  );
};

export default Dashboard;
