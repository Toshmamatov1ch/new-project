import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/icons/Link.svg";
import Button from "./Button";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";

function AdminBar() {
  return (
    <aside className="h-screen flex flex-col justify-between  border-r border-gray-300 w-64">
      <div className="p-6">
        <img src={Logo} alt="site logo" />
        <h5 className="text-gray-400">Admin Panel</h5>
      </div>
      <div className="grow border-t p-4 border-gray-300 border-b flex  gap-4 flex-col">
        <Link
          className="w-full rounded-2xl flex  items-center hover:text-white gap-2 hover:bg-[rgba(67,70,239,0.5)] py-3 px-4"
          to={"/admin"}
        >
          <MdOutlineDashboard />
          Dashboard
        </Link>
        <Link
          className="w-full rounded-2xl flex  items-center hover:text-white gap-2 hover:bg-[rgba(67,70,239,0.5)] py-3 px-4"
          to={"update"}
        >
          <FaRegEdit />
          Update Post{" "}
        </Link>
        <Link
          className="w-full rounded-2xl flex  items-center hover:text-white gap-2 hover:bg-[rgba(67,70,239,0.5)] py-3 px-4"
          to={"createposts"}
        >
          <IoCreateOutline />
          Create Post{" "}
        </Link>
      </div>

      <div className="p-4">
        <Button text={"Log Out"} variant={"danger"} icon={<FaArrowLeft />} />
      </div>
    </aside>
  );
}

export default AdminBar;
