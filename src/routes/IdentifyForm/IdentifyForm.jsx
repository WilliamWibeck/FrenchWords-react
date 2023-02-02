import React from "react";
import { sentenceList } from "../../data/sentencelist";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import LoginButton from "../../components/LoginButton/LoginButton";
import { motion } from "framer-motion";

const IdentifyForm = () => {
  const [sentence, setSentence] = useState("");
  const [choice, setChoice] = useState();
  const [noWordLeft, setNoWordLeft] = useState("");
  const navigate = useNavigate();

  /*   const giveSentence = () => {
    let currentSentence =
      sentenceList[Math.floor(Math.random() * sentenceList.length)];
    setSentence(currentSentence);
  }; */

  const giveSentence = () => {
    let unfiliteredSentenceList = sentenceList;
    let filteredSentenceList = unfiliteredSentenceList.filter((sentencess) => {
      return sentencess.answered == false;
    });
    let currentSentence =
      filteredSentenceList[
        Math.floor(Math.random() * filteredSentenceList.length)
      ];

    setSentence(currentSentence);
  };

  if (!sentence) {
    giveSentence();
  }

  const handleClick = (formChoice) => {
    setChoice(formChoice);
    console.log(formChoice, sentence.correctForm);

    if (formChoice === sentence.correctForm) {
      sentence.answered = true;
      giveSentence();
      console.log(sentence);
      console.log("correct");
    } else {
      console.log("wrong");
    }
  };

  return (
    <div>
      <div className="">
        <div className="left-1 top-1 absolute">
          <BackButton />
        </div>
        <div className="right-1 absolute top-1">
          <LoginButton />
        </div>
      </div>
      <div className="h-screen flex bg-[#D9D9D9] flex-col items-center justify-center gap-10 select-none">
        <h1 className="text-8xl ">'{sentence.sentence}'</h1>
        <div className="gap-14 flex flex-row text-white text-3xl font-medium">
          <button
            className="bg-[#CDCDCD] rounded-lg h-28 w-36 hover:bg-purple-700 transition ease-in-out duration-400"
            onClick={() => handleClick("futur")}
          >
            Futur
          </button>
          <button
            className="bg-[#CDCDCD] rounded-lg h-28 w-36 hover:bg-purple-700 transition ease-in-out"
            onClick={() => handleClick("Passé Composé")}
          >
            Passé Composé
          </button>
          <button
            className="bg-[#CDCDCD] rounded-lg h-28 w-36 hover:bg-purple-700 transition ease-in-out"
            onClick={() => handleClick("imparfait")}
          >
            Imparfait
          </button>
          <button
            className="bg-[#CDCDCD] rounded-lg h-28 w-36 hover:bg-purple-700 transition ease-in-out"
            onClick={() => handleClick("present")}
          >
            Présent
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdentifyForm;
