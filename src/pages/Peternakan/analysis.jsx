/* eslint-disable react/prop-types */
import { useMemo } from "react";

import TimeSeriesChart from "../../components/Chart";
import KeteranganAnalisis from "../../components/KeteranganAnalisis/index";
import iconsapi from "../../assets/healthicons_animal.svg";
import iconjantan from "../../assets/mingcute_male-line.svg";
import iconfemale from "../../assets/jam_female.svg";
import { CgSmileMouthOpen } from "react-icons/cg";
import { MdOutlineSick } from "react-icons/md";

export default function PeternakanAnalisis({ dataCattles = {} }) {
  const modifiedData = useMemo(() => {
    const countTotal = dataCattles.count;
    const countJantan = dataCattles?.data?.filter(
      (cattle) => cattle.sex
    )?.length;
    const countBetina = dataCattles?.data?.filter(
      (cattle) => !cattle.sex
    )?.length;

    const countSehat = dataCattles?.data?.filter(
      (cattle) => cattle.latestStats.healty
    )?.length;
    const countSakit = dataCattles?.data?.filter(
      (cattle) => !cattle.latestStats.healty
    )?.length;

    const timeseries = dataCattles?.data?.map((cattle) => ({
      date: cattle?.latestStats?.updatedAt?.slice(0, 10),
      weight: cattle?.latestStats?.weight,
    }));

    return {
      countTotal,
      countJantan,
      countBetina,
      countSehat,
      countSakit,
      timeseries,
    };
  }, [dataCattles]);

  return (
    <>
      <div className="space-y-8 my-20 w-full">
        <div className="flex w-full">
          <div className="h-1/2 flex-1 bg-[#FFFFFF] p-12 rounded-2xl overflow-auto drop-shadow-xl">
            <TimeSeriesChart
              title="Jumlah Sapi di Peternakan"
              timeSeriesdata={modifiedData?.timeseries}
            />
          </div>
          <div className="flex-1 p-5">
            <KeteranganAnalisis
              title={"Total Sapi"}
              children2={modifiedData?.countTotal}
              img={iconsapi}
            />
            <KeteranganAnalisis
              title={"Sapi jantan"}
              children2={modifiedData?.countJantan}
              img={iconjantan}
            />
            <KeteranganAnalisis
              title={"Sapi betina"}
              children2={modifiedData?.countBetina}
              img={iconfemale}
            />
          </div>
        </div>
        <div className="p-5 flex flex-row">
          <div className="h-[150px] w-[150px] bg-[#FFFFFF] rounded-2xl drop-shadow-xl mr-10 ">
            <div className="bg-[#A3BFD9] p-1 rounded-b-2xl mx-6"></div>
            <div className="flex flex-col items-center p-3 ">
              <CgSmileMouthOpen className="" color="black" size={40} />
              <text className="text-black font-bold">Sapi Sehat</text>
              <text className="text-black font-bold text-2xl">
                {modifiedData?.countSehat}
              </text>
              <text className="text-black font-bold">ekor</text>
            </div>
          </div>

          <div className="h-[150px] w-[150px] bg-[#FFFFFF] rounded-2xl drop-shadow-xl mr-10 ">
            <div className="bg-[#E78383] p-1 rounded-b-2xl mx-6"></div>
            <div className="flex flex-col items-center p-3 ">
              <MdOutlineSick className="" color="black" size={40} />
              <text className="text-black font-bold">Sapi Sakit</text>
              <text className="text-black font-bold text-2xl">
                {modifiedData?.countSakit}
              </text>
              <text className="text-black font-bold">ekor</text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
