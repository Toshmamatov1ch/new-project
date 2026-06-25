import React from "react";
import PostCard from "./PostCard"; // PostCard yo'li
import { cardsData } from "../data/cardsData.js"; // Ma'lumotlar yo'li
import { v4 as uuidv4 } from "uuid";
import Button from "./Button.jsx";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
function LatestPosts() {
  return (
    <div className="text-align mb-32 ">
      <div className="flex items-center justify-between">
        <div className="mb-10 text-left">
          <h2 className="text-3xl md:text-[36px] font-extrabold font-inter text-[#111827] tracking-tight mb-2">
            Latest Posts
          </h2>

          <p className="text-[#6B7280] text-[16px] font-normal font-inter leading-relaxed">
            Check out our most recent articles
          </p>
        </div>
        <Link to={"/posts"}>
          <Button
            text={"View All"}
            variant={"danger"}
            icon={<FaLongArrowAltRight />}
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.slice(0, 3).map((item) => (
          <PostCard key={uuidv4()} card={item} />
        ))}
      </div>
    </div>
  );
}

export default LatestPosts;
