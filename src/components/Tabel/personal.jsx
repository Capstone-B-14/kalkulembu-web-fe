import React from 'react';
import Button from '../Button'

export default function Tabel ({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-[#0D0D0D]">
        <thead>
          <tr>
            <th className="border-none px-4 py-2">Tanggal</th>
            <th className="border-none px-4 py-2">Umur (Bulan)</th>
            <th className="border-none px-4 py-2">Bobot (kg)</th>
            <th className='border-none px-4 py-2'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='bg-[#DDDDDD]'>
              <td className="border px-4 py-2 ">{item.tanggal}</td>
              <td className="border px-4 py-2">{item.umur}</td>
              <td className="border px-4 py-2">{item.bobot}</td>
              <td>
                <Button className="bg-[#2E78A6] w-[129px] h-[43px] hover:bg-[#2E78A6] text-white font-medium py-2 px-4 rounded-lg">Detail</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
