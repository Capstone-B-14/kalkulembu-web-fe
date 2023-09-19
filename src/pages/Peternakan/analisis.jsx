import React from "react";

import Sidebar from "../../components/Sidebar";
import DropdownComponent from "../../components/Dropdown";
import TimeSeriesChart from "../../components/Chart";
import NavButtonPeternakan from "../../components/NavButton/peternakan";

export default function PeternakanAnalisis() {
  return (
    <>
      <div className='flex relative'>
        <div className='flex'>
          <Sidebar />
        </div>
        <div className='space-y-8 pl-12 w-2/3'>
          <div className='w-1/2 pt-12'>
            <DropdownComponent />
          </div>
          <div className='flex space x-4'>
            <NavButtonPeternakan />
          </div>
          <div className='absolute h-1/2 w-3/5 bg-gray-50 p-12 rounded-lg'>
            <TimeSeriesChart />
          </div>
        </div>
      </div>
    </>
  );
}
