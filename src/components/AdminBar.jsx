import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/icons/Link.svg";
import Button from "./Button";
import { FaArrowLeft, FaRegEdit, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";

function AdminBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobil qurilmalar uchun Menu paneli */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 shadow-sm">
        <Link to={"/"} onClick={() => setIsOpen(false)}>
          <img src={Logo} alt="site logo" className="h-8" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobil overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Asosiy Sidebar */}
      <aside
        className={`h-screen flex flex-col justify-between border-r border-gray-200 w-64 bg-white fixed md:sticky top-0 left-0 z-40 transition-transform duration-300 md:transform-none
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          pt-16 md:pt-0`}
      >
        {/* Yuqori qism (Logo) */}
        <div className="p-6 hidden md:block border-b border-gray-100">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={Logo} alt="site logo" className="h-8" />
          </Link>
        </div>

        {/* Menyu linklari (O'rtadagi qism) */}
        <div className="grow p-4 flex flex-col gap-2 overflow-y-auto">
          {/* Dashboard */}
          <Link
            className="w-full font-medium rounded-xl flex items-center gap-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/70 py-3 px-4 transition-all duration-200 group"
            to={"/admin"}
            onClick={() => setIsOpen(false)}
          >
            <MdOutlineDashboard
              size={20}
              className="text-gray-400 group-hover:text-indigo-600"
            />
            <span>Dashboard</span>
          </Link>

          {/* Update Post */}
          <Link
            className="w-full font-medium rounded-xl flex items-center gap-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/70 py-3 px-4 transition-all duration-200 group"
            to={"update"}
            onClick={() => setIsOpen(false)}
          >
            <FaRegEdit
              size={18}
              className="text-gray-400 group-hover:text-indigo-600"
            />
            <span>Update Post</span>
          </Link>

          {/* Create Post */}
          <Link
            className="w-full font-medium rounded-xl flex items-center gap-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/70 py-3 px-4 transition-all duration-200 group"
            to={"createposts"}
            onClick={() => setIsOpen(false)}
          >
            <IoCreateOutline
              size={20}
              className="text-gray-400 group-hover:text-indigo-600"
            />
            <span>Create Post</span>
          </Link>
        </div>

        {/* Pastki qism (Chiqish tugmasi) */}
        <div className="p-4 border-t border-gray-100 flex justify-center">
          <Link to={"/"} className="w-full" onClick={() => setIsOpen(false)}>
            <Button
              text={"Log Out"}
              variant={"danger"}
              icon={<FaArrowLeft />}
            />
          </Link>
        </div>
      </aside>

      {/* Mobil uchun bo'sh joy */}
      <div className="h-16 md:hidden w-full" />
    </>
  );
}

export default AdminBar;
