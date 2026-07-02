import React from "react";
import {
  LuLayoutDashboard,
  LuFileText,
  LuPlus,
  LuLogOut,
} from "react-icons/lu";

import { Link } from "react-router-dom";

import Logo from "../../assets/icons/Link.svg";
// Yangi yaratilgan tarqoq komponentlarni chaqiramiz
import StatsGrid from "../../components/StatsGrid";
import RecentPostsTable from "../../components/RecentPostsTable";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50/50">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-6 fixed h-full z-10">
        <div className="flex flex-col gap-8">
          <div>
            <div className=" font-bold text-xl">
              <img src={Logo} alt="site logoo" />
              <p className="text-xs text-gray-400 mt-1 font-medium pl-1">
                Admin Panel
              </p>
            </div>
          </div>

          <nav className="flex flex-col gap-1.5">
            <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-xl transition-all">
              <LuLayoutDashboard className="w-5 h-5" /> Dashboard
            </button>
            <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-xl transition-all">
              <LuFileText className="w-5 h-5" /> Posts
            </button>
            <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-xl transition-all">
              <LuPlus className="w-5 h-5" /> Create Post
            </button>
          </nav>
        </div>

        <Link
          to={"/"}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all border-t border-slate-100 pt-4"
        >
          <LuLogOut className="w-5 h-5" /> Logout
        </Link>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1  text-align py-8">
        <div className="mb-8 border-b border-transparent pb-1">
          <h1 className="text-3xl font-bold text-slate-900 text-left">
            Dashboard
          </h1>
          <p className="text-slate-400 text-sm mt-1 text-left">
            Welcome back! Here's an overview of your blog.
          </p>
        </div>

        {/* 1. Tepadagi barcha kartalar yig'ilgan komponent */}
        <StatsGrid />

        {/* 2. Pastdagi jadval va uning ichki qismlari yig'ilgan komponent */}
        <RecentPostsTable />
      </main>
    </div>
  );
}

export default Dashboard;
