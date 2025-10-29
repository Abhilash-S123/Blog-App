import React, { useEffect } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableitem from '../../components/Admin/BlogTableitem';

const Listblog = () => {

    const [blogs, setBlogs] = React.useState([]);

    const fetchBlogs = async () => {  
      setBlogs(blog_data);
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

  return (
    <div className='flex-1 pad-4 md:p-10 bg-blue50/50'>
        <h1 className='text-2xl font-bold mt-10 mb-10'>All Blogs</h1>
        <div className='overflow-x-auto relative overflow shadow rounded-lg
         scrollbar-hide bg-white '>
            <table className='w-full text-sm text-gray-600 '>
              <thead className='text-xs text-gray-600 text-left uppercase '>
                <tr>
                  <th className='px-2 py-4 xl-px-6' scope='col'> #</th>
                  <th className='px-2 py-4 ' scope='col'>Blog Title</th>
                  <th className='px-2 py-4 max-sm:hidden' scope='col'>Date</th>
                  <th className='px-2 py-4 max-sm:hidden' scope='col'>Status</th>
                  <th className='px-2 py-4' scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody className=''>
               {blogs.map((blog, index) =>  {
               return  <BlogTableitem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1} />  
               })}
              </tbody>
            </table>
         </div>
    </div>
  )
}

export default Listblog