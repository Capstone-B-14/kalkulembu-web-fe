import Sidebar from '../../components/Sidebar';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { useState } from 'react';

export default function ProfilePage() {
  const [disable, setDisable] = useState(true);

  const handleEdit = () => {
    setDisable(!true);
  };

  const handleSave = () => {
    setDisable(!false);
  };

  return (
    <>
      <div className="flex bg-[#FBFBFB]">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col mt-20 ml-20 mr-10">
          <div className="flex items-center content-center">
            <img
              className="flex items-center justify-center object-fill w-32 h-32 bg-gray-400 rounded-full"
              src="/src/assets/kalkulembu-logo.png"
              alt=""
            />
            <div className="flex flex-col justify-center ml-[30px]">
              <p className="mb-1 text-3xl font-bold">Pak Peternak</p>
              <p className="text-xl font-semibold">Peternakan Maju Mundur</p>
            </div>
            <Button
              className="content-center justify-center flex w-[150px] h-[50px] ml-[400px] bg-[#75A3BF]"
              action={handleEdit}
            >
              Edit Profil{' '}
              <i className="ml-2">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 28 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.07167 25.5903H0V18.7928L19.0583 0.469167C19.3709 0.168759 19.7947 0 20.2367 0C20.6786 0 21.1025 0.168759 21.415 0.469167L26.13 5.00081C26.4424 5.30131 26.618 5.70882 26.618 6.13372C26.618 6.55863 26.4424 6.96614 26.13 7.26664L7.07167 25.5903ZM0 28.7952H30V32H0V28.7952Z"
                    fill="#0D0D0D"
                  />
                </svg>
              </i>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-[450px] h-auto my-20 top-0 border-2 border-gray-700 p-10 rounded">
            <div className="w-full mb-4">
              <TextInput
                label="Nama Lengkap"
                disabled={disable ? true : ''}
                style={disable ? {} : { backgroundColor: 'white' }}
                value="Pak Peternak"
              />
            </div>
            <div className="w-full mb-4">
              <TextInput
                label="Nomor Telepon"
                disabled={disable ? true : ''}
                style={disable ? {} : { backgroundColor: 'white' }}
                value="62812345678"
              />
            </div>
            <div className="w-full mb-4">
              <TextInput
                label="Email"
                disabled={disable ? true : ''}
                style={disable ? {} : { backgroundColor: 'white' }}
                value="pakpeternak@email.com"
              />
            </div>
            <div className="w-full mb-4">
              <TextInput
                label="Nama Peternakan"
                disabled={disable ? true : ''}
                style={disable ? {} : { backgroundColor: 'white' }}
                value="Peternakan Maju Mundur"
              />
            </div>
            <div className="w-full mb-4">
              <TextInput
                label="Lokasi Peternakan"
                disabled={disable ? true : ''}
                style={disable ? {} : { backgroundColor: 'white' }}
                value="Di Hatimu"
              />
            </div>
            {!disable ? (
              <Button action={handleSave} className="bg-[#75A3BF] mt-4">
                Simpan
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
