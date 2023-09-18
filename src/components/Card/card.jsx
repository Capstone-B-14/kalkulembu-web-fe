import React from "react";

const urlImage =
  "https://i.pinimg.com/564x/46/4a/56/464a5601ed14780a2b705989372c08de.jpg";

const Card = () => {
  return (
    <div className="h-[300px] relative grid-cols-3 bg-[#fbfbfb] rounded-md mx-3 my-2 overflow-x-auto shadow-lg object-bottom">
      <img src={urlImage} className="rounded-md rounded-b-none h-48 w-48" />
      <div className="p-2">
        <h1 className="font-semibold text-lg">Nama Peternakan</h1>
        <h2 className="text-sm">Alamat Peternakan</h2>
        <button className="bg-lime-300 text-white px-2 py-1 rounded-full text-xs ">
          Lihat Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default Card;
