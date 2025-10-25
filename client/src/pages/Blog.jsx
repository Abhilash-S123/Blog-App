import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { assets, blog_data, comments_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import Moment from 'moment';

const Blog = () => {

  const { id } = useParams();
  const [ data, setData ] = useState(null);
  const [ comments, setComment ] = useState([]);


  const fetchBlogData = async () => {
     const data = blog_data.find(item => item._id === id );
       setData (data);
       }

  const fetchComments = async () => {
    setComment(comments_data)
  }     
    
       useEffect(() => {
        fetchBlogData();
        fetchComments();
       }, []);

  return data ? (
    <div className='relative'>
        <Navbar />
            {/* <img className='w-full absolute -top-50 -z-1 opacity-20' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDIRkpm44ZMD_YlV3WbjQroEqFrHhYXxiug&s' alt="" /> */}

        <div className='text-center mt-20 text-gray-600  '>
            <p className='text-primary py-4 font-medium '>Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
            <h1 className='text-2xl font-semibold sm:text-5xl max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
            <h2 className='my-5 max-w-lg truncate mx-auto ' >{data.subTitle}</h2>
            <p className='text-primary inline-block rounded-full border border-gray-500 px-4 py-2'>Abhilash S</p>
        </div>
        <div className='mt-16 mx-8 sm:mx-20 lg:mx-32 xl:mx-40 flex flex-col gap-8 mb-20'>
            <img className='rounded-3xl mb-5' src={data.image} alt="" />
            <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{ __html: data.description }}></div>

            {/* comment section */}
             <div>
              <p>Comments ({comments.length})</p>
              
                   <div>
                      {comments.map((item, index) => (
                         <div key={index}>
                              <div>
                                <img src={assets.user_icon} alt="" />
                                <p>{item.name}</p>
                              </div>
                               <p>{item.content}</p>
                               <div>{Moment(item.createdAt).fromNow()}</div>
                         </div>
                      ))}
                   </div>
               
             </div>
        </div>
    </div>
  ) : <div>Loading...</div>;
}

export default Blog