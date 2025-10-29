import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableitem from '../../components/Admin/BlogTableitem';

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState({
      blogs:0,
      comments:0,
      drafts:0,
      recentBlogs:[]
  });

  const fetchDashboardData = async () => {
      setDashboardData(dashboard_data)
  }

  useEffect(() => {
      fetchDashboardData();
  }, []);

  return (
    <div >
     <div className=' flex-1 pad-4 md:p-10 bg-lue50/50'>
      <div className='flex flex-wrap gap-4 '>

        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow
         cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p>{dashboardData.blogs}</p>
            <p className='text-gray-600'>Blogs</p>
          </div>   
        </div>
        <div className='flex items-center gap-4  bg-white p-4 min-w-58 rounded shadow
         cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_2} alt="" />
          <div>
            <p>{dashboardData.comments}</p>
            <p className='text-gray-600'>Comments</p>
          </div>   
        </div>
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow
         cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p>{dashboardData.drafts}</p>
            <p className='text-gray-500'>Drafts</p>
          </div>   
        </div>
        
      </div>
         <div className='flex items-center gap-3 mt-10 mb-5'>
            <img src={assets.dashboard_icon_4} alt="" />
            <p>Latest Blogs</p>
         </div>
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
               {dashboardData.recentBlogs.map((blog, index) =>  {
               return  <BlogTableitem key={blog._id} blog={blog} fetchBlogs={fetchDashboardData} index={index + 1} />  
               })}
              </tbody>
            </table>
         </div>
     </div>
    </div>
  )
}

export default Dashboard