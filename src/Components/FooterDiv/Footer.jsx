import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="footer" className='mt-40 footer flex p-[8rem] bg-[#2B8D93] gap-8 grid-cols-5 m-auto items-center justify-between'>
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white"><strong>Job</strong>Seeker</h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 mt-6 max-w-[350px]'>
        Temukan pekerjaan impian Anda bersama kami dan jadikan karier Anda lebih gemilang. <br />
        Kami berkomitmen untuk menyediakan berbagai peluang kerja dari perusahaan terkemuka, membantu Anda dalam setiap langkah pencarian kerja.        </p>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>PT. Telkom Indonesia</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>PT. Goto Indonesia</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>PT. KAI</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>PT. GUDANG GARAM JAYA</li>
        </div>
      </div>
      <div className='grid text-center'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Contact Us
        </span>
        <div className='grid gap-3 justify-center' >
          <li className='text-white opacity-[.7] hover:opacity-[1]'>
          <FaFacebookF className='text-[25px] ' />
          </li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>
          <FaInstagram className='text-[25px]' />
          </li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>
          <FaYoutube className='text-[25px]' />
          </li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>
          <FaWhatsapp className='text-[25px]' />
          </li>
        </div>
      </div>
    </div>
  );
}

export default Footer;
