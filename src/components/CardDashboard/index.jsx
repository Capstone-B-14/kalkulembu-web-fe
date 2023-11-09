import react from "react";

const CardDashboard = (cardInput) => {
  const { title, children1, children2, img, action } = cardInput;
  return (
    <div className="w-[300px] h-[100px] ">
      <div className="flex flex-row items-center">
        {img && <img src={img}></img>}
        <div className="flex flex-col">
          <h1 className="font-semibold text-xl font-roboto">{title}</h1>
          {children1 && (
            <h2 className="text-2xl mt-1 font-roboto">
              <span className="text-4xl font-bold">{children1}</span> Lokasi
            </h2>
          )}
          {children2 && (
            <h2 className="text-2xl mt-1 font-roboto">
              <span className="text-4xl font-bold">{children2}</span> Ekor
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
export default CardDashboard;
