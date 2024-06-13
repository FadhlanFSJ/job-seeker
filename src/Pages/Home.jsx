import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="flex items-center justify-center flex-wrap mt-20">
      <div className="text-center md:text-left md:w-1/2 px-20">
        <h1 className="text-4xl font-bold text-teal-700">
          Raih Pekerjaan <br />
          Untuk Karir <br />
          Yang Bermakna Bagimu!
        </h1>
        <p className="mt-4 text-gray-600">
          Temukan karir impianmu dengan mudah, hanya di JobSeeker!
        </p>
        <button className="mt-8 px-8 py-4 bg-teal-600 text-white rounded-full hover:bg-teal-700" onClick={() => navigate('/jobs')}>
          Cari Lowongan
        </button>
      </div>

      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
        <img src="src/assets/Asset-Home.png" alt="Job Search" className="w-full max-w-md" />
      </div>

      <div className=" items-center justify-center flex-wrap mt-40">
        <h1 className="text-4xl font-bold text-teal-700">
          Rekomendasi Lowongan
        </h1>
      </div>

      <div className="flex p-[2rem] mb-4 ">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-3xl transition duration-300 transform hover:-translate-y-1">
            <h2 className="text-xl text-[#2B8D93] font-semibold mt-4">Posisi Lowongan 1</h2>
            <p className="text-gray-600 mt-16">Deskripsi singkat lowongan pekerjaan 1. Lokasi, syarat, dan info lainnya.</p>
            <button onClick={() => navigate('/jobs/1')} className="text-teal-500 mt-4 inline-block hover:text-teal-700">Lihat Selengkapnya</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <h2 className="text-xl text-[#2B8D93] font-semibold mt-4">Posisi Lowongan 2</h2>
            <p className="text-gray-600 mt-16">Deskripsi singkat lowongan pekerjaan 2. Lokasi, syarat, dan info lainnya.</p>
            <button onClick={() => navigate('/jobs/2')} className="text-teal-500 mt-4 inline-block hover:text-teal-700">Lihat Selengkapnya</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <h2 className="text-xl text-[#2B8D93] font-semibold mt-4">Posisi Lowongan 3</h2>
            <p className="text-gray-600 mt-16">Deskripsi singkat lowongan pekerjaan 3. Lokasi, syarat, dan info lainnya.</p>
            <button onClick={() => navigate('/jobs/3')} className="text-teal-500 mt-4 inline-block hover:text-teal-700">Lihat Selengkapnya</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
