import React from "react";

// const Card = ({classname,action}) => {
//   return(
//     <div>
//       {children}
//     </div>
//   );
// };

// export default Card;


// export default function Card({children, classname, action}){
//   return(
//     <Card classname={classname} onClick={action}>
//       {children}
//     </Card>
//   );
// }

//const Card = (props) => {
  //return (
    //<div>
      //{props.details.map((value, index) => (
        //<div
          //key={index}
          //className='inline-block h-[350px] w-[300px] relative bg-[#fbfbfb] rounded-md mx-3 my-2 shadow-lg p-3'
        //>
          //<img
            //src={value.img}
            //alt='img'
            //className='rounded-md rounded-b-none object-center h-[200px] w-full'
          // />
          //<div>
            //<h1 className='font-semibold text-lg break-words'>{value.title}</h1>
            //<h2 className='text-sm mt-1'>{value.address}</h2>
            //<button className='bg-lime-300 text-white px-2 py-1 rounded-full text-xs mt-2 '>
              //Lihat Selengkapnya
            //</button>
          //</div>
        //</div>
      //))}
      //;
    //</div>
  //);
//};

//export default Card;

const Card = (cardData) => {
  const {title, children, img, action} = cardData;
  return (
    //<A>
    <div className="inline-block h-[350px] w-[300px] relative bg-[#fbfbfb] rounded-md mx-3 my-2 shadow-lg p-3">
      <img
      src={img}
        className="rounded-md rounded-b-none object-center h-[200px] w-full"
      ></img>
      <h1 className="font-semibold text-lg break-words">{title}</h1>
        <h2 className="text-sm mt-1">{children}</h2>
      <button className="mt-3 bg-lime-300 border-lime-100 hover:bg-lime-200">{action}</button>
    </div>
    //</A>
  );
}
export default Card;
