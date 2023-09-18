import React from "react";

import Sidebar from "../../components/Sidebar";
import NavButtonSapi from "../../components/NavButton/sapi"


export default function SapiTabel() {
  return(
    <div className="flex bg-[#FBFBFB]">
      <div>
        <Sidebar></Sidebar>
      </div>

      <div className="mt-20 mx-10">
        <NavButtonSapi></NavButtonSapi>
        {/* <div className="flex mt">
          <div className="text-[#0D0D0D] font-bold mx-8">Tanggal</div>
          <div className="text-[#0D0D0D] font-bold mx-8">Umur (Bulan)</div>
          <div className="text-[#0D0D0D] font-bold mx-8">Bobot (kg)</div>
        </div> */}
      </div>
    </div>
  );
}
  