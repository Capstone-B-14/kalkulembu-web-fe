import Sidebar from "../../components/Sidebar/sidebar";
import Button from "../../components/Button";

export default function SapiTerdataRiwayat() {
    return (
      <>
        <div className='flex bg-[#FBFBFB]'>
        <div>
          <Sidebar />
        </div>
          <div className=" mx-40 my-40 min-h-max">
            <div className="flex justify-between">
            <Button className="bg-[#0D0D0D] w-[162px] h-[50px]">Analisa</Button>
            <Button className="bg-[#0D0D0D] w-[162px] h-[50px]">Tabel</Button>
            <Button className="text-black bg-[#AFC97E] w-[162px] h-[50px]">Riwayat</Button>
            </div>
            <div className="mt-20 flex">
              <div className="text-black opacity-60 w-[332px] h-[53px] bg-[#b0b0b0] flex justify-center items-center rounded-md text-[20px]" >9/4/2022</div>
              <div className="w-[186px] h-[53px] bg-[#AFC97E] flex justify-center items-center rounded-md text-[20px] ml-4" >sehat</div>
            </div>
          </div>
        </div>
      </>
    );
  }
  