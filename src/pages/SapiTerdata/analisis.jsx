import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import NavButtonSapi from '../../components/NavButton/sapi';
import DropdownComponent from '../../components/Dropdown';
import TimeSeriesChart from '../../components/Chart';

export default function SapiTerdataAnalisis() {
  const options = ['Sapi 1', 'Sapi 2', 'Sapi 3'];
  const [onSelect, setSelectedOption] = useState();

  const handleSelect = (option) => {
    setSelectedOption(option.value); // Update the local state
  };

  return (
    <div className="flex bg-[#FBFBFB]">
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col min-w-[370px] mx-16 my-20">
        <DropdownComponent
          options={options}
          onSelect={handleSelect}
          value={onSelect}
        />
        <div className="mx-4 my-12">
          <NavButtonSapi />
        </div>
        <div className="grid">
          <div className="p-4">
            <p className="text-3xl text-[#0D0D0D] font-bold">Umur Saat Ini</p>
            <p className="font-semibold text-[#0D0D0D]">
              <span className="text-5xl text-[#0D0D0D] font-bold">6</span> bulan
            </p>
          </div>
          <div className="grid-flow-col p-4">
            <p className="text-3xl text-[#0D0D0D] font-bold">Bobot Saat Ini</p>
            <p className="font-semibold text-[#0D0D0D]">
              <span className="text-5xl text-[#0D0D0D] font-bold">392</span> kilogram
            </p>
          </div>
          <div className="grid-flow-col p-4">
            <p className="text-3xl text-[#0D0D0D] font-bold">Kondisi Saat Ini</p>
            <div className="w-[115px] mt-2 h-[34px] bg-[#6C8C56] flex justify-center items-center rounded-md text-[20px] text-white uppercase">
              sehat
            </div>
          </div>
          <div className="absolute p-4 right-[234px]">
            <p className="mb-2 text-3xl font-bold">Foto Terkini</p>
            <img
              className="w-[480px]"
              src="/src/assets/peternakan1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="justify-center mt-20">
          <div className="absolute w-3/5 p-12 bg-[#FFFFFF] rounded-2xl h-1/2 overflow-auto drop-shadow-xl">
            <TimeSeriesChart />
          </div>
        </div>
      </div>
    </div>
  );
}
