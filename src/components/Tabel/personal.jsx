import React from 'react';

export default function Tabel ({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Tanggal</th>
            <th className="border px-4 py-2">Umur (Bulan)</th>
            <th className="border px-4 py-2">Bobot (kg)</th>
            <th className='border px-4 py-2'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.tanggal}</td>
              <td className="border px-4 py-2">{item.umur}</td>
              <td className="border px-4 py-2">{item.bobot}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
