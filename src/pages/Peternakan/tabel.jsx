import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { cardTabel } from "../../components/CardTabel/cardTabel";
import Sidebar from "../../components/Sidebar";
import DropdownComponent from "../../components/Dropdown";
import NavButtonPeternakan from "../../components/NavButton/peternakan";
import SearchBar from "../../components/SearchBar";
import CardTabel from "../../components/CardTabel";

export default function PeternakanTabel() {
  const [data] = useState(cardTabel);
  return (
    <>
      <div className="flex bg-[#FBFBFB]">
        <div>
          <Sidebar />
        </div>

        <div className="w-screen mx-16 my-20 flex flex-col">
          <div className="flex justify-between w-full">
            <DropdownComponent />
            <SearchBar placeholder="Cari Sapi"></SearchBar>
          </div>
          <div className="mx-4 my-9">
            <NavButtonPeternakan />
          </div>
          <div>
            {data.map((value, index) => {
              return (
                <div key={index} className="grid grid-cols-2 gap-4 p-3">
                  <CardTabel
                    title={value.title}
                    age={value.age}
                    img={value.img}
                    bobot={value.bobot}
                    condition={value.condition}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
