import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  months,
  animals,
  allWords,
  clothing,
  weather,
  weekdays,
} from "../data/wordlist";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import LoginButton from "../components/LoginButton/LoginButton";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utilities/firebase/firebase";

const Game = () => {
  const { category } = useParams();
  const [wordlist, setWordlist] = useState("");
  const [word, setWord] = useState("");
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const wordsCompletedArr = [];
  const [wordsDone, setWordsDone] = useState(wordsCompletedArr);

  const giveWord = () => {
    let filteredWordList = wordlist.filter((words) => {
      return words.answered == false;
    });
    let currentWord =
      filteredWordList[Math.floor(Math.random() * filteredWordList.length)];
    setWord(currentWord);

    if (!currentWord) {
      alert("Good job, you have completed all the words!");
      navigate("/menu");
    }
  };

  const getWordsCollection = () => {
    const wordsCollectionRef = collection(db, "Words");
    getDocs(wordsCollectionRef)
      .then((response) => {
        console.log(response);
        const currentWord =
          response.docs[Math.floor(Math.random() * 1)]._document.data.value
            .mapValue.fields;
        /* console.log(currentWord.word.stringValue);
        console.log(currentWord.translation.stringValue); */
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getWordsCollection();
    switch (category) {
      case "animals":
        setWordlist(animals);
        break;
      case "months":
        setWordlist(months);
        break;
      case "allWords":
        setWordlist(allWords);
        break;
      case "clothing":
        setWordlist(clothing);
        break;
      case "weather":
        setWordlist(weather);
        break;
      case "weekdays":
        setWordlist(weekdays);
        break;

      default:
        navigate("/menu");
        break;
    }

    if (wordlist) {
      giveWord();
    }
  }, [category, wordlist]);

  const handleChange = (e) => {
    if (e.target.value == word.translation) {
      const index = wordlist.findIndex((el) => el.word === word.word);
      wordlist[index].answered = true;
      setWordsDone((wordsCompletedArr) => [...wordsCompletedArr, word]);
      console.log(wordlist);
      console.log(word.answered);
      setScore(score + 1);
      e.target.value = "";
      giveWord();
      database.ref("wordscompleted").set(wordsDone);

      console.log(wordsDone);
    }
  };

  const skipWord = () => {
    giveWord();
  };

  return (
    <>
      <div className="bg-[#D9D9D9]">
        <div className="flex flex-row content-between justify-between text-xl p-1">
          <BackButton />
          <LoginButton />
        </div>
        {word && (
          <div
            autocomplete="off"
            className="flex flex-col items-center justify-center autocomplete-off h-screen gap-24 select-none"
          >
            <h2 className="opacity-0 hover:opacity-100 transition ease-in-out select-none">
              {word.translation}
            </h2>

            <h1 className="text-8xl p-5 ">{word.word}</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder=""
                type="text"
                onChange={handleChange}
                autoFocus
                className="bg-transparent border-b-[3px] w-84 text-3xl border-black focus:outline-none text-black text-center"
              />
            </form>
            {/* <h2>Words done: {score}</h2> */}
            {/* <button onClick={skipWord}>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke="2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                </svg>
              </svg>
            </button> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Game;
