import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "../../components/Sidebar/sidebar";
import DropdownComponent from "../../components/Dropdown/dropdown";

export default function PeternakanTabel() {
  return (
    <>
      <div className='flex'>
        <div className=''>
          <Sidebar />
        </div>
        <div className=''>
          <DropdownComponent />
        </div>
      </div>
    </>
  );
}
