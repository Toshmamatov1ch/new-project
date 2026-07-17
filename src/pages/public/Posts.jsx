import React, { useState, useEffect } from "react";

import PostCard from "../../components/PostCard";
import PostsHero from "../../components/PostsHero";

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
    let isMounted = true; // unmount bo'lgandan keyin state yangilanishining oldini olish

    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // API manzilini .env orqali olish (production uchun ham ishlaydi)
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

        const response = await fetch(`${API_URL}/api/posts`);

        if (!response.ok) {
          throw new Error("Ma'lumotlarni yuklashda xatolik yuz berdi");
        }

        const data = await response.json();

        // Backend har xil formatda qaytarishi mumkin: array yoki { posts: [...] }
        const postsArray = Array.isArray(data) ? data : data.posts || [];

        if (isMounted) {
          setPosts(postsArray);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchPosts();

    // Cleanup: komponent unmount bo'lganda flagni o'chiramiz
    return () => {
      isMounted = false;
    };
  }, []);

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
        <div className="w-90 flex items-center bg-slate-100/80 p-1.5 rounded-2xl">
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
