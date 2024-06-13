import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "./style.css";

const JobSingle = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  // useEffect(() => {
  //   const fetchJob = async () => {
  //     try {
  //       const options = {
  //         method: 'GET',
  //         url: `https://jsearch.p.rapidapi.com/job/${id}`,
  //         headers: {
  //           'x-rapidapi-key': '48fc03c1e5msha01508206297ae8p177650jsna1c2ec037bb4',
  //           'x-rapidapi-host': 'jsearch.p.rapidapi.com',
  //         },
  //       };
  //       const res = await axios.request(options);
  //       setJob(res.data.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchJob();
  // }, [id]);

  // if (!job) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="element">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">Job Description</div>
            <p className="p">
              {job.job_description}
            </p>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="text-wrapper-2">{job.job_title}</div>
            <div className="text-wrapper-3">Nama Perusahaan</div>
            <div className="text-wrapper-4">{job.employer_name}</div>
            <div className="text-wrapper-5">Spesialisasi</div>
            <div className="text-wrapper-6">{job.job_specialization}</div>
            <div className="text-wrapper-7">Level Jabatan</div>
            <div className="text-wrapper-8">{job.job_level}</div>
            <div className="text-wrapper-9">Company Size</div>
            <div className="element-karyawan">&lt; 150 Karyawan</div>
            <div className="text-wrapper-10">Head Office</div>
            <div className="DKI-jakarta">{job.job_location}</div>
            <div className="text-wrapper-11">Bisnis Utama</div>
            <div className="text-wrapper-12">Jasa/Pelayanan</div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-13">Full Time</div>
              </div>
            </div>
            <div className="group-2">
              <div className="overlap-2">
                <div className="text-wrapper-14">Lamar Lowongan</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-3">
          <div className="overlap-3">
            <div className="text-wrapper-15">Job Requirements</div>
            <div className="group-4">
              <div className="overlap-group-2">
                <div className="text-wrapper-16">Simpan</div>
              </div>
            </div>
            <div className="group-5">
              <div className="overlap-4">
                <div className="text-wrapper-17">Bagikan</div>
              </div>
            </div>
            <p className="text-wrapper-18">
              {job.job_requirements}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSingle;
