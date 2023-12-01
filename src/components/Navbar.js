import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-evenly bg-slate-200'>
    <div className="flex justify-between flex-row bg-blend-color-dodge  w-[80rem] p-3 " >
    <div>
        <h2 className='font-bold'>APP LOGO</h2>
    </div>
    <div className='flex flex-row gap-5'>
        <Link to="/"><h3>DASHBOARD</h3></Link>
        <Link to="create-ads"><h3>CREATE ADS</h3></Link>
    </div>
    </div>
    </div>
  )
}

export default Navbar