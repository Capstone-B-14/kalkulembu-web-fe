import React, { useState } from "react";
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
      <div className="flex bg-[#FBFBFB] max-w-screen max-h-screen">
        <div>
          <Sidebar />
        </div>

        <div className="mr-16 ml-5 mt-20 flex flex-col md:mt-5">
          <div className="flex w-full gap-y-4 md:flex-col md:ml-4">
            <DropdownComponent className="pl-3 right-0" />
            <SearchBar
              placeholder="Cari Sapi"
              className="md:w-[75%]"
            ></SearchBar>
          </div>
          <div className="mx-4 my-9">
            <NavButtonPeternakan />
          </div>
          <div className="flex flex-col overflow-y-auto md:h-[65%]">
            {data.map((value, index) => {
              return (
                <div key={index} className="flex flex-col pr-3">
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
