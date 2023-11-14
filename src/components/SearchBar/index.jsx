import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    console.log("Mencari dengan kata kunci:", searchTerm);
  };

  return (
    <div className="flex items-center bg-[#FBFBFB] border border-[#DDDDDD] rounded-lg lg:w-full">
      <div className="m-4">
        <FaSearch className="text-[#DDDDDD] lg:text-xl md:text-lg sm:text-sm"></FaSearch>
      </div>
      <input
        type="text"
        placeholder={props.placeholder}
        className="py-2 px-2 outline-none bg-transparent text-[#0D0D0D] lg:text-lg md:text-lg sm:text-sm"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
