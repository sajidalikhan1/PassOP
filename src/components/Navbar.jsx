import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-slate-800 text-white'>

        <div className="mycontainer flex justify-between items-center px-2 h-10">


            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-500'> &lt; </span>
                <span>Pass</span><span className='text-green-500'>OP/&gt; </span>
            </div>

            {/* <ul>
                <li className='flex gap-4'>
                    <a className='hover:font-bold' href="#">Home</a>
                    <a className='hover:font-bold' href="#">About us</a>
                    <a className='hover:font-bold' href="#">Contact</a>
                </li>
            </ul> */}
            {/* I think these i don't need */}

            {/* Logo*/}
            <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex justify-between items-center ring-white ring-1'>
                <img className='invert w-10 p-1' src="/icons/github.svg" alt="github logo" />
                <span className='font-bold px-2'>GitHub</span>
            </button>
        </div>
    </nav>
  )
}

export default Navbar