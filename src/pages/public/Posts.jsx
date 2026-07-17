import React, { useState, useMemo } from "react";

import PostCard from "../../components/PostCard";
import PostsHero from "../../components/PostsHero";
import { usePosts } from "../../components/PostContext"; // Yo'lni o'z loyihangizga moslang

function Posts() {
  // 1. Kategoriya va Qidiruv uchun statelar
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // 2. Postlarni PostContext orqali olamiz (fetch logikasi shu yerda takrorlanmaydi)
  const { posts, loading: isLoading, error } = usePosts();

  // 3. Kategoriyalar ro'yxatini backenddan kelayotgan postlar ichidan
  // dinamik tarzda chiqarib olamiz — shunda ular doim haqiqiy ma'lumotga mos keladi
  const categories = useMemo(() => {
    const unique = new Set(
      posts.map((item) => item.category).filter((cat) => Boolean(cat)), // bo'sh/undefined qiymatlarni chiqarib tashlaymiz
    );
    return ["All", ...Array.from(unique)];
  }, [posts]);

  // 4. Ham Kategoriya, ham Qidiruv (Input) bo'yicha filterlash logikasi
  const filteredPosts = posts.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    const matchesSearch = item.title
      ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
      : false;

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PostsHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* FILTER BUTTONS */}
      <div className="flex justify-center mt-12 mb-6">
        <div className="w-90 flex items-center bg-slate-100/80 p-1.5 rounded-2xl flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm font-medium transition-all duration-200 rounded-xl ${
                activeCategory === category
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* POSTS SECTION */}
      <section className="py-16">
        {isLoading ? (
          <div className="text-center py-16 text-gray-500 font-medium">
            Loading posts...
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-500 font-medium">
            Error: {error}
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="text-align grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((item) => (
              <PostCard key={item.id || item._id} card={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400 font-medium">
            No posts found matching your criteria.
          </div>
        )}
      </section>
    </>
  );
}

export default Posts;
