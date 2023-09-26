import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import {cardData} from "../../components/Card/cardData.jsx";
import React, {useState} from 'react';

export default function HomePage() {
  const [data] = useState(cardData);
  return (
    <>
      <div className="flex bg-[#FBFBFB]">
        <Sidebar />
        {data.map((value, index) => {
          return (
            <div key={index}>
              <Card
                title={value.title}
                children={value.address}
                img={value.img}
                action={"Lihat Selengkapnya"}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
