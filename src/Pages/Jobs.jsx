import React, { useEffect, useState } from 'react'
import Search from '../Components/SearchDiv/Search'


const Jobs = () => {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('Indonesia');

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: {
        query: query,
        page: '1',
        num_pages: '1',
        date_posted: 'all'
      },
      headers: {
        'x-rapidapi-key': '48fc03c1e5msha01508206297ae8p177650jsna1c2ec037bb4',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
      }
    };
    try {
      const res = await axios.request(options);
      setData(res.data); // Menyimpan data dari API ke state data
      console.log("Data : ", res.data); // Mencetak data yang diterima dari API
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  useEffect(() => {
    console.log("Query changed: ", query);
  }, [query]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <>
      <div>
        <Search />
      </div>    
      <div className="flex p-[2rem] mb-4 ">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-3xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl text-[#2B8D93] font-semibold mt-4">Posisi Lowongan 1</h2>
              <p className="text-gray-600 mt-16">Deskripsi singkat lowongan pekerjaan 1. Lokasi, syarat, dan info lainnya.</p>
              <a href="link-lowongan-1" className="text-teal-500 mt-4 inline-block hover:text-teal-700">Lihat Selengkapnya</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl text-[#2B8D93] font-semibold mt-4">Posisi Lowongan 2</h2>
              <p className="text-gray-600 mt-16">Deskripsi singkat lowongan pekerjaan 2. Lokasi, syarat, dan info lainnya.</p>
              <a href="link-lowongan-2" className="text-teal-500 mt-4 inline-block hover:text-teal-700">Lihat Selengkapnya</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl text-[#2B8D93] font-semibold mt-4">Posisi Lowongan 3</h2>
              <p className="text-gray-600 mt-16">Deskripsi singkat lowongan pekerjaan 3. Lokasi, syarat, dan info lainnya.</p>
              <a href="link-lowongan-3" className="text-teal-500 mt-4 inline-block hover:text-teal-700">Lihat Selengkapnya</a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Jobs;
