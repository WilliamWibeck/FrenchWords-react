import React, { useEffect, useState } from "react";
import { Button } from "react-onsenui";
import { paragraphs } from "../../data/paragraphlist";

const TranslateParagraph = () => {
  let paragraphtest = paragraphs;

  const [currentword, setCurrentWord] = useState("");

  return (
    <div className="bg-[#D9D9D9] h-screen">
      <div className="flex flex-col gap-64">
        <div id="upperScreen" className="flex flex-col">
          <div id="paragraphBox" className="">
            <div className="h-96 max-w-[50%]">
              <Button></Button>
              <p>{currentword}</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <textarea
                  rows="5"
                  cols="60"
                  name="Enter text"
                  className="w-[100%] h-[100%] box-border resize-none text-xl bg-slate-400 p-6"
                >
                  Enter text!
                </textarea>
                {/* <input
                  placeholder=""
                  type="text"
                  autoFocus
                  className="bg-transparent border-b-2 w-64 text-3xl border-black focus:outline-none text-black text-center"
                /> */}
              </form>
            </div>
          </div>
        </div>
        <div id="middleScreen"></div>
        <div id="lowerScreen" className="flex flex-col">
          <div id="paragraphBox" className="">
            <div className="h-96 max-w-[50%] bg-blue-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslateParagraph;
