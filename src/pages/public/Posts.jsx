import React, { useState } from "react";

// icons
import { FaSearch } from "react-icons/fa";
import PostCard from "../../components/PostCard";

import { cardsData } from "../../data/cardsData";
import PostsHero from "../../components/PostsHero";

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
      <PostsHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* FILTER BUTTONS (Postlar tepasida joylaşgan qismi) */}
      <div className="flex justify-center mt-12 mb-6">
        <div className="w-90  flex items-center bg-slate-100/80 p-1.5 rounded-2xl">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm font-medium transition-all duration-200 rounded-xl ${
                activeCategory === category
                  ? "bg-white text-slate-900 shadow-sm" // Aktiv holat
                  : "text-slate-500 hover:text-slate-800" // Noaktiv holat
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* POSTS SECTION */}
      <section className="py-16">
        {filteredPosts.length > 0 ? (
          <div className="text-align  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((item) => (
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
