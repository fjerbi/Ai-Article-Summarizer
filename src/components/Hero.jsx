import React from "react";
import { logo } from "../assets";
const Hero = () => {
  return (
    <header
      className="w-full flex 
    justify-center items-center flex-col"
    >
      <nav
        className="flex justify-between 

items-center w-full mb-10 pt-3"
      >
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/fjerbi")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles With <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
        reprehenderit est incidunt voluptas aspernatur delectus? Nesciunt
        commodi officia, quaerat quos quas doloremque earum. Quas voluptas esse
        perferendis ea quibusdam deserunt?
      </h2>
    </header>
  );
};

export default Hero;
