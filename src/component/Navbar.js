import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Drawerr } from '../Pages/Drawerr'

const Navbar = () => {

const [navi,setNavi] = useState(false)
const handleclick = ()=> setNavi(!navi)

  return (
    <div className='w-full h-[100px] flex bg-[Yellow] text-[brown] font-semibold justify-between items-center'>

    <div>
      <div>
        <Drawerr />
      </div>
      <NavLink to="/" className="text-[30px] font-extrabold text-blue-500 ml-5">Logo</NavLink>
    </div>


    {/* menu */}

    <ul className='hidden md:flex'>

         <li className="relative group">
        <NavLink to='#' className='hover:bg-pink-500' >Movies</NavLink>
        <ul className="absolute z-50 opacity-0 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto w-max bg-green-600">
          <li> <NavLink className='hover:bg-pink-500'  >Popular</NavLink></li>
          <li> <NavLink className='hover:bg-pink-500' >TopRated</NavLink></li>
          <li><NavLink className='hover:bg-pink-500' >UpComing</NavLink></li>
          <li><NavLink className='hover:bg-pink-500' >NowPlaying</NavLink></li>
        </ul>
      </li>


      <li><NavLink to='/about' className='hover:bg-pink-500' >About</NavLink></li>
      <li><NavLink to='/service' className='hover:bg-pink-500' >service</NavLink></li>

    </ul>

{/* icon */}
<div onClick={handleclick} className='md:hidden z-10'>
{!navi ? <FaBars /> : <FaTimes />}
</div>

{/* mobile menu */}
<ul className={
        !navi
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-[auto] bg-[#8CCCF4] flex flex-col justify-center items-center text-white'
      }>
        <div>
          <NavLink onClick={handleclick} to="/" className="text-[30px] font-bold text-blue-500">Logo</NavLink>
        </div>


       

        <li className="relative group">
          <NavLink to='#' className='hover:bg-pink-500 text-[20px]' >Movies</NavLink>
          <ul className="absolute z-50 opacity-0 pointer-events-none transition duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto w-max bg-slate-600">
            <li className='py-2 text-[20px]'><NavLink onClick={handleclick} to=''>Popular</NavLink></li>
            <li className='py-2 text-[20px]'><NavLink onClick={handleclick} to=''>TopRated</NavLink></li>
            <li className='py-2 text-[20px]'><NavLink onClick={handleclick} to=''>Upcoming</NavLink></li>
            <li className='py-2 text-[20px]'><NavLink onClick={handleclick} to=''>NowPlaying</NavLink></li>
          </ul>
        </li>

        <li className=' text-[20px]'><NavLink onClick={handleclick} to='/about'>About</NavLink></li>
        <li className=' text-[20px]'><NavLink onClick={handleclick} to='/service'>service</NavLink></li>



      </ul>



</div>

  )
}

export default Navbar