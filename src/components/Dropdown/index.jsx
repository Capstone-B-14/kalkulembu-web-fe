import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["one", "two", "three"];
const defaultOption = options[0];

const DropdownComponent = () => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Dropdown
      options={options}
      onChange={handleSelect}
      value={selectedOption}
      placeholder='Select an option'
    />
  );
};

export default DropdownComponent;
