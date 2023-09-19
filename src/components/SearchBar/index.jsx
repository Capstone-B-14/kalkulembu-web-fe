import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Mencari dengan kata kunci:', searchTerm);
  };

  return (
    <div className="flex items-center bg-[#FBFBFB] border border-2 border-[#DDDDDD] border rounded-lg">
        <div className='m-4'>
            <FaSearch className='text-[#DDDDDD] text-xl'></FaSearch>
        </div>
        <input
            type="text"
            placeholder={props.placeholder}
            className="py-2 px-4 outline-none bg-transparent text-[#0D0D0D]"
            value={searchTerm}
            onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
