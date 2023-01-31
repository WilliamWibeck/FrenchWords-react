import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu.js/Menu";

const Landing = () => {
  const [toggle, setToggle] = useState(false);
  /* const underscore = "_"; */
  const welcometext = "Welcome to WordGrinder!";

  return (
    <div className="screen-bg h-screen bg-[#D9D9D9] w-vw flex flex-col gap-5 items-center justify-center font-light">
      <h1 className="text-6xl ">
        {welcometext}
        {/* {underscore} */}
      </h1>
      <Link
        to="/menu"
        className="bg-[#FBFBF1] p-4 shadow-md text-lg font-semibold hover:scale-105 transition ease-in-out"
      >
        Get Started!
      </Link>
      {toggle && <Menu />}
    </div>
  );
};

export default Landing;
