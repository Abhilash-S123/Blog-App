import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='w-full px-8 sm:px-20 xl:px-32 py-3 border border-gray-300 bg-gray-200 mt-8 '>
        <div className='w-full flex flex-col md:flex-row justify-between gap-10 mb-10'>
          <div className='pt-4'>
            <img className='w-32 sm:w-44' src= {assets.logo} alt="logo" />
            <p className='max-w-[410px] mt-6 text-gray-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>

          <div className=' flex flex-col sm:flex-row justify-between md:w-[45%] gap-5 pt-4 '>
             {footer_data.map((section, index) => (
              <div key={index} >
                <h3 className='text-lg font-semibold mb-4'>{section.title}</h3>
                <ul className='space-y-2'>
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.url} className='text-gray-600 hover:text-blue-800 cursor-pointer'>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
             <p className='py-4 text-center text-gray-500 text-sm md:text-base'>Copyright 2025 © Quickblog 
          Greatstack - All rights reserved.</p>  
    </div>
  )
}

export default Footer