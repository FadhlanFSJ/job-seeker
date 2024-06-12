import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor"><strong>Job</strong>Seeker</h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f#6f#f] hover:text-blueColor">About</li>
        <li className="menuList text-[#6f#6f#f] hover:text-blueColor">Jobs</li>
        <li className="menuList text-[#6f#6f#f] hover:text-blueColor">Register</li>
        <li className="menuList text-[#6f#6f#f] hover:text-blueColor">Login</li>
      </div>
    </div>
  )
}

export default NavBar