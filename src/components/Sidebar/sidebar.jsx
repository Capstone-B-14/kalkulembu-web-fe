import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [key, setKey] = useState(0); // Initialize key
  const location = useLocation(); // Get the current location

  const SidebarLink = ({ text, linkto }) => {
    return (
      <Link
        to={linkto}
        className={`text-2xl flex items-center justify-center hoverAnimation ${
          location.pathname === linkto
            ? "font-semibold bg-gray-600 h-16 rounded-full text-white"
            : "font-normal"
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
    <div className='h-screen bg-blue-400 p-4 rounded justify-center' key={key}>
      <div className='mx-auto w-32 h-32 mt-6 bg-gray-400 rounded-full flex items-center justify-center'>
        Logo
      </div>
      <div className='w-64 my-12 space-y-2'>
        <SidebarLink text='Dashboard' linkto='/' />
        <SidebarLink text='Peternakan' linkto='/peternakan/analisis' />
        <SidebarLink text='Sapi Terdata' linkto='/sapi-terdata/tabel' />
        <SidebarLink text='Profil' linkto='/profil-peternak' />
      </div>
      {/* Logout Button (or Login Button) */}
      <div className='w-full pt-96'>
        <button
          onClick={() => {
            console.log("Logout");
            setKey((prevKey) => prevKey + 1); // Update the key to trigger re-render
          }}
          className='w-full h-16 bg-blue-500 text-white justify-center rounded-full font-bold text-2xl flex items-center'
        >
          Logout
        </button>
      </div>
    </div>
  );
}
