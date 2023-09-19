import React from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import DropdownComponent from "../../components/Dropdown";
import TimeSeriesChart from "../../components/Chart";
import Button from "../../components/Button";
import NavButtonPeternakan from "../../components/NavButton/peternakan";

export default function PeternakanAnalisis() {
  return (
    <>
      <div className='flex bg-[#FBFBFB]'>
        <div className='flex'>
          <Sidebar />
        </div>
        <div className='space-y-4'>
          <div className='flex space x-4'>
            <NavButtonPeternakan></NavButtonPeternakan>
            {/* <Link to='/peternakan/analisis'>
              <Button className='bg-blue-500 text-white px-4 py-2 rounded'>
                Analisis
              </Button>
            </Link>
            <Link to='/peternakan/tabel'>
              <Button className='bg-blue-500 text-white px-4 py-2 rounded'>
                Tabel
              </Button>
            </Link> */}
          </div>
          <div className='w-1/2 pt-12 pl-8'>
            <DropdownComponent />
          </div>
          <div className='w-2/3'></div>
          <TimeSeriesChart />
        </div>
      </div>
    </>
  );
}
