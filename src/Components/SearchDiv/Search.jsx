import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Search = ({ onSearch }) => {

  const [query, setQuery] = useState('');


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  }

  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form>
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
            <div className='flex gap-2 items-center w-full'>
              <FaSearch className='text-[25px] icon'/>
              <input 
              type="text" 
              className='bg-transparant text-blueColor focus:outline-none w-[100%]' 
              placeholder='Search...'
              value={query}
              onChange={handleInputChange}
              />
              <IoIosCloseCircleOutline className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
            </div>
            <button onClick={handleSubmit} type="submit" className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white 
            cursor-pointer hover:bg-blue-300'>
              Search
            </button>
        </div>
      </form>
      <div className='secDiv flex items-center gap-10 justify-center'>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort By:</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="date">Tanggal Dibuat</option>
            <option value="content">Konten</option>
            <option value="name">Nama</option>
            <option value="category">Kategori</option>
          </select>
        </div>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>Jangka Waktu : </label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Part Time</option>
            <option value="">Fulltime</option>
            <option value="">Kontrak</option>
            <option value="">Magang</option>
          </select>
        </div>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>Tipe : </label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Jarak Jauh</option>
            <option value="">Di Kantor</option>
            <option value="">Gabungan</option>
          </select>
        </div>
        <span className='text-[#a1a1a1] cursor-pointer' >Clear All</span>
      </div>
    </div>
  )
}

export default Search