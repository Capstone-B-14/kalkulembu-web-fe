import Sidebar from "../../components/Sidebar";
import Analysis from "./analysis";
import Table from "./tabel";
import DropdownComponent from "../../components/Dropdown";
import { useEffect, useState } from "react";
import { useGetCattleData } from "../../services/cattle";
import { useGetFarms } from "../../services/farm";

export default function PeternakanTabel() {
  const [tab, setTab] = useState("analysis");
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [currentFarmId, setCurrentFarmId] = useState();
  const [search, setSearch] = useState("");

  const { data: dataCattles } = useGetCattleData({
    id: currentFarmId,
    withStats: true,
  });
  const { data: dataFarms } = useGetFarms();

  useEffect(() => {
    const options = dataFarms?.data?.map((farm) => ({
      label: farm.name,
      value: farm.id,
    }));
    if (options?.length) setCurrentFarmId(options[0].value);
    setDropdownOptions(options);
    setSearch("");
  }, [dataFarms]);

  return (
    <>
      <div className="flex bg-[#FBFBFB] max-w-screen max-h-screen">
        <Sidebar />

        <div className="ml-10 mt-20 flex flex-col md:mt-5 max-h-screen overflow-auto w-full">
          <div className="ml-4 my-9 flex gap-4">
            <DropdownComponent
              options={dropdownOptions}
              onSelect={setCurrentFarmId}
              className="pl-3"
            />
          </div>
          <div className="ml-4 my-9 flex gap-4">
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
          </div>
          {tab === "analysis" ? (
            <Analysis dataCattles={dataCattles} />
          ) : (
            <Table
              setAnalysis={() => {}}
              dataCattles={dataCattles}
              {...{ search, setSearch }}
            />
          )}
        </div>
      </div>
    </>
  );
}
