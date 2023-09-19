import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import DropdownComponent from "../../components/Dropdown";
import NavButtonPeternakan from "../../components/NavButton/peternakan";
import SearchBar from "../../components/SearchBar";


export default function PeternakanTabel() {
  return (
    <>
      <div className='flex bg-[#FBFBFB]'>
        <div>
          <Sidebar />
        </div>

        <div className='w-screen mx-16 my-20 flex flex-col'>
          <div className="flex justify-between w-full">
            <DropdownComponent />
            <SearchBar placeholder="Cari Sapi"></SearchBar>
         </div>

         <div className="mx-4 my-9">
            <NavButtonPeternakan></NavButtonPeternakan>
         </div>
        </div>
      </div>
    </>
  );
}
