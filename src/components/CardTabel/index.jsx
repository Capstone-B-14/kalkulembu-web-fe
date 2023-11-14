import React from"react";

const CardTabel = (cardData) => {
  const { title, age, img, bobot, condition } = cardData;
  return (
    <div className="flex flex-col overflow-y-auto">
      <div className="flex flex-row h-[220px] w-[450px] bg-[#912F2F] rounded-md mx-4 my-2 shadow-lg p-3 pt-5">
        <div>
          <img
            src={img}
            className="items-center rounded-md h-[180px] w-[180px] mx-auto"
          ></img>
        </div>
        <div className="ml-3 mx-auto">
          <div className="text-2xl text-black font-bold">{title}</div>
          <div className="text-base text-black font-semibold">{age}</div>
          <div className="text-base text-black font-semibold">{bobot}</div>
          <div className="text-base text-black font-semibold">{condition}</div>
        </div>
      </div>
    </div>
  );
};
export default CardTabel;
