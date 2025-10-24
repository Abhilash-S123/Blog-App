import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';

const Blogcard = ({blog}) => {

   const {title, description, category, image, _id} = blog;
   const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/blog/${_id}`)} className='cursor-pointer
     flex flex-col gap-4 p-4 border border-gray-300 rounded-lg 
     hover:shadow-lg hover:scale-105 transition-all duration-300'>
       <img className='aspect-video ' src={image} alt="" />
       <span className='bg-blue-200 text-blue-800 w-max rounded-full px-3 py-1 text-sm'>{category}</span>

       <div>
         <h5 className='font-semibold text-gray-800'>{title}</h5>
         <p className='text-sm text-gray-600 leading-relaxed mt-2 wrap-break-word'
          dangerouslySetInnerHTML={{__html: description.length > 80 ? description.slice(0, 80) + '...' : description}  }>
        
         </p>
       </div>
    </div>
  )
}

export default Blogcard
