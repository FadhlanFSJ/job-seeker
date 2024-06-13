import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../API/api';

const FavJobs = () => {
  const [favoriteJobs, setFavoriteJobs] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userIdFromStorage = localStorage.getItem('userId');
        setUserId(userIdFromStorage);

        if (userIdFromStorage) {
          const response = await api.get(`/jobs/list/${userIdFromStorage}`);
          setFavoriteJobs(response.data.Result);
        }
      } catch (error) {
        console.log('Error fetching favorite jobs:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Panggil API untuk menghapus data dari backend
      await api.delete(`/jobs/list/${id}`);
      console.log(`Job with id ${id} deleted successfully.`);

      // Update state favoriteJobs setelah penghapusan
      const updatedJobs = favoriteJobs.filter(job => job.id !== id);
      setFavoriteJobs(updatedJobs);
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <div className="container mx-auto mt-10 pt-10">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded my-6">
          <thead>
            <tr className="text-left">
              <th className="py-4 px-6 bg-teal-700 text-white font-bold uppercase text-sm">Employer Name</th>
              <th className="py-4 px-6 bg-teal-700 text-white font-bold uppercase text-sm">Job Title</th>
              <th className="py-4 px-6 bg-teal-700 text-white font-bold uppercase text-sm">Location</th>
              <th className="py-4 px-6 bg-teal-700 text-white font-bold uppercase text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {favoriteJobs.length > 0 ? (
              favoriteJobs.map((job) => (
                <tr key={job.id} className="border-b border-teal-700 hover:bg-gray-100">
                  <td className="py-4 px-6">{job.employer_name}</td>
                  <td className="py-4 px-6">{job.job_title}</td>
                  <td className="py-4 px-6">{job.job_city}, {job.job_country}</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="text-sm text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 px-6 text-lg text-gray-600 text-center">Belum ada pekerjaan favorit.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavJobs;
