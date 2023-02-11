import React from "react";

import { paragraphList } from "../../data/sentencelist";

const TranslateParagraph = () => {
  const testParagraph = paragraphList[0].sentence;
  return (
    <div className="bg-[#D9D9D9] h-screen flex flex-col items-center w-screen">
      <div className="flex flex-col gap-64">
        <div id="upperScreen" className="flex flex-col">
          <div id="paragraphBox" className="">
            <div className="">
              <div id="paragraphBox" className="">
                <div className="h-48 bg-[#C9C9C9] select-none">
                  {testParagraph}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="lowerScreen" className="flex flex-col">
          <div className="">
            <form onSubmit={(e) => e.preventDefault()}>
              <textarea
                rows="5"
                cols="60"
                name="Enter text"
                className="w-[100%] h-[100%] box-border resize-none text-xl bg-[#C9C9C9] p-6"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslateParagraph;
