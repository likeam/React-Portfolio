import React from 'react'
import Resturent from "../assets/portfolio/Resturent.png";
import ReactECommerce from '../assets/portfolio/React-E-Commerce.png';
import DesiResturent from '../assets/portfolio/DesiResturent.png';
import Travlings from '../assets/portfolio/Travlings.png';
import reacSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';
import usestate from '../assets/portfolio/usestate.jpg';



const Portfolio = () => {

    const pportfolios =[
        {
            id: 1,
            src: Resturent,
        },
        {
            id: 2,
            src:ReactECommerce, 
        },
        {
            id: 3,
            src: DesiResturent,
        },
        {
            id: 4,
            src: Travlings,
        },
        {
            id: 5,
            src: reacSmooth,
        },
        {
            id: 6,
            src: reactWeather,
        },
        
    ]
  return (
    <div name="portfolio" 
         className="w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-scree"    
        >
        <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto" >
            <div className='pb-8'>
                <p className="inline text-4xl font-bold border-b-4 border-gray-500">
                    Portfolio
                </p>
                <p className='py-6'>
                    Check out some of my work right here
                </p>
            </div>
            <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
                {
                    pportfolios.map(({id, src}) => (
                        <div key={id} className='rounded-lg shadow-md shadow-gray-600'  >
                            <img   
                                src={src} alt='weather'       
                                className='duration-200 rounded-md hover:scale-110'                 
                            />                    
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Code</button>
                            </div>
                         </div>              
            
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio