import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import { BiSolidDashboard } from "react-icons/bi";
import kalkulembuLogo from "../../assets/kalkulembuLogo.svg";

export default function Sidebar() {
  const [key, setKey] = useState(0); // Initialize key
  const location = useLocation(); // Get the current location
  const [open, setOpen] = useState(true);


  const SidebarLink = ({ text, linkto }) => {
    // Check if the current location pathname starts with the linkto prop
    const isActive =
      location.pathname === linkto ||
      (linkto === "/" && location.pathname === "/") || // Check for homepage
      (linkto !== "/" && location.pathname.startsWith(linkto));


    return (
      <Link
        to={linkto}
        className={`lg:text-2xl md:text-xl sm:text-lg text-[#FBFBFB] font-medium flex items-center h-[50px] justify-center transition-colors duration-300 
        ${
          isActive
            ? "font-semibold bg-[#0D0D0D] rounded-r-xl text-[#75A3BF] hover:text-white"
            : "hover:text-[#0D0D0D] font-semibold"
        }`}
        onClick={() => {
          setKey((prevKey) => prevKey + 1); // Update the key to trigger re-render
          console.log(isActive, location.pathname.startsWith(linkto));
        }}
      >
        <span className="inline truncate hover:whitespace-normal">{text}</span>
      </Link>
    );
  };

  return (
    <div
      className={`${
        open ? "w-20" : "w-2}"
      } h-screen bg-[#75A3BF] rounded-r-2xl justify-center'}`}
      key={key}
    >
      <div>
        <TbSquareRoundedChevronRightFilled
          className={`${!open && "rotate-180"}
          ${
            open ? "left-[58px] " : "left-[235px]"
          } cursor-pointer top-6 relative `}
          size={"40px"}
          color="black"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="flex items-center justify-center w-48 h-24 lg:w-64 lg:h-32 md:w-64 md:h-32 mx-auto px-5">
        <img
          src={kalkulembuLogo}
          alt="Kalkulembu Logo"
          className={`transition-all ${open ? "w-0" : "w-64"}`}
        ></img>
      </div>
      <div className={`w-64 my-12 space-y-4 ${open ? "hidden" : "w-32"}`}>
        <SidebarLink text="Dashboard" linkto="/" />
        <SidebarLink text="Peternakan" linkto="/peternakan" />
        <SidebarLink text="Sapi Terdata" linkto="/sapi-terdata" />
        <SidebarLink text="Profil" linkto="/profile" />
      </div>
      {/* Logout Button (or Login Button) */}
      <div className="w-full">
        <button
          onClick={() => {
            console.log("Logout");
            setKey((prevKey) => prevKey + 1); // Update the key to trigger re-render
          }}
          className={`w-full bg-[#75A3BF] text-white justify-center font-semibold lg:text-2xl md:text-xl sm:text-lg flex items-center hover:text-[#0D0D0D] hover:border-none overflow-hidden
          ${open ? "hidden" : "w-32"}`}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
