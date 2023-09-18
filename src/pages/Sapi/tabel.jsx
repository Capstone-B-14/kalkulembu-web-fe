import React from "react";

import Sidebar from "../../components/Sidebar/sidebar";
import Tabel from "../../components/Tabel/personal";

export default function SapiTabel() {
    const data = [
        { tanggal: '18/9/2023', umur: 8, bobot: '280' },
        { tanggal: '18/9/2023', umur: 8, bobot: '280' },
        { tanggal: '18/9/2023', umur: 8, bobot: '280' },
      ];
    return (
      <>
        <div className='flex bg-[#FBFBFB]'>
          <div className=''>
            <Sidebar />
          </div>
          <div className="container mx-auto p-4">
                <Tabel data={data} />
        </div>
        </div>
      </>
    );
  }
  