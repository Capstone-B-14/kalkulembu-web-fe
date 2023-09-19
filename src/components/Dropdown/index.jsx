import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [];
const defaultOption = options[0];

const DropdownComponent = ({ options, value, onSelect, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState();

  const handleSelect = (option) => {
    setSelectedOption(option); // Update the local state
    onSelect(option); // Call the parent component's onSelect function
  };

  return (
    <div>
      <Dropdown
        options={options}
        onChange={handleSelect}
        value={selectedOption}
        className=' bg-black hover:bg-gray-300 justify-center rounded-sm shadow-sm w-64'
        placeholder='Select an option'
      />
    </div>
  );
};

export default DropdownComponent;
