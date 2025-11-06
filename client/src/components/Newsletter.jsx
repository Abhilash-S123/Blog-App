import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32 mx-8'>
        <h1 className='md-text-4xl text-2xl font-semibold'>Never Miss a Blog!</h1>
        <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get latest blog and news</p>

        <form className='flex items-center max-w-2xl justify-between w-full m:h-13 h-12'>
            <input className='border border-gray-300 h-full rounded-md w-full outline-none
            border-r-0 rounded-r-none px-3 placeholder:text-gray-500' type="text" placeholder='Enter your email id' required/>
            <button className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all
             cursor-pointer rounded-md rounded-1-none' type="submit">Subscribe</button>
        </form>
    </div>
  )
}
    
export default Newsletter