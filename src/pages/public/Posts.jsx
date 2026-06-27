import React, { useState } from "react";

// icons
import { FaSearch } from "react-icons/fa";
import PostCard from "../../components/PostCard";

import { cardsData } from "../../data/cardsData";

function Posts() {
  // 1. Kategoriya va Qidiruv uchun statelar
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Kategoriya tugmalari ro'yxati
  const categories = ["All", "Technology", "Productivity", "Design"];

  // 3. Ham Kategoriya, ham Qidiruv (Input) bo'yicha filterlash logikasi
  const filteredPosts = cardsData.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* HEADER BANNER */}
      <div className="bg-gradient-to-r from-[#F1F1FE] to-[#F7F1FD] text-white p-6 rounded-xl mt-16">
        <div className="py-24 flex flex-col items-center justify-center">
          <h2 className="font-inter font-bold text-6xl text-[#0F1729] mb-4 text-center">
            Explore Our Posts
          </h2>
          <p className="font-inter text-[20px] text-gray-500 mb-8 text-center max-w-2xl">
            Discover amazing content from talented writers across various topics
          </p>

          {/* QIDIRUV INPUTI */}
          <div className="bg-white w-full max-w-md py-3.5 px-4 rounded-2xl flex items-center gap-4 shadow-sm border border-gray-100">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-gray-600 outline-none grow bg-transparent text-sm"
            />
          </div>
        </div>
      </div>

      {/* FILTER BUTTONS (Postlar tepasida joylashgan qismi) */}
      <div className="flex justify-center mt-12 mb-6">
        <div className="inline-flex items-center bg-slate-100/80 p-1.5 rounded-2xl gap-1 sm:gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm font-medium transition-all duration-200 rounded-xl ${
                activeCategory === category
                  ? "bg-white text-slate-900 shadow-sm" // Aktiv holat (image_71cd9d.png dagi kabi)
                  : "text-slate-500 hover:text-slate-800" // Noaktiv holat
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* POSTS SECTION */}
      <section className="py-16 text-align">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((item) => (
              // uuidv4() o'rniga item.id ishlatish performance uchun yaxshiroq
              <PostCard key={item.id} card={item} />
            ))}
          </div>
        ) : (
          /* Agar qidiruvga yoki kategoriyaga mos post topilmasa */
          <div className="text-center py-16 text-gray-400 font-medium">
            No posts found matching your criteria.
          </div>
        )}
      </section>
    </>
  );
}

export default Posts;
