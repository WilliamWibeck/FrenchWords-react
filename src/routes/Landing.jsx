import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu.js/Menu";
import Typewriter from "typewriter-effect";
import GetStartedButton from "../components/GetStartedButton/GetStartedButton";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [toggle, setToggle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(
      () => {
        setShowButton(true);
      },
      22000,
      []
    );
  });

  return (
    <div className="screen-bg h-screen bg-[#D9D9D9] w-vw flex flex-col gap-8 items-center justify-center font-light select-none">
      <h1 className="text-7xl font-mono ">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to WordGrinder!")

              .pauseFor(1500)
              .deleteAll()
              .typeString("Made to help expand my voca")
              .pauseFor(300)
              .deleteChars(7)
              .pauseFor(100)
              .typeString("your vocabulary.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Lets get started!")

              .start();
          }}
        />
      </h1>
      <div className="">{showButton && <GetStartedButton />}</div>
      {toggle && <Menu />}
      <button className="text-4xl" onClick={() => navigate("/menu")}>
        Skip
      </button>
    </div>
  );
};

export default Landing;
