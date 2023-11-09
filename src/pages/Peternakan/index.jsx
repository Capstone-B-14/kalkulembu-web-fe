import React from "react";

import Sidebar from "../../components/Sidebar";
import DropdownComponent from "../../components/Dropdown";
import TimeSeriesChart from "../../components/Chart";
import NavButtonPeternakan from "../../components/NavButton/peternakan";

export default function PeternakanAnalisis() {
  return (
    <>
      <div className="flex relative bg-[#FBFBFB] max-h-[100%] max-w-[100%]">
        <Sidebar />

        <div className="space-y-8 mx-16 w-2/3 my-20">
          <div className="flex w-1/2">
            <DropdownComponent />
          </div>
          <div className="flex mx-4 my-9 pt-4">
            <NavButtonPeternakan />
          </div>
          <div className="absolute h-1/2 w-3/5 bg-[#FFFFFF] p-12 rounded-2xl overflow-auto drop-shadow-xl">
            <TimeSeriesChart />
          </div>
        </div>
      </div>
    </>
  );
}
