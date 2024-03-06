import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'exprience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]

  return (
    <div className='flex justify-between items-center bg-black w-full h-20 px-4 text-white fixed'>
       <div className='text-5xl ml-32 font-signature'>
            <h1>Abdul Rehman</h1>
       </div>
       <ul className=' hidden md:flex'>
        {
            links.map(({id, link})=>(
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200' >
                    <a href={link}>{link}</a>
                 </li>
            ))
        }
       </ul>
       <div onClick={() => setNav(!nav)} className='pr-4 cursor-pointer z-10 text-gray-500 md:hidden '>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        { nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-t from-black to-gray-800'>
           
            {
            links.map(({id, link})=>(
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>  
                   <a href={link}>{link}</a>
                 </li>
            ))
        }
        </ul>
        )}
        
    </div>
  )
}

export default Navbar