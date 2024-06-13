import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToFavorites = () => {
    navigate('/FavJobs.jsx'); // Ganti dengan rute yang sesuai untuk halaman favorit jobs
  };

  return (
    <div className='bg-white text-teal-700 py-4 fixed w-full top-0 z-10'>
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="cursor-pointer" onClick={navigateToHome}>
          <h1 className="text-xl font-bold">JobSeeker</h1>
        </div>
        <ul className="flex gap-8">
          <li className="cursor-pointer hover:text-teal-400" onClick={scrollToFooter}>About</li>
          <li className="cursor-pointer hover:text-teal-400" onClick={() => navigate('/jobs')}>Jobs</li>
          <li className="cursor-pointer hover:text-teal-400" onClick={() => navigate('/favjobs')}>Favorites</li>
          <li className="cursor-pointer hover:text-teal-400" onClick={() => navigate('/register')}>Register</li>
          <li className="cursor-pointer hover:text-teal-400" onClick={() => navigate('/login')}>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
