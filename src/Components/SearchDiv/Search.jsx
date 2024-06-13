import React, { useState } from 'react';
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
  };

  const handleClear = () => {
    setQuery(''); // Mengosongkan input
    onSearch(''); // Memanggil pencarian dengan string kosong untuk mereset pencarian
  };

  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form onSubmit={handleSubmit}>
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
          <div className='flex gap-2 items-center w-full'>
            <FaSearch className='text-[25px] icon'/>
            <input 
              type="text" 
              className='bg-transparent text-blueColor focus:outline-none w-[100%]' 
              placeholder='Search...'
              value={query}
              onChange={handleInputChange}
            />
            {query && ( // Menampilkan ikon X hanya jika ada teks di input
              <IoIosCloseCircleOutline 
                className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' 
                onClick={handleClear} // Menambahkan onClick handler untuk mengosongkan input
              />
            )}
          </div>
          <button type="submit" className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>
            Search
          </button>
        </div>
      </form>
      {/* Add other elements as needed */}
    </div>
  );
};

export default Search;
