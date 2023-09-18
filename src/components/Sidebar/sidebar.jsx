import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className='h-screen bg-blue-400 p-4 rounded justify-center'>
      {/* Logo */}
      <div className='mx-auto w-32 h-32 mt-6 bg-gray-400 rounded-full flex items-center justify-center'>
        Logo
      </div>
      {/* Menu */}
      <div className='w-64 my-12 space-y-2'>
        {/* Dashboard */}
        <div className='w-full'>
          <Link
            to='/'
            className='h-16 bg-gray-900 justify-center rounded-full text-blue-500 font-bold text-2xl flex items-center'
          >
            Dashboard
          </Link>
        </div>
        {/* Peternakan */}
        <div className='w-full'>
          <Link
            to='/peternakan/analisis'
            className='h-16 bg-gray-900 justify-center rounded-full text-blue-500 font-bold text-2xl flex items-center'
          >
            Peternakan
          </Link>
        </div>
        {/* Sapi Terdata */}
        <div className='w-full'>
          <Link
            to='/sapi-terdata/tabel'
            className='h-16 bg-gray-900 justify-center rounded-full text-blue-500 font-bold text-2xl flex items-center'
          >
            Sapi Terdata
          </Link>
        </div>
        {/* Profil Peternak */}
        <div className='w-full'>
          <Link
            to='/profil-peternak'
            className='h-16 bg-gray-900 justify-center rounded-full text-blue-500 font-bold text-2xl flex items-center'
          >
            Profil Peternak
          </Link>
        </div>
        {/* Logout Button (or Login Button) */}
        <div className='w-full pt-96'>
          <button
            onClick={() => console.log("Logout")}
            className='w-full h-16 bg-blue-500 text-white justify-center rounded-full font-bold text-2xl flex items-center'
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
