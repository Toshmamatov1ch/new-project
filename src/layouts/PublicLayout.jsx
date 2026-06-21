import React from "react";

import { Outlet } from "react-router-dom";

// coponents
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col ">
      <header className=" bg-white/80 shadow-sm border border-b boder-gray-200 py-3.5">
        <Navbar />
      </header>
      <main className="grow bg-gray-200 text-black">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PublicLayout;
