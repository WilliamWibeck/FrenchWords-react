import React from "react";

const Smallbox = () => {
  return (
    <div className="h-[800px] ">
      <div className="grid-cols-1 grid resize-none gap-5 bg-black p-10">
        <div>
          <div className="h-24 w-full bg-emerald-400"></div>
        </div>
        <div>
          <div className="h-24 w-full bg-emerald-400"></div>
        </div>
        <div>
          <div className="h-24 w-full bg-emerald-400"></div>
        </div>
        <div>
          <div className="h-24 w-full bg-emerald-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Smallbox;
