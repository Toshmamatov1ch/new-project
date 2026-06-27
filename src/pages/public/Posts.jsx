import React from "react";

// icons
import { FaSearch } from "react-icons/fa";
import PostCard from "../../components/PostCard";

import { cardsData } from "../../data/cardsData";
import { v4 as uuidv4 } from "uuid";

function Posts() {
  return (
    <>
      <div className="bg-linear-to-r from-[#F1F1FE] to-[#F7F1FD] text-white p-6 rounded-xl mt-16.25">
        <div className="py-24  flex flex-col items-center justify-center">
          <h2 className="font-inter font-bold text-6xl text-[#0F1729] mb-4">
            Explore Our Posts
          </h2>
          <p className="font-inter text-[20px] text-gray-500 mb-8">
            Discover amazing content from talented writers across various topics
          </p>
          <div className="bg-white w-136.5 py-3.75 px-3.25 rounded-2xl flex items-center gap-4 ">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search posts..."
              className="text-gray-500 outline-none  grow"
            />
          </div>
        </div>
      </div>

      <section className="text-align py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {cardsData.map((item) => (
            <PostCard key={uuidv4()} card={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Posts;
