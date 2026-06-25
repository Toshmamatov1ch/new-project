import React from "react";

import InformationCard from "./InformationCard";
import { informationsBlogify } from "../data/informationBlogiyfy";
import { v4 as uuidv4 } from "uuid";

function Information() {
  return (
    <div>
      <div className="flex flex-col items-center mt-32 px-2.5">
        <h2 className="font-inter font-bold text-4xl leading-10 space-x-0.5 mb-4">
          Why Choose Blogify?
        </h2>
        <p className="font-inter leading-7 text-gray-400">
          Built with modern technologies and best practices to provide the best
          blogging experience.
        </p>
      </div>
      <section className="text-align flex flex-col gap-6 lg:flex-row items-stretch mt-16 mb-64 transition-all  duration-300 hover: -translate-y-2 ">
        {informationsBlogify.map((item) => {
          return <InformationCard information={item} key={uuidv4()} />;
        })}
      </section>
    </div>
  );
}

export default Information;
