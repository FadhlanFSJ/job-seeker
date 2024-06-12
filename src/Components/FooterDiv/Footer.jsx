import React from 'react'

const Footer = () => {
  return (
    <div className='footer flex p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid-cols-5 m-auto items-center justify-between'>
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white"><strong>Job</strong>Seeker</h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 text-justify max-w-[350px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in minima veritatis dolorum accusamus, nostrum iusto, nisi quae ex magnam est, dolore eum! Non maiores rem alias nulla error iure.</p>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About</li>
        </div>
      </div>
    </div>
  )
}

export default Footer