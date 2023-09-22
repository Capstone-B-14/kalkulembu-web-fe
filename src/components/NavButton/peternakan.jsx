import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavButtonPeternakan() {
  const [key, setKey] = useState(0); // Initialize key
  const location = useLocation(); // Get the current location

  const NavButtonLink = ({ text, linkto }) => {
    return (
      <Link
        to={linkto}
        className={`text-xl font-bold text-[#0D0D0D] flex flex-row items-center h-[50px] w-[162px] rounded-xl justify-center
                    ${
                      location.pathname === linkto
                        ? "bg-[#AFC97E] rounded-xl text-[#0D0D0D] hover:text-white"
                        : "bg-[#0D0D0D] text-[#FBFBFB] hover:text-[#AFC97E]"
                    }`}
        onClick={() => {
          setKey((prevKey) => prevKey + 1);
        }}
      >
        <span className='inline truncate hover:whitespace-normal'>{text}</span>
      </Link>
    );
  };

  return (
    <div className='flex'>
      <div className='flex justify-between gap-8'>
        <NavButtonLink text='Analisis' linkto='/peternakan' />
        <NavButtonLink text='Tabel' linkto='/peternakan/tabel' />
      </div>
    </div>
  );
}
