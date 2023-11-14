import Sidebar from "../../components/Sidebar";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";
import CardDashboard from "../../components/CardDashboard/index.jsx";
import { cardData } from "../../components/Card/cardData.jsx";
import React, { useState } from "react";
import iconfarm from "../../assets/mdi_farm.png";
import iconsapi from "../../assets/healthicons_animal-cow.png";
import DropdownComponent from "../../components/Dropdown";
import Pagination from "../../components/Pagination/index.jsx";

export default function HomePage() {
  const [data] = useState(cardData);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  if (!data || !Array.isArray(data) || typeof itemsPerPage !== "number") {
    return <div>Error: Invalid data or itemsPerPage value</div>;
  }

    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="flex flex-row bg-[#FBFBFB] overflow-auto max-w-screen">
        <div className="top-0">
          <Sidebar />
        </div>
        <div className=" text-black text-[12px] lg:text-[28px] md:text-[20px] font-medium font-['Roboto'] mx-3 lg:mx-14 md:mx-5 my-7 absolute right-3">
          Anda Peternak?
          <a className="ml-2" href="/login">
            Masuk
          </a>
        </div>
        <div className="my-[50px] pt-3 lg:mx-[10px] pl-[50px]">
          <div className=" flex flex-row justify-center items-center">
            <div className="card-gradasi absolute">
              <CardDashboard
                title={"Total Peternakan"}
                children1={"12"}
                img={iconfarm}
              />
            </div>
            <div className="card-gradasi absolute">
              <CardDashboard
                title={"Total Sapi"}
                children2={"85"}
                img={iconsapi}
              />
            </div>
          </div>
          <div className="mt-3 flex flex-col lg:flex-row md:flex-col lg:w-full md:h-[10%] space-x-4 space-y-2 gap-0">
            <SearchBar placeholder="Nama Peternakan" type="text" className="lg:w-full md:w-[50%]" />
            <DropdownComponent className="" />
            <DropdownComponent className="" />
          </div>
          <div>
            <Pagination
              pageCount={10} />
          </div>
          <div className="flex overflow-x-auto absolute w-[65%] md:bottom-[20px]">
            <div className="flex flex-row whitespace-nowrap">
              {currentItems.map((value, index) => {
                return (
                  <div>
                    <div
                      key={index}
                      className=" flex-row flex bg-white mx-3 my-3 shadow-lg p-3 lg:h-[350px] lg:w-[300px] md:h-[175px] md:w-[150px]"
                    >
                      <Card
                        title={value.title}
                        children={value.address}
                        img={value.img}
                        action={"Lihat Selengkapnya"}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
