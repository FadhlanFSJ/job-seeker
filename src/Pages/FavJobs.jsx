import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Data dummy untuk tujuan desain
const dummyData = [
  {
    id: 1,
    employer_name: 'ABC Company',
    job_title: 'Frontend Developer',
    job_city: 'New York',
    job_country: 'USA',
    job_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac urna vitae augue venenatis finibus.',
    job_apply_link: 'https://example.com/apply/1',
  },
  {
    id: 2,
    employer_name: 'XYZ Inc.',
    job_title: 'Backend Developer',
    job_city: 'San Francisco',
    job_country: 'USA',
    job_description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    job_apply_link: 'https://example.com/apply/2',
  },
  {
    id: 3,
    employer_name: 'Tech Solutions Ltd.',
    job_title: 'Full Stack Developer',
    job_city: 'London',
    job_country: 'UK',
    job_description: 'Integer eu ante vel diam bibendum dictum. Nulla et elit nec libero auctor efficitur vitae eu tellus.',
    job_apply_link: 'https://example.com/apply/3',
  },
];

const FavJobs = () => {
  const [favoriteJobs, setFavoriteJobs] = useState([]);

  useEffect(() => {
    // Simulasi pengambilan data dari backend
    setFavoriteJobs(dummyData);
  }, []);

  const handleDelete = async (id) => {
    try {
      // Simulasi penghapusan dari state
      const updatedJobs = favoriteJobs.filter(job => job.id !== id);
      setFavoriteJobs(updatedJobs);
      
      // Simulasi penghapusan dari database dengan axios
      // Gantikan dengan URL dan endpoint yang sesuai
      await axios.delete(`http://localhost:8800/api/jobs/favorite/${id}`);
      console.log(`Job with id ${id} deleted successfully.`);
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
