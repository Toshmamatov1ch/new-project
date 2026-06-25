import { useState } from "react"; // 1. State-ni import qilamiz
import { Link } from "react-router-dom";

import Button from "./Button";
import Linksvg from "../assets/icons/Link.svg";
import { FaBars, FaTimes } from "react-icons/fa"; // 2. FaTimes (X) ikonkasini qo'shamiz

function Navbar() {
  // Menyu holatini saqlash uchun state (false = yopiq, true = ochiq)
  const [isOpen, setIsOpen] = useState(false);

  // Menyuni ochish va yopish funksiyasi
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-align relative">
      {" "}
      {/* relative klassi pastdagi menyu to'g'ri joylashishi uchun kerak */}
      <div className="flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img src={Linksvg} alt="Link svg" />
          </Link>
        </div>

        {/* Katta ekranlar uchun menyu */}
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-8">
            <div className="flex gap-8">
              <Link
                to={"/"}
                className="font-inter font-medium text-sm leading-5 align-middle text-slate-900"
              >
                Home
              </Link>
              <Link
                to={"/posts"}
                className="font-inter font-medium text-sm leading-5 align-middle text-slate-900"
              >
                Posts
              </Link>
            </div>
            <Link to={"/auth"}>
              <Button text={"Login"} variant={"primary"} />
            </Link>
          </div>
        </div>

        {/* Mobil tugma (Burger menu) */}
        <div className="lg:hidden">
          {" "}
          {/* lg ekrandan kichik bo'lganda ko'rinadi */}
          <button onClick={toggleMenu} className="focus:outline-none pt-1">
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-slate-900" /> // Ochiq bo'lsa X chiqadi
            ) : (
              <FaBars className="w-6 h-6 text-slate-900" /> // Yopiq bo'lsa Bars chiqadi
            )}
          </button>
        </div>
      </div>
      {/* Mobil qurilmalar uchun ochiladigan oyna (Dropdown menyu) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 py-4 px-6 flex flex-col gap-4 lg:hidden z-50">
          <Link
            to={"/"}
            onClick={toggleMenu} // Link bosilganda menyu yopilishi uchun
            className="font-inter font-medium text-sm text-slate-900 py-2"
          >
            Home
          </Link>
          <Link
            to={"/posts"}
            onClick={toggleMenu}
            className="font-inter font-medium text-sm text-slate-900 py-2"
          >
            Posts
          </Link>
          <Link to={"/auth"} onClick={toggleMenu} className="w-full pt-2">
            <Button text={"Login"} variant={"primary"} className="w-full" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
