import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

  const navigate = useNavigate();

  const scrollToFooter = () => {
    const Footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-[#2B8D93]" onClick={() => navigate('/')}><strong>Job</strong>Seeker</h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f#6f#f] hover:text-[#2B8D93]" onClick={scrollToFooter}>About</li>
        <li className="menuList text-[#6f#6f#f] hover:text-[#2B8D93]" onClick={() => navigate('/jobs')} >Jobs</li>
        <li className="menuList text-[#6f#6f#f] hover:text-[#2B8D93]" onClick={() => navigate('/register')} >Register</li>
        <li className="menuList text-[#6f#6f#f] hover:text-[#2B8D93]" onClick={() => navigate('/login')}>Login</li>
      </div>
    </div>
  )
}

export default NavBar