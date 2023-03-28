import React from "react";
import SideBar from "../SideBar/SideBar";

const MenuUpdated = () => {
  return (
    <div className="h-screen w-screen bg-black" id="Mainscreen">
      <div className="h-screen w-screen bg-white" id="Subscreen">
        <div className="absolute left-4">
          <SideBar />
        </div>
        <div className="h-screen" id="DashboardHolder">
          {/* <div className="grid grid-cols-2 bg-emerald-500 h-10">
            <div className="h-10 bg-emerald-400"></div>
            <div className="h-10 bg-emerald-400"></div>
            <div className="h-10 bg-emerald-400"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MenuUpdated;
