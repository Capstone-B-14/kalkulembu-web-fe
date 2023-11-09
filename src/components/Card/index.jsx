import React from "react";

const Card = (cardData) => {
  const {title, children, img, action} = cardData;
  return (
    //<A>
    <div className=" h-[90px] w-[80px] lg:h-[350px] lg:w-[300px] md:h-[250px] md:w-[150px] relative">
      {img && (
        <img
          src={img}
          className=" rounded h-[100%] md:h-[100px] lg:h-[200px] lg:w-full md:w-[90%] w-[150%] mx-auto my-auto"
        ></img>
      )}
      <h1 className="font-semibold text-sm lg:text-lg md:text-sm md:pl-1.5">
        {title}
      </h1>
      <h2 className=" text-xs md:text-xs lg:text-sm lg:mt-1 md:pl-1.5">
        {children}
      </h2>
      <div className="md:text-lg">
        {action && (
          <button className="action-button mt-3 bg-lime-300">
            {action}
          </button>
        )}
      </div>
    </div>
    //</A>
  );
}
export default Card;
