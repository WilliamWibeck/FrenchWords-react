import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { months, animals, allWords, clothing, weather } from "../data/wordlist";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import LoginButton from "../components/LoginButton/LoginButton";

const Game = () => {
  const { category } = useParams();
  const [wordlist, setWordlist] = useState();
  const [word, setWord] = useState("");
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const giveWord = () => {
    let currentWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    console.log(currentWord);
    setWord(currentWord);
  };

  useEffect(() => {
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
      setScore(score + 1);
      e.target.value = "";
      giveWord();
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
          <div className="flex flex-col items-center justify-center h-screen gap-2 select-none">
            <h2 className="opacity-0 hover:opacity-100 transition ease-in-out select-none">
              {word.translation}
            </h2>

            <h1 className="text-3xl">{word.word}</h1>
            <form method="post">
              <input
                placeholder="Enter word"
                type="text"
                onChange={handleChange}
                autoFocus
                className="bg-transparent  border-none focus:outline-none text-black text-center rounded-md"
              />
            </form>
            <h2>Words done: {score}</h2>
            <button onClick={skipWord}>SKIP</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Game;
