import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu.js/Menu";
import Typewriter from "typewriter-effect";

const Landing = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="screen-bg h-screen bg-[#D9D9D9] w-vw flex flex-col gap-8 items-center justify-center font-light">
      <h1 className="text-7xl font-mono">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to WordGrinder!")

              .pauseFor(1500)
              .deleteAll()
              .typeString("Made to help expand your vocabulary.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Lets get started!")

              .start();
          }}
        />
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
