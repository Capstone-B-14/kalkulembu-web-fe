import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import DropdownComponent from "../../components/Dropdown";
import {
  useGetAllCattle,
  useGetCattleImages,
  useGetCattleStats,
  useGetCattleStatsLatest,
} from "../../services/cattle";

import Analysis from "./analisis";
import Table from "./tabel";
import Riwayat from "./riwayat";

export default function SapiTerdataAnalisis() {
  const [tab, setTab] = useState("analysis");
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [currentCattleId, setCurrentCattleId] = useState();

  const { data: dataAllCattle } = useGetAllCattle();
  const { data: dataCattleStats } = useGetCattleStats({ id: currentCattleId });
  const { data: dataCattleImage } = useGetCattleImages({ id: currentCattleId });
  const { data: dataCattleStatsLatest } = useGetCattleStatsLatest({
    id: currentCattleId,
  });

  useEffect(() => {
    const options = dataAllCattle?.data?.map((cattle) => ({
      label: cattle.name,
      value: cattle.id,
    }));
    if (options?.length) setCurrentCattleId(options[0].value);
    setDropdownOptions(options);
  }, [dataAllCattle]);

  return (
    <div className="flex bg-[#FBFBFB]">
      <Sidebar />

      <div className="flex flex-col min-w-[370px] px-16 py-20 max-h-screen overflow-y-auto w-full">
        <DropdownComponent
          options={dropdownOptions}
          onSelect={setCurrentCattleId}
        />
        <div className="my-9 flex gap-4">
          <div
            className={`text-xl font-bold text-[#0D0D0D] flex flex-row items-center h-[50px] w-[162px] rounded-xl justify-center
                  ${
                    tab === "analysis"
                      ? "bg-[#AFC97E] rounded-xl text-[#0D0D0D] hover:text-white"
                      : "bg-[#0D0D0D] text-[#FBFBFB] hover:text-[#AFC97E]"
                  }`}
            onClick={() => {
              setTab("analysis");
            }}
          >
            <span className="inline truncate hover:whitespace-normal">
              Analysis
            </span>
          </div>
          <div
            className={`text-xl font-bold text-[#0D0D0D] flex flex-row items-center h-[50px] w-[162px] rounded-xl justify-center
                  ${
                    tab === "table"
                      ? "bg-[#AFC97E] rounded-xl text-[#0D0D0D] hover:text-white"
                      : "bg-[#0D0D0D] text-[#FBFBFB] hover:text-[#AFC97E]"
                  }`}
            onClick={() => {
              setTab("table");
            }}
          >
            <span className="inline truncate hover:whitespace-normal">
              Table
            </span>
          </div>
          <div
            className={`text-xl font-bold text-[#0D0D0D] flex flex-row items-center h-[50px] w-[162px] rounded-xl justify-center
                  ${
                    tab === "riwayat"
                      ? "bg-[#AFC97E] rounded-xl text-[#0D0D0D] hover:text-white"
                      : "bg-[#0D0D0D] text-[#FBFBFB] hover:text-[#AFC97E]"
                  }`}
            onClick={() => {
              setTab("riwayat");
            }}
          >
            <span className="inline truncate hover:whitespace-normal">
              Riwayat
            </span>
          </div>
        </div>
        {tab === "analysis" ? (
          <Analysis
            {...{ dataCattleStats, dataCattleStatsLatest, dataCattleImage }}
          />
        ) : null}
        {tab === "table" ? <Table {...{ dataCattleStats }} /> : null}
        {tab === "riwayat" ? <Riwayat {...{ dataCattleStats }} /> : null}
      </div>
    </div>
  );
}
