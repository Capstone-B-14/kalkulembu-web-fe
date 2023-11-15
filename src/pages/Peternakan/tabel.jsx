/* eslint-disable react/prop-types */
import { useMemo } from "react";
import SearchBar from "../../components/SearchBar";
import CardTabel from "../../components/CardTabel";
import { useGetCattleImages } from "../../services/cattle";

export default function PeternakanTabel({
  dataCattles = [],
  search = "",
  setSearch = () => {},
}) {
  const modifiedDataCattle = useMemo(() => {
    return dataCattles?.data?.filter((cattle) =>
      cattle.name.toLowerCase().includes(search.toLowerCase() ?? "")
    );
  }, [dataCattles, search]);

  return (
    <>
      <div className="mr-16 mt-20 flex flex-col md:mt-5">
        <div className="flex w-full gap-y-4 md:flex-col md:ml-4">
          <SearchBar
            onChange={setSearch}
            placeholder="Cari Sapi"
            className="md:w-[50%]"
          ></SearchBar>
        </div>
        <div className="flex flex-col overflow-auto md:h-[65%] lg:flex-row lg:h-full lg:grid lg:grid-cols-2">
          {modifiedDataCattle?.map((cattle, index) => {
            return (
              <div key={index} className="flex flex-col pr-3">
                <CardWithImage cattle={cattle} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const CardWithImage = ({ cattle }) => {
  const { data: dataCattleImage } = useGetCattleImages({ id: cattle.id });
  return (
    <CardTabel
      title={cattle?.name}
      age={cattle?.latestStats?.age}
      img={dataCattleImage?.data[dataCattleImage?.data?.length - 1]?.url}
      bobot={cattle?.latestStats?.weight}
      condition={cattle?.latestStats?.healthy}
    />
  );
};
