import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import DropdownComponent from "../../components/Dropdown";

export default function PeternakanIndex() {
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
