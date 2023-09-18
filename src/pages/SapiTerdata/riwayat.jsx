import Sidebar from "../../components/Sidebar";
import DropdownComponent from "../../components/Dropdown";
import NavButtonSapi from "../../components/NavButton/sapi";

export default function SapiTerdataRiwayat() {
    return (
      <>
        <div className='flex bg-[#FBFBFB]'>
          <div>
            <Sidebar />
          </div>

          <div className=" mx-40 my-20 min-h-max">
            <div className="mb-10 mr-40">
            <DropdownComponent></DropdownComponent>
            </div>
            <div className="flex justify-between">
              <NavButtonSapi></NavButtonSapi>
            </div>
            <div className="flex mt-20">
              <div className="text-black mr-[220px] ml-[140px]">Tanggal</div>
              <div className="text-black">Kondisi</div>
            </div>
            <div className="mt-5 flex">
              <div className="text-black opacity-60 w-[332px] h-[53px] bg-[#b0b0b0] flex justify-center items-center rounded-md text-[20px]" >9/4/2022</div>
              <div className="w-[186px] h-[53px] bg-[#AFC97E] flex justify-center items-center rounded-md text-[20px] ml-4" >sehat</div>
            </div>
          </div>
        </div>
      </>
    );
  }
  