import React, { useEffect, useState } from 'react';
import Search from '../Components/SearchDiv/Search';
import axios from 'axios';
import { CiStar } from "react-icons/ci";
import listData from '../data.json';

const Jobs = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('Python');

  // const fetchData = async () => {
  //   const options = {
  //     method: 'GET',
  //     url: 'https://jsearch.p.rapidapi.com/search',
  //     params: {
  //       query: query,
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
  //       setData(res.data.data); // Menyimpan data dari API ke state data jika berbentuk array
  //     } else {
  //       setData([]); // Mengatur data menjadi array kosong jika tidak berbentuk array
  //     }
  //     console.log("Data : ", res.data.data); // Mencetak data yang diterima dari API
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [query]);

  // useEffect(() => {
  //   console.log("Query changed: ", query);
  // }, [query]);

    useEffect(()=> {
      setData(listData.data);
      console.log(data);
    }, [])
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  const handleFavorite = async (job) => {
    try{
      await axios.post('http://localhost:8800/api/jobs/', job);
      alert('Job added to Favorite!');
    }catch(error){
      console.log(error);
    }
  }
  
  return (
    <>
      <div>
        <Search onSearch={handleSearch} />
      </div>
      <div className="flex p-[2rem] mb-4">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.length > 0 ? (
            data.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-3xl transition duration-300 transform hover:-translate-y-1">
                <div className='flex justify-between'>
                  <h2 className="text-xl text-[#2B8D93] font-semibold mt-4">{job.employer_name}</h2>
                  <button 
                    onClick={() => handleFavorite(job)} 
                    className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
                    <CiStar className='text-[25px]'/>
                  </button>
                </div>
                <p className="text-gray-600 mt-4">Posisi: {job.job_title}</p>
                <p className="text-gray-600 mt-4">Lokasi: {job.job_city}, {job.job_country}</p>
                <p className="text-gray-600 mt-4">
                  {truncateText(job.job_description, 100)}
                </p>
                <a href={job.job_apply_link} className="text-teal-500 mt-4 inline-block hover:text-teal-700">Lihat Selengkapnya</a>
                
              </div>
            ))
          ) : (
            <p>Tidak ada data tersedia</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;