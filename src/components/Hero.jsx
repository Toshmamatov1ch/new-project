import React from "react";
import Button from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import HeroImg from "../assets/icons/hero.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className=" text-align flex items-center justify-between gap-4">
      <div className="w-146">
        <h1 className="font-inter font-bold text-6xl leading-15  align-middle text-black mb-6">
          Create, Read,{" "}
          <span className="bg-linear-to-r from-[#4346ef] via-[#8524E5] bg-clip-text text-transparent">
            Inspire.
          </span>
        </h1>
        <p className="text-[20px] text-[#6B7280] leading-7 mb-6">
          Discover stories written by amazing people. Share your knowledge and
          inspire others with your unique perspective.
        </p>
        <div className="flex flex-col items-start gap-4  md:flex-row">
          <Link to={"/posts"}>
            <Button
              text={"Explore Posts"}
              variant={"secondary"}
              icon={<FaLongArrowAltRight />}
            />
          </Link>
          <Link to={"/auth"}>
            <Button text={"Get Started"} variant={"danger"} />
          </Link>
        </div>
      </div>
      <div>
        <img src={HeroImg} alt="hero img" className="hidden lg:block" />
      </div>
    </section>
  );
}

export default Hero;
