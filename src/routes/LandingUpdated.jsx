import { Button } from "@nextui-org/react";
import React from "react";
import Typewriter from "typewriter-effect";
import MyComponent from "../components/VantaBG/VantaBg";
import ReactPlayer from "react-player";
import Videoplayer from "../components/VideoPlayer/Videoplayer";
import video from "../assets/Videos/video.mp4";

const LandingUpdated = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#D9D9D9]">
      <div className="grid grid-cols-4 gap-12 m-8">
        <div className="bg-emerald-200 col-span-4 grid grid-cols-2 w-screen rounded-2xl"></div>
        <div className="col-span-2 w-[100%] h-72 rounded-2xl text-[56px] flex items-center justify-center p-3">
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
        </div>
        <div className="bg-[#CDCDCD] col-span-2 w-[100%] h-72 rounded-2xl">
          1
        </div>
        <div className="bg-[#CDCDCD] col-span-2 h-36 rounded-2xl items-center justify-center flex transition hover:scale-100"></div>
        <div className="bg-[#CDCDCD] col-span-2 h-36 rounded-2xl"></div>
        <div className="bg-[#CDCDCD] h-96 rounded-2xl">
          <div>
            <video src={video} type="video/mp4"></video>
          </div>
        </div>
        <div className="bg-[#CDCDCD] h-96 rounded-2xl">1</div>
        <div className="bg-[#CDCDCD] col-span-2 rounded-2xl">1</div>
      </div>
    </div>
  );
};

export default LandingUpdated;
