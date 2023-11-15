/* eslint-disable react/prop-types */
export default function SapiTerdataRiwayat({ dataCattleStats = [] }) {
  return (
    <>
      {/* Table Header */}
      <div className="flex">
        <div className="text-black font-bold text-lg mr-[260px] ml-[135px]">
          Tanggal
        </div>
        <div className="text-lg font-bold text-black">Kondisi</div>
      </div>
      {/* Table Row */}
      {dataCattleStats?.data?.map((cattle) => (
        <div className="flex mt-2" key={cattle.id}>
          <div className="text-black w-[332px] h-[53px] bg-[#DDDDDD] flex justify-center items-center rounded-md text-[20px]">
            {cattle.measuredAt.slice(0, 10)}
          </div>
          <div className="w-[186px] h-[53px] bg-[#6C8C56] flex justify-center items-center rounded-md text-[20px] ml-4 uppercase">
            {cattle.healthy ? "Sehat" : "Sakit"}
          </div>
        </div>
      ))}
    </>
  );
}
