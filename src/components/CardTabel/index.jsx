const CardTabel = (cardData) => {
    const {title, age, img, bobot, condition} = cardData;
    return (
      //<A>
      <div className=" h-[250px] w-[650px] bg-[#fbfbfb] rounded-md mx-2 my-2 shadow-lg p-3 flex">
        <div className=" h-full w-[240px] rounded-md">
        <img src={img} className="w-full rounded-md"></img>
        </div>
        <div className="ml-10 p-3 grid grid-flow-row gap-4">
            
            <div className="text-2xl text-black">asdfsdafdsgsdfghthfasd</div>
            <div className="text-2xl text-black">afff</div>
            <div className="text-2xl text-black">ddddd</div>
            <div className="text-2xl text-black">ggggg</div>
        </div>
        

      </div>
      //</A>
    );
  }
  export default CardTabel;