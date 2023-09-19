import React from "react";

const Card = (props) => {
  return (
    <div>
      {props.details.map((value, index) => (
        <div
          key={index}
          className="inline-block h-[300px] relative grid-cols-3 bg-[#fbfbfb] rounded-md mx-3 my-2 overflow-x-auto shadow-lg"
        >
          <img
            src={value.img}
            alt="img"
            className="rounded-md rounded-b-none h-48 w-48 object-center"
          />
          <div className="p-2">
            <h1 className="font-semibold text-lg">{value.title}</h1>
            <h2 className="text-sm mt-1">{value.address}</h2>
            <button className="bg-lime-300 text-white px-2 py-1 rounded-full text-xs mt-2 ">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default Card;
