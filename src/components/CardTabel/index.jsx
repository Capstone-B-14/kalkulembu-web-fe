import React from"react";

const CardTabel = (cardData) => {
  const { title, age, img, bobot, condition } = cardData;
  return (
    //<A>
    <div className=" h-[250px] w-[650px] bg-[#fbfbfb] rounded-md mx-2 my-2 shadow-lg p-3 flex">
      <div className=" h-full w-[240px] rounded-md">
        <img src={img} className="w-full rounded-md"></img>
      </div>
      <div className="ml-10 p-3 grid grid-flow-row gap-4">
        <div className="text-2xl text-black">{title}</div>
        <div className="text-2xl text-black">{age}</div>
        <div className="text-2xl text-black">{bobot}</div>
        <div className="text-2xl text-black">{condition}</div>
      </div>
    </div>
    //</A>
  );
};
export default CardTabel;
