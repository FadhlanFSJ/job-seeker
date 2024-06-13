import React, { useEffect, useState } from 'react'
import Search from '../Components/SearchDiv/Search'
import axios from 'axios';

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
      <Search onSearch={handleSearch} />
      <div>
        Jobs
      </div>
    </>
  )
}

export default Jobs;
