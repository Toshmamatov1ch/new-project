import React from "react";

import { Outlet } from "react-router-dom";

// coponents
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col ">
      <header className=" bg-[rgba(255, 255, 255, 0.8)] py-3.5 border-b border-gray-200  backdrop-blur-md w-full fixed z-10">
        <Navbar />
      </header>
      <main className="grow ">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PublicLayout;
