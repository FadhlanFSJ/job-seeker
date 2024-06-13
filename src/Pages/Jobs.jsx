import React from 'react'
import Search from '../Components/SearchDiv/Search'


const Jobs = () => {
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

export default Jobs