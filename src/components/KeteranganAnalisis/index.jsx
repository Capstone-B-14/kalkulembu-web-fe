import react from "react";

const KeteranganAnalisi = (cardInput) => {
  const { title, children1, children2, img, action } = cardInput;
  return (
    <div className="lg:w-[300px] lg:h-[100px] md:w-[250px] md:h-[75px] items-center justify-center mx-8">
      <div className="flex flex-row justify-center items-center">
        {img && (
          <img src={img} className="w-[20px] md:w-[30px] lg:w-[60px]"></img>
        )}
        <div className="flex flex-col">
          <h1 className="font-semibold text-base text-black lg:text-xl md:text-xl font-roboto">
            {title}
          </h1>
          {children1 && (
            <h2 className="text-base text-black md:text-2xl lg:text-2xl mt-1 font-roboto">
              <span className="text-2xl md:text-4xl lg:text-4xl font-bold">
                {children1}
              </span>{" "}
              Lokasi
            </h2>
          )}
          {children2 && (
            <h2 className="text-base text-black md:text-2xl lg:text-2xl mt-1 font-roboto">
              <span className="text-2xl md:text-4xl lg:text-4xl font-bold">
                {children2}
              </span>{" "}
              ekor
            </h2>
          )}
        </div>
        {action && (
          <button className="action-button mt-3 bg-lime-300">{action}</button>
        )}
      </div>
    </div>
  );
};
export default KeteranganAnalisi;
