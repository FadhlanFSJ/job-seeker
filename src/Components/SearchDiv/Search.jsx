import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] '>
      <form action="">
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-[1rem] shadow-lg shadow-greyIsh-700 text-sm'>
          <div className='flex gap-2 items-center w-full'>
            <FaSearch className='text-[16px] icon' />
            <input
              type="text"
              className='bg-transparent text-[#2B8D93] focus:outline-none w-[100%] text-sm'
              placeholder='Search...'
            />
            <IoIosCloseCircleOutline className='text-[20px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>
          <button className='bg-[#2B8D93] h-full p-2 px-4 rounded-[10px] text-white text-sm cursor-pointer hover:bg-white-300'>
            Search
          </button>
        </div>
      </form>
      <div className='secDiv flex items-center gap-10 justify-center text-sm'>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#2B8D93] font-semibold'>Sort By:</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-3 py-1'>
            <option value="date">Tanggal Dibuat</option>
            <option value="content">Konten</option>
            <option value="name">Nama</option>
            <option value="category">Kategori</option>
          </select>
        </div>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#2B8D93] font-semibold '>Jangka Waktu:</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-3 py-1'>
            <option value="">Part Time</option>
            <option value="">Fulltime</option>
            <option value="">Kontrak</option>
            <option value="">Magang</option>
          </select>
        </div>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#2B8D93] font-semibold'>Tipe:</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-3 py-1'>
            <option value="">Jarak Jauh</option>
            <option value="">Di Kantor</option>
            <option value="">Gabungan</option>
          </select>
        </div>
        <span className='text-[#a1a1a1] cursor-pointer font-semibold'>Clear All</span>
      </div>
    </div>
  );
}

export default Search;
