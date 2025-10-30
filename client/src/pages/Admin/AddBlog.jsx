import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'

const AddBlog = () => {

  const quillRef = useRef(null)
  const editorRef = useRef(null)

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [category, setCategory] = useState('')
  const [isPublished, setIsPublished] = useState(false)

   const onSubmitHandler = async (e) => {
       e.preventDefault()
   }

   const generateContent = async () => {

   }

   useEffect(() => {
     // Initialize Quill only once
      if (!quillRef.current && editorRef.current) {
        quillRef.current = new Quill(editorRef.current, {
          theme: 'snow'
        });
      }
   }, []);

  return (
    <form className='flex-1 text-gray-800 bg-blue-50/50 h-full overflow-scroll' onSubmit={onSubmitHandler}>
       <div className='w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded '>
          <p  className='mb-4'>Upload thumbnail</p>
          <label htmlFor="image">
            <img className='mt-2 h-16 rounded cursor-pointer bg-blue-800'
             src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
            <input className='' onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
          </label>

          <p className='mt-9'>Blog title</p>
          <input className='w-full max-w-lg mt-2 border p-2
           border-gray-300 outline-none rounded placeholder:text-gray-400' type="text"
            value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Type here' />

          <p className='mt-4'>Sub title</p>
          <input className='w-full max-w-lg mt-2 border p-2 border-gray-300 outline-none rounded
           placeholder:text-gray-400' type="text" value={subTitle} onChange={(e) => setSubTitle(e.target.value)}
            placeholder='Type here' />

          <p className='mt-4'>Blog description</p>
          <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'> 

            <div ref={editorRef}></div>

              <button className=' cursor-pointer absolute right-2 bottom-2 bg-gray-600 text-white px-6 
              py-2 rounded hover:bg-gray-700' type='button' onClick={generateContent}>Generate with AI</button>
          </div>
           <p className='mt-4'>Blog category</p>
          <select className=' mt-2 border p-2 border-gray-300 outline-none rounded' onChange={(e) => setCategory(e.target.value)}
           name="category" >
            <option value="">Select category</option>
            {blogCategories.map((item, index) => {
              return <option key={index} value={item}>{item}</option>
            })}
          </select>
            <div className='flex gap-2 mt-4'>
              <p>Publish now</p>
              <input className='cursor-pointer scale-125' type="checkbox"  checked={isPublished}
               onChange={(e) => setIsPublished(e.target.checked)} />
            </div>
            <div>
              <button className='bg-blue-600 text-white px-12 py-2 rounded cursor-pointer mt-4
               hover:bg-blue-800' type='submit'>Add Blog</button>
            </div>

       </div>
    </form>
    
  )
}

export default AddBlog