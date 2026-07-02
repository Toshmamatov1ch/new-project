import React from "react";
//components
import Input from "./Input";

function PostsHero({ searchQuery, setSearchQuery }) {
  return (
    <section className="py-24 bg-[#f3f1fe]">
      <div className="container mx-auto flex items-center flex-col px-4">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 text-center text-slate-900">
          Explore Our Posts
        </h1>
        <p className="text-gray-500 text-lg md:text-xl mb-8 text-center max-w-2xl">
          Discover amazing content from talented writers across various topics
        </p>

        <div className="w-full max-w-2xl">
          <Input
            placeholder="Search posts..."
            value={searchQuery} // State shu yerga bog'lanadi
            onChange={(e) => setSearchQuery(e.target.value)} // Har bir harf yozilganda qiymat o'zgaradi
            icon={
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            }
            className="shadow-sm w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default PostsHero;
