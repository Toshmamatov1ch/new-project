import React from "react";
import PostCard from "./PostCard"; // PostCard yo'li
import { cardsData } from "../data/cardsData.js"; // Ma'lumotlar yo'li
import { v4 as uuidv4 } from "uuid";

function LatestPosts() {
  return (
    <div className="text-align mb-32 ">
      <div className="mb-10 text-left">
        <h2 className="text-3xl md:text-[36px] font-extrabold font-inter text-[#111827] tracking-tight mb-2">
          Latest Posts
        </h2>

        <p className="text-[#6B7280] text-[16px] font-normal font-inter leading-relaxed">
          Check out our most recent articles
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((item) => (
          <PostCard key={uuidv4()} card={item} />
        ))}
      </div>
    </div>
  );
}

export default LatestPosts;
