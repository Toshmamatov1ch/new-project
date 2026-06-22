import React from "react";
import { Link } from "react-router-dom"; // ⚠️ Link-ni import qilamiz

function PostCard({ card }) {
  const categoryStyles = {
    Technology: "bg-[#3B82F6] text-white",
    Productivity: "bg-[#4F46E5] text-white",
    Design: "bg-[#6366F1] text-white",
  };

  if (!card) return null;

  return (
    <div className="border border-[#E5E7EB] rounded-6 overflow-hidden flex flex-col h-full bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group rounded-xl">
      {/* Rasm va Kategoriya qismi */}
      <div className="relative pt-[56.25%] overflow-hidden bg-gray-100">
        <img
          src={card.image}
          alt={card.title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <span
          className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide shadow-sm z-10 ${categoryStyles[card.category] || "bg-gray-600 text-white"}`}
        >
          {card.category}
        </span>
      </div>

      {/* Kontent qismi */}
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-2 text-[#6B7280] text-[14px] font-medium mb-3">
          <svg
            className="w-4 h-4 text-[#9CA3AF]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 3V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <span>{card.date}</span>
        </div>

        <h3 className="text-[20px] font-bold text-[#111827] leading-7 mb-3 transition-colors duration-200 group-hover:text-blue-600">
          {card.title}
        </h3>

        <p className="text-[#6B7280] text-[15px] leading-6 mb-6 grow">
          {card.desc}
        </p>

        <div className="mt-auto">
          <Link
            to={`/posts/${card.id}`} // Dinamik ID manzilga uzatiladi
            className="text-[#4F46E5] hover:text-[#3730A3] font-semibold text-[15px] inline-flex items-center gap-2 transition-colors duration-200 group/link"
          >
            Read more
            <svg
              className="w-4 h-4 transform transition-transform duration-200 group-hover/link:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
