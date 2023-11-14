import React from "react";

import Sidebar from "../../components/Sidebar";
import DropdownComponent from "../../components/Dropdown";
import TimeSeriesChart from "../../components/Chart";
import NavButtonPeternakan from "../../components/NavButton/peternakan";
import { GiCow } from "react-icons/gi";
import KeteranganAnalisis from "../../components/KeteranganAnalisis/index";
import iconsapi from "../../assets/healthicons_animal.svg";
import iconjantan from "../../assets/mingcute_male-line.svg"
import iconfemale from "../../assets/jam_female.svg"
import { CgSmileMouthOpen } from "react-icons/cg";
import { MdOutlineSick } from "react-icons/md";

export default function PeternakanAnalisis() {
  return (
    <>
      <div className="flex bg-[#FBFBFB]">
        <div className="top-0">
          <Sidebar />
        </div>
        <div className="space-y-8 mx-16 w-3/4 my-20">
          <div className="flex w-1/2">
            <DropdownComponent />
          </div>
          <div className="flex mx-4 my-9 pt-4">
            <NavButtonPeternakan />
          </div>
          <div className="absolute h-1/2 w-3/5 bg-[#FFFFFF] p-12 rounded-2xl overflow-auto drop-shadow-xl">
            <TimeSeriesChart />
          </div>
          <div className="ml-[850px] p-5">
            <KeteranganAnalisis
                title={"Total Sapi"}
                children2={"85"}
                img={iconsapi}
              />
            <KeteranganAnalisis
                title={"Sapi jantan"}
                children2={"10"}
                img={iconjantan}
              />
            <KeteranganAnalisis
                title={"Sapi betina"}
                children2={"65"}
                img={iconfemale}
              />
          </div>  
        <div className="p-5 flex flex-row absolute">
          <div className="h-[150px] w-[150px] bg-[#FFFFFF] rounded-2xl drop-shadow-xl mr-10 ">
            <div className="bg-[#A3BFD9] p-1 rounded-b-2xl mx-6"></div>
            <div className="flex flex-col items-center p-3 ">
            <CgSmileMouthOpen className="" color="black" size={40}/>
            <text className="text-black font-bold">Sapi Sehat</text>
            <text className="text-black font-bold text-2xl">34</text>
            <text className="text-black font-bold">ekor</text>
            </div>
          </div>

          <div className="h-[150px] w-[150px] bg-[#FFFFFF] rounded-2xl drop-shadow-xl mr-10 ">
            <div className="bg-[#E78383] p-1 rounded-b-2xl mx-6"></div>
            <div className="flex flex-col items-center p-3 ">
            <MdOutlineSick className="" color="black" size={40}/>
            <text className="text-black font-bold">Sapi Sakit</text>
            <text className="text-black font-bold text-2xl">46</text>
            <text className="text-black font-bold">ekor</text>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
