import React from "react";

//components
import Input from "./Input";

function PostsHero() {
  return (
    <section className="py-24 bg-[#f3f1fe] ">
      <div className="align-center flex items-center flex-col">
        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4">
          Explore Our Posts
        </h1>
        <p className="text-gray-400 text-[20px ] mb-8 text-center">
          Discover amazing content from talented writers across various topics
        </p>

        <Input
          width={"w-125"}
          type={"text"}
          placeholder={"search"}
          name={"search-post"}
        />
      </div>
    </section>
  );
}

export default PostsHero;
