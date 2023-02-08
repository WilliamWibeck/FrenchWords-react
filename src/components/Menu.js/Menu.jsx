import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import LoginButton from "../LoginButton/LoginButton";
import { motion } from "framer-motion";
import collection from "easter-egg-collection";

const Menu = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate("/game/" + path);
  };

  return (
    <div className="bg-[#D9D9D9] flex flex-col justify-center items-center h-screen select-none">
      <div className="flex w-100vw">
        <div className="">
          <div className="left-1 top-1 absolute">
            <BackButton />
          </div>
          <div className="right-1 absolute top-1">
            <LoginButton />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center bg-[#CDCDCD] rounded-lg ">
          <h1 className="text-3xl p-1.5 text-[#5A5A5A]">Categories</h1>
          <div className="grid-cols-3 grid gap-2 text-2xl h-96 w-96 rounded-xl items-center justify-center p-2">
            <button
              className="bg-[#D9D9D9] h-full rounded-xl hover:bg-gray-200"
              onClick={() => handleClick("months")}
            >
              Months
            </button>
            <button
              className="bg-[#D9D9D9] h-full rounded-xl hover:bg-gray-200"
              onClick={() => handleClick("animals")}
            >
              Animals
            </button>
            <button
              className="bg-[#D9D9D9] h-full rounded-xl hover:bg-gray-200"
              onClick={() => handleClick("clothing")}
            >
              Clothing
            </button>
            <button
              className="bg-[#D9D9D9] h-full rounded-xl hover:bg-gray-200"
              onClick={() => handleClick("weather")}
            >
              Weather
            </button>
            <button
              className="bg-[#D9D9D9] h-full rounded-xl hover:bg-gray-200"
              onClick={() => handleClick("weekdays")}
            >
              Weekdays
            </button>
            <button
              className="bg-[#D9D9D9] h-full rounded-xl hover:bg-gray-200"
              onClick={() => handleClick("jobs")}
            >
              Jobs
            </button>
            <button
              className="bg-[#D9D9D9] h-full rounded-xl hover:bg-gray-200"
              onClick={() => navigate("/translateparagraph")}
            >
              Countries
            </button>
            <button
              className="bg-[#D9D9D9] h-full rounded-xl hover:bg-gray-200"
              onClick={() => navigate("/identifyform")}
            >
              Tenses
            </button>
            <button
              className="bg-[#D9D9D9] h-full rounded-xl hover:bg-gray-200"
              onClick={() => handleClick("allWords")}
            >
              Random
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;
