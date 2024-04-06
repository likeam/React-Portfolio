import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import cv from "../assets/resume/ARCV.pdf"

const SocialLinks = () => {

    
    const links = [
        {
         id: 1,
         child: (
            <>
                LinkdIn<FaLinkedin size={30} />
            </>
         ),
         href: "https://www.linkedin.com/in/abdul-rehman-b27a13241/",
         style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
               <>
                   GitHub<FaGithub size={30} />
               </>
            ),
            href: "https://github.com/likeam",
           },
           {
            id: 3,
            child: (
               <>
                   Mail<HiOutlineMail size={30} />
               </>
            ),
            href: "milto:likeam99.gmail.com",
           },
           {
            id: 4,
            child: (
               <>
                   Resume<BsFillPersonLinesFill size={30} />
               </>
            ),
            href: {cv},
            style: "rounded-tr-md",
            download:true,
           },
 
     ]


  return (
    <div className='hidden lg:flex  flex-col top-[35%] left-0 fixed ' >
        <ul>
            {
                links.map(({id, child, href, style, download}) =>(
                    <li key={id} className='ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 flex justify-between items-center w-40 h-14 px-4  bg-gray-400 '>
                        <a href={href} className='flex items-center justify-between w-full text-white' >
                            {child}
                        </a>
                    </li>
                ))              
            }
        </ul>
    </div>
  )
}

export default SocialLinks