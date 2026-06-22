import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Linksvg from "../assets/icons/Link.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="w-full bg-white text-gray-600 border-t border-gray-100 font-sans">
      <div className="text-align py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          <div className="flex flex-col gap-4">
            <div>
              <img src={Linksvg} alt="Link svg" />
            </div>
            <p className="font-inter text-sm leading-5 align-middle">
              Create, read, and inspire. Discover amazing stories written by
              talented creators from around the world.
            </p>
          </div>

          {/* 2-ustun: Quick Links */}
          <div className="flex flex-col gap-4 md:pl-16">
            <h3 className="font-inter font-semibold text-2xl leading-8 align-middle">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 font-inter text-sm text-gray-500">
              <li>
                <Link
                  to={"/"}
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/posts"}
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  to={"/login"}
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[#0f172a] font-inter font-semibold text-2xl leading-8 align-middle">
              Connect
            </h3>
            <div className="flex items-center gap-5 text-gray-400 text-lg">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6366f1] transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6366f1] transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6366f1] transition-colors"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Pastki qism: Chiziq va Mualliflik huquqi */}
        <div className="border-t border-gray-100 pt-8 text-center text-xs text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Blogify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
