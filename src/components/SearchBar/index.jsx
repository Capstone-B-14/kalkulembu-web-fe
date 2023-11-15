import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder = search, onChange = () => {} }) => {
  const handleSearchChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex items-center bg-[#FBFBFB] border border-[#DDDDDD] rounded-lg lg:w-full md:w-[70%]">
      <div className="m-4">
        <FaSearch className="text-[#DDDDDD] lg:text-xl md:text-lg sm:text-sm"></FaSearch>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="py-2 px-2 outline-none bg-transparent text-[#0D0D0D] lg:text-lg md:text-lg sm:text-sm"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
