/* eslint-disable react/prop-types */
import Button from "../../components/Button";

export default function SapiTabel({ dataCattleStats = [] }) {
  return (
    <>
      {/* Table Header */}
      <div className="flex flex-row min-w-max mx-4 mt-6 gap-x-2 pb-2">
        <div className="flex basis-1/4 justify-center text-[#0D0D0D] font-bold text-lg mx-4 pl-1">
          Tanggal
        </div>
        <div className="flex basis-1/4 justify-center text-[#0D0D0D] font-bold text-lg mx-5 pl-2">
          Umur (Bulan)
        </div>
        <div className="flex basis-1/4 justify-center text-[#0D0D0D] font-bold text-lg pl-3">
          Bobot (kg)
        </div>
        <div className="flex basis-1/4 justify-center text-[#0D0D0D] font-bold text-lg"></div>
      </div>
      {/* Table Row */}
      {dataCattleStats?.data?.map((cattle) => (
        <div
          key={cattle.id}
          className="bg-[#DDDDDD] mb-2 gap-x-2 mx-4 rounded-lg h-[66px] w-[1004px] text-[#0D0D0D] text-[20px] flex justify-center items-center"
        >
          <p className="flex basis-1/4 justify-center">
            {cattle.measuredAt.slice(0, 10)}
          </p>
          <p className="flex basis-1/4 justify-center">{cattle.age}</p>
          <p className="flex basis-1/4 justify-center">{cattle.weight}</p>
          <Button
            className="flex basis-1/5 justify-center items-center 
                            h-[43px] bg-[#2E78A6] text-md text-[#FBFBFB]
                            hover:bg-[#15547C]"
            onClick
          >
            Detail
          </Button>
        </div>
      ))}
    </>
  );
}
