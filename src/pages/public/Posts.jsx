import React, { useState, useEffect } from "react";

// icons
import { FaSearch } from "react-icons/fa";
import PostCard from "../../components/PostCard";
import PostsHero from "../../components/PostsHero";

// Agar axios ishlatsangiz (tavsiya etiladi):
// import axios from "axios";

function Posts() {
  // 1. Kategoriya va Qidiruv uchun statelar
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Backenddan keladigan postlar va yuklanish holati uchun statelar
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Kategoriya tugmalari ro'yxati
  const categories = ["All", "Technology", "Productivity", "Design"];

  // 3. API'dan ma'lumotlarni tortib olish (useEffect)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);

        // BU YERGA backend API manzilingizni yozasiz:
        const response = await fetch("https://api.example.com/posts");

        if (!response.ok) {
          throw new Error("Ma'lumotlarni yuklashda xatolik yuz berdi");
        }
        const data = await response.json();

        setPosts(data); // Backenddan kelgan postlarni statega saqlaymiz
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []); // Bo'sh massiv - faqat sahifa birinchi marta yuklanganda ishlaydi

  // 4. Ham Kategoriya, ham Qidiruv (Input) bo'yicha filterlash logikasi
  // (Endi cardsData o'rniga api'dan kelgan "posts" ishlatiladi)
  const filteredPosts = posts.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    // Xatolik bermasligi uchun item.title mavjudligini tekshirib olamiz
    const matchesSearch = item.title
      ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
      : false;

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PostsHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* FILTER BUTTONS (Postlar tepasida joylashgan qismi) */}
      <div className="flex justify-center mt-12 mb-6">
        <div className="w-90 flex items-center bg-slate-100/80 p-1.5 rounded-2xl">
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
        {/* 1-holat: Ma'lumot yuklanyapti */}
        {isLoading ? (
          <div className="text-center py-16 text-gray-500 font-medium">
            Loading posts...
          </div>
        ) : error ? (
          /* 2-holat: Xatolik yuz berdi */
          <div className="text-center py-16 text-red-500 font-medium">
            Error: {error}
          </div>
        ) : filteredPosts.length > 0 ? (
          /* 3-holat: Postlar muvaffaqiyatli yuklandi va filterlandi */
          <div className="text-align grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((item) => (
              <PostCard key={item.id || item._id} card={item} />
              // Izoh: Backendda id o'rniga MongoDB'dagi kabi _id bo'lishi ham mumkin
            ))}
          </div>
        ) : (
          /* 4-holat: Agar qidiruvga yoki kategoriyaga mos post topilmasa */
          <div className="text-center py-16 text-gray-400 font-medium">
            No posts found matching your criteria.
          </div>
        )}
      </section>
    </>
  );
}

export default Posts;
