import React from "react";
import { sentenceList } from "../../data/sentencelist";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IdentifyForm = () => {
  const [sentence, setSentence] = useState("");
  const [choice, setChoice] = useState();
  const navigate = useNavigate();

  const giveSentence = () => {
    let currentSentence =
      sentenceList[Math.floor(Math.random() * sentenceList.length)];
    setSentence(currentSentence);
  };

  if (!sentence) {
    giveSentence();
  }

  const handleClick = (formChoice) => {
    setChoice(formChoice);
    console.log(formChoice, sentence.correctForm);

    if (formChoice === sentence.correctForm) {
      giveSentence();
      console.log("correct");
    } else {
      console.log("wrong");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>{sentence.sentence}</h1>
      <div className="">
        <button onClick={() => handleClick("futur")}>Futur</button>
        <button onClick={() => handleClick("Passé Composé")}>
          Passé Composé
        </button>
        <button>Imparfait</button>
        <button>Présent</button>
      </div>
    </div>
  );
};

export default IdentifyForm;
