import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { useRef } from 'react'

const Header = () => {

  const {setInput, input} = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setInput(inputRef.current.value)
  }

  const onClear = () => {
    setInput('')
    inputRef.current.value = ''
  } 
   

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

                <p className='mt-6 text-gray-600 text-sm sm:text-base m-auto text-center'>Welcome to our AI-powered blog platform!
              All articles here are carefully created and published by our admin using intelligent content generation.<br/> 
              Explore insightful posts across various categories, stay updated, and join the conversation by leaving your comments.
           </p>

                    <form onSubmit={onSubmitHandler } className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border
                    border-gray-300 bg-white rounded overflow-hidden mt-8'>
                        <input ref = {inputRef} className='w-full pl-4 outline-none focus:outline-none placeholder-gray-400
                           ' type="text" placeholder='search for blogs' required />
                        <button  className='text-white bg-primary px-8 py-2 m-1.5 rounded hover:scale-105
                        transition-all cursor-pointer' type='submit'>search</button>
                    </form>
            </div>
            <div className='text-center'>
                {input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm
                shadow-custom-sm cursor-pointer'>Clear Search</button>}
            </div>

            <img className='absolute -top-50 -z-1 opacity-50' src={assets.gradientBackground} alt="" />
        </div>
    )
}

export default Header