import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import listData from '../data.json';

const Home = () => {
  const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://jsearch.p.rapidapi.com/search',
  //     params: {
  //       query: 'React Development in Indonesia',
  //       page: '1',
  //       num_pages: '1',
  //       date_posted: 'all',
  //     },
  //     headers: {
  //       'x-rapidapi-key': '48fc03c1e5msha01508206297ae8p177650jsna1c2ec037bb4',
  //       'x-rapidapi-host': 'jsearch.p.rapidapi.com',
  //     },
  //   };
  //   try {
  //     const res = await axios.request(options);
  //     if (Array.isArray(res.data.data)) {
  //       setData(res.data.data.slice(0, 3)); // Menyimpan hanya tiga data pertama
  //     } else {
  //       setData([]); // Mengatur data menjadi array kosong jika tidak berbentuk array
  //     }
  //     console.log('Data : ', res.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  useEffect(() => {
    setData(listData.data)
  })

  const navigate = useNavigate();

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  return (
    <main className="flex items-center justify-center flex-wrap mt-20 pt-40">
      <div className="text-center md:text-left md:w-1/2 px-20">
        <h1 className="text-6xl font-bold text-teal-700">
          Raih Pekerjaan <br />
          Untuk Karir <br />
          Yang Bermakna <br />
          Bagimu!
        </h1>
        <p className="mt-4 text-gray-600">
          Temukan karir impianmu dengan mudah, hanya di JobSeeker!
        </p>
        <button
          className="mt-8 px-8 py-4 bg-teal-600 text-white rounded-full hover:bg-teal-700"
          onClick={() => navigate('/jobs')}
        >
          Cari Lowongan
        </button>
      </div>

      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
        <img src="src/assets/Asset-Home.png" alt="Job Search" className="w-full max-w-md" />
      </div>

      <div className="items-center justify-center flex-wrap mt-40">
        <h1 className="text-4xl font-bold text-teal-700">Rekomendasi Lowongan</h1>
      </div>

      <div className="flex p-[2rem] mb-4 ">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.length > 0 ? (
            data.map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-3xl transition duration-300 transform hover:-translate-y-1"
              >
                <h2 className="text-xl text-[#2B8D93] font-semibold mt-4">{job.employer_name}</h2>
                <p className="text-gray-600 mt-4">Posisi: {job.job_title}</p>
                <p className="text-gray-600 mt-4">Lokasi: {job.job_city}, {job.job_country}</p>
                <p className="text-gray-600 mt-4">
                  Deskripsi singkat: {truncateText(job.job_description, 100)}
                </p>
                <a href={job.job_apply_link} className="text-teal-500 mt-4 inline-block hover:text-teal-700">
                  Lihat Selengkapnya
                </a>
              </div>
            ))
          ) : (
            <p>Tidak ada data tersedia</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
