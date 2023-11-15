/* eslint-disable react/prop-types */
import { useMemo } from "react";
import TimeSeriesChart from "../../components/Chart";

export default function SapiTerdataAnalisis({
  dataCattleStats = [],
  dataCattleStatsLatest = {},
  dataCattleImage = {},
}) {
  const timeSeriesData = useMemo(() => {
    const timeseries = dataCattleStats?.data?.map((cattle) => ({
      date: cattle?.updatedAt?.slice(0, 10),
      weight: cattle?.weight,
    }));

    return timeseries;
  }, [dataCattleStats]);

  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-1 flex-col gap-2">
          <div className="p-4">
            <p className="text-3xl text-[#0D0D0D] font-bold">Umur Saat Ini</p>
            <p className="font-semibold text-[#0D0D0D]">
              <span className="text-5xl text-[#0D0D0D] font-bold">
                {dataCattleStatsLatest?.data?.age}
              </span>{" "}
              bulan
            </p>
          </div>
          <div className="grid-flow-col p-4">
            <p className="text-3xl text-[#0D0D0D] font-bold">Bobot Saat Ini</p>
            <p className="font-semibold text-[#0D0D0D]">
              <span className="text-5xl text-[#0D0D0D] font-bold">
                {dataCattleStatsLatest?.data?.weight}
              </span>{" "}
              kilogram
            </p>
          </div>
          <div className="grid-flow-col p-4">
            <p className="text-3xl text-[#0D0D0D] font-bold">
              Kondisi Saat Ini
            </p>
            <div className="w-[115px] mt-2 h-[34px] bg-[#6C8C56] flex justify-center items-center rounded-md text-[20px] text-white uppercase">
              {dataCattleStatsLatest?.data?.healthy ? "Sehat" : "Sakit"}
            </div>
          </div>
        </div>
        <div className="p-4">
          {dataCattleImage?.data?.length ? (
            <>
              <p className="mb-2 text-3xl font-bold">Foto Terkini</p>
              <img
                className="w-[480px] aspect-video object-contain"
                src={
                  dataCattleImage?.data[dataCattleImage?.data?.length - 1]?.url
                }
                alt=""
              />
            </>
          ) : null}
        </div>
      </div>
      <div className="justify-center mt-20">
        <div className="w-1/2 p-12 bg-[#FFFFFF] rounded-2xl h-[40vh] overflow-auto drop-shadow-xl">
          <TimeSeriesChart
            title="Grafik Pertumbuhan Bobot Sapi (kg)"
            timeSeriesdata={timeSeriesData}
          />
        </div>
      </div>
    </>
  );
}
