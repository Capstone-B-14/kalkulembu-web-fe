import Sidebar from '../../components/Sidebar';
import DropdownComponent from '../../components/Dropdown';
import NavButtonSapi from '../../components/NavButton/sapi';

export default function SapiTerdataRiwayat() {
  return (
    <>
      <div className="flex bg-[#FBFBFB]">
        <div>
          <Sidebar />
        </div>

        <div className="min-w-[370px] mx-16 my-20 flex flex-col">
          <DropdownComponent />
          {/* Navigation Button */}
          <div className="mx-4 my-12">
            <NavButtonSapi />
          </div>
          {/* Table Header */}
          <div className="flex">
            <div className="text-black font-bold text-lg mr-[260px] ml-[135px]">
              Tanggal
            </div>
            <div className="text-lg font-bold text-black">Kondisi</div>
          </div>
          {/* Table Row */}
          <div className="flex justify-between mt-2">
            <div className="text-black w-[332px] h-[53px] bg-[#DDDDDD] flex justify-center items-center rounded-md text-[20px]">
              9/4/2022
            </div>
            <div className="w-[186px] h-[53px] bg-[#6C8C56] flex justify-center items-center rounded-md text-[20px] ml-4 uppercase">
              sehat
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
