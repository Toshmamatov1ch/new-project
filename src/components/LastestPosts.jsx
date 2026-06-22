import React from "react";
import PostCard from "./PostCard"; // PostCard yo'li
import { cardsData } from "../data/cardsData.js"; // Ma'lumotlar yo'li
import { v4 as uuidv4 } from "uuid";

function LatestPosts() {
  return (
    // max-w-6xl yoki max-w-7xl cardlarni markazda chiroyli ushlab turadi
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Eng muhim joyi: grid klasslari moped/telefonlarda 1ta, kompyuterda 3ta qiladi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((item) => (
          <PostCard key={uuidv4()} card={item} />
        ))}
      </div>
    </div>
  );
}

export default LatestPosts;
