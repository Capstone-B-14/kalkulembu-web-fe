/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const defaultOptions = [{ label: " ", value: " " }];

const DropdownComponent = ({
  options = defaultOptions,
  onSelect = () => {},
  className = "",
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    setSelectedOption(options[0]);
  }, [options]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option.value);
  };

  return (
    <div>
      <Dropdown
        options={options}
        onChange={handleSelect}
        value={selectedOption}
        className={`bg-black hover:bg-gray-300 justify-center rounded-sm shadow-sm w-64 ml-3 md:ml-0 ${className}`}
        placeholder="Select an option"
      />
    </div>
  );
};

export default DropdownComponent;
