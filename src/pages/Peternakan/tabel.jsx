import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import DropdownComponent from "../../components/Dropdown";
import NavButtonPeternakan from "../../components/NavButton/peternakan";
import SearchBar from "../../components/SearchBar";
import Card  from "../../components/Card";
import CardTabel from "../../components/CardTabel";


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
            <NavButtonPeternakan/>
         </div>

         <div className="grid grid-cols-2 gap-4 p-3">
            <CardTabel />
            <CardTabel />
            <CardTabel />
            <CardTabel />
            <CardTabel />
            <CardTabel />
            
         </div>
        </div>
      </div>
    </>
  );
}
