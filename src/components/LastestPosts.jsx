import React from "react";
import PostCard from "./PostCard";
import { usePosts } from "./PostContext.jsx"; // <-- Yo'lini to'g'riligingizga ishonch hosil qiling
import { v4 as uuidv4 } from "uuid";
import Button from "./Button.jsx";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function LatestPosts() {
  // Context'dagi dinamik posts o'zgaruvchisini olamiz
  const { posts } = usePosts();

  return (
    <div className="text-align mb-32">
      <div className="flex flex-col items-stretch md:flex-row md:items-center justify-between">
        <div className="mb-10 text-left">
          <h2 className="text-3xl md:text-[36px] font-extrabold font-inter text-[#111827] tracking-tight mb-2">
            Latest Posts
          </h2>
          <p className="text-[#6B7280] text-[16px] font-normal font-inter leading-relaxed">
            Check out our most recent articles
          </p>
        </div>

        <Link to={"/posts"} className="mb-4">
          <Button
            text={"View All"}
            variant={"danger"}
            icon={<FaLongArrowAltRight />}
          />
        </Link>
      </div>

      {/* Grid qismi: Crash xatoligini oldini olish uchun posts massiv ekanligini tekshiramiz */}
      {!posts || !Array.isArray(posts) || posts.length === 0 ? (
        <div className="text-center py-12 text-gray-400 text-lg">
          Hozircha hech qanday post mavjud emas. Admin panelidan yangi post
          qo'shing!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((item) => (
            <PostCard key={item.id || uuidv4()} card={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default LatestPosts;
