import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-4 p-4'>
       <NavLink end = {true} to={'/admin'} className={({isActive})=> `flex items-center gap-2 p-2 rounded-md
           hover:bg-gray-200 ${isActive && 'bg-gray-300 font-semibold' } `}>
            <img src={assets.home_icon} alt="" />
            <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>

        <NavLink  to={'/admin/addBlog'} className={({isActive})=> `flex items-center gap-2 p-2 rounded-md
           hover:bg-gray-200 ${isActive && 'bg-gray-300 font-semibold' } `}>
            <img src={assets.add_icon} alt="" />
            <p className='hidden md:inline-block'>Add Blog</p>
        </NavLink>

        <NavLink  to={'/admin/listBlog'} className={({isActive})=> `flex items-center gap-2 p-2 rounded-md
         hover:bg-gray-200 ${isActive && 'bg-gray-300 font-semibold' } `}>
            <img src={assets.list_icon} alt="" />
            <p className='hidden md:inline-block'>List Blog</p>
        </NavLink>

        <NavLink  to={'/admin/comments'} className={({isActive})=> `flex items-center gap-2 p-2 rounded-md
         hover:bg-gray-200 ${isActive && 'bg-gray-300 font-semibold' } `}>
            <img className='w-7' src={assets.comment_icon} alt="" />
            <p className='hidden md:inline-block'>Comments</p>
        </NavLink>
    </div>
  )
}

export default Sidebar