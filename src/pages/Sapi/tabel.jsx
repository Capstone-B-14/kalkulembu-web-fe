import React from "react";

import Sidebar from "../../components/Sidebar/sidebar";
import Tabel from "../../components/Tabel/personal";

export default function SapiTabel() {
    const data = [
        { nama: 'John Doe', usia: 25, alamat: 'Jalan A' },
        { nama: 'Jane Smith', usia: 30, alamat: 'Jalan B' },
        { nama: 'Bob Johnson', usia: 35, alamat: 'Jalan C' },
      ];
    return (
      <>
        <div className='flex'>
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
  