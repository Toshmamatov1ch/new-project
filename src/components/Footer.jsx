import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi"; // Blogify logosi uchun qalam ikonkasini

function Footer() {
  return (
    <footer className="w-full bg-white text-gray-600 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Yuqori qism: 3 ta ustun */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          {/* 1-ustun: Logo va Tavsif */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#6366f1] font-bold text-xl">
              <FiEdit3 className="text-2xl" />
              <span>Blogify</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Create, read, and inspire. Discover amazing stories written by
              talented creators from around the world.
            </p>
          </div>

          {/* 2-ustun: Quick Links */}
          <div className="flex flex-col gap-4 md:pl-16">
            <h3 className="text-[#0f172a] font-bold text-base tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>
                <a
                  href="/home"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/posts"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Posts
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* 3-ustun: Connect (Ijtimoiy tarmoqlar) */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#0f172a] font-bold text-base tracking-wide">
              Connect
            </h3>
            <div className="flex items-center gap-5 text-gray-400 text-lg">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6366f1] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6366f1] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#6366f1] transition-colors"
              >
                <FaLinkedinIn />
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
