import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [key, setKey] = useState(0); // Initialize key
  const location = useLocation(); // Get the current location

  const SidebarLink = ({ text, linkto }) => {
    return (
      <Link
        to={linkto}
        className={`text-2xl text-[#FBFBFB] font-medium flex items-center h-[53px] justify-center transition-colors duration-300 ${
          location.pathname === linkto
            ? "font-semibold bg-[#0D0D0D] rounded-r-xl text-[#75A3BF] hover:text-white"
            : "hover:text-[#0D0D0D] font-semibold"
        }`}
        onClick={() => {
          setKey((prevKey) => prevKey + 1); // Update the key to trigger re-render
        }}
      >
        <span className='inline truncate hover:whitespace-normal'>{text}</span>
      </Link>
    );
  };

  return (
    <div className='h-screen bg-[#75A3BF] p-4 rounded-r-2xl justify-center' key={key}>
      <div className='mx-auto w-32 h-32 mt-6 bg-gray-400 rounded-full flex items-center justify-center'>
        Logo
      </div>
      <div className='w-64 my-12 space-y-4'>
        <SidebarLink text='Dashboard' linkto='/' />
        <SidebarLink text='Peternakan' linkto='/peternakan/analisis' />
        <SidebarLink text='Sapi Terdata' linkto='/sapi-terdata/tabel' />
        <SidebarLink text='Profil' linkto='/profil-peternak' />
      </div>
      {/* Logout Button (or Login Button) */}
      <div className='w-full'>
        <button
          onClick={() => {
            console.log("Logout");
            setKey((prevKey) => prevKey + 1); // Update the key to trigger re-render
          }}
          className='w-full bg-[#75A3BF] text-white justify-center font-semibold text-2xl flex items-center hover:text-[#0D0D0D] hover:border-none'
        >
          Logout
        </button>
      </div>
    </div>
  );
}
