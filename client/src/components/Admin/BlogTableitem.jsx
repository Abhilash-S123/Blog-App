import React from 'react'
import { assets } from '../../assets/assets';

const BlogTableitem = ({blog, fetchBlogs, index}) => {

    const {title, createdAt} = blog;
    const BlogDate = new Date(createdAt);

  return (
    <tr className='border-y border-gray-300 '>
        <th className='px-2 py-4'>{index}</th>
        <td className='px-2 py-4'>{title}</td>       
        <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
        <td className='px-2 py-4 max-sm:hidden '>
            <p className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`}
            >{blog.isPublished ? "Published" : "Unpublished"}</p>
            </td>  
        <td className='px-2 py-4 flex text-xs gap-3'><button 
        className='border cursor-pointer px-2 py-0.5 mt-1 rounded'>{blog.isPublished ? "Unpublish" : "Publish"}</button>
        <img className='cursor-pointer w-8 hover:scale-110 transition-all color bg-red-300 
        rounded mr-5' src={assets.cross_icon} alt="" />
        </td>
    </tr>
  )
}

export default BlogTableitem