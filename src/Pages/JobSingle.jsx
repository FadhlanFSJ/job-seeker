import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const JobSingle = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const options = {
          method: 'GET',
          url: `https://jsearch.p.rapidapi.com/job/${id}`,
          headers: {
            'x-rapidapi-key': '48fc03c1e5msha01508206297ae8p177650jsna1c2ec037bb4',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com',
          },
        };
        const res = await axios.request(options);
        setJob(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-3xl bg-white shadow-md rounded-lg overflow-hidden w-full">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{job.job_title}</h2>
          <div className="mt-4 flex items-center">
            <div className="text-sm font-semibold text-gray-600">Nama Perusahaan:</div>
            <div className="ml-2 text-sm text-gray-600">{job.employer_name}</div>
          </div>
          <div className="mt-2 flex items-center">
            <div className="text-sm font-semibold text-gray-600">Spesialisasi:</div>
            <div className="ml-2 text-sm text-gray-600">{job.job_specialization}</div>
          </div>
          <div className="mt-2 flex items-center">
            <div className="text-sm font-semibold text-gray-600">Level Jabatan:</div>
            <div className="ml-2 text-sm text-gray-600">{job.job_level}</div>
          </div>
          <div className="mt-2 flex items-center">
            <div className="text-sm font-semibold text-gray-600">Lokasi:</div>
            <div className="ml-2 text-sm text-gray-600">{job.job_location}</div>
          </div>
          <div className="mt-2 flex items-center">
            <div className="text-sm font-semibold text-gray-600">Bisnis Utama:</div>
            <div className="ml-2 text-sm text-gray-600">{job.job_industry}</div>
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-200">
          <div className="text-lg font-semibold text-gray-800 mb-2">Job Description</div>
          <p className="text-gray-700">{job.job_description}</p>
        </div>
        <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 flex justify-end">
          <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">Lamar Lowongan</button>
        </div>
      </div>
    </div>
  );
};

export default JobSingle;
