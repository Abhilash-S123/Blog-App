import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='mx-8 sm:mx-16 xl:mx-24 relative'>

            <div className='text-center mt-20 mb-8'>
               <div className='inline-flex items-center justify-center px-6 gap-4 order border-primary/40
               bg-primary/10  py-1.5 rounded-full mb-4 text-sm text-primary '>

                    <p> New: AI feature added</p>
                    <img className='w-2.5' src={assets.star_icon} alt="" />
                </div>

                <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 
            text-gray-700'>Your own <span className='text-primary'>blogging</span> <br /> flatform</h1>

                <p className='mt-6 text-gray-600 text-sm sm:text-base m-auto'>QuickBlog is a blogging platform that leverages 
                    the power of AI to help you create engaging <br /> content effortlessly. Whether you're a seasoned blogger
                     or just starting out, QuickBlog has got you covered.</p>

                    <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border
                    border-gray-300 bg-white rounded overflow-hidden mt-8'>
                        <input className='w-full pl-4 outline-none focus:outline-none placeholder-gray-400
                           ' type="text" placeholder='search for blogs' required />
                        <button  className='text-white bg-primary px-8 py-2 m-1.5 rounded hover:scale-105 
                        transition-all cursor-pointer' type='submit'>search</button>
                    </form>
            </div>

            <img className='absolute -top-50 -z-1 opacity-50' src={assets.gradientBackground} alt="" />
        </div>
    )
}

export default Header