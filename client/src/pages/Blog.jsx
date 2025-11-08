import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { assets, blog_data, comments_data } from '../assets/assets';
import Navbar from '../components/Navbar';
import Moment from 'moment';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Blog = () => {

  const { id } = useParams();

  const {axios} = useAppContext()

  const [ data, setData ] = useState(null);
  const [ comments, setComments ] = useState([]);
  const [ name, setName ] = useState('');
  const [ content, setContent ] = useState('');


  const fetchBlogData = async () => {
    //  const data = blog_data.find(item => item._id === id );
    //    setData (data);
      try {
        const {data} =await axios.get(`/api/blog/${id}`)
        data.success ? setData(data.blog) : toast.error(data.message)
      } catch (error) {
         toast.error(error.message)
      }
  }

  const fetchComments = async () => {
    //setComment(comments_data)
    try {
      const {data} =await axios.post('/api/blog/comments', {blogId: id})
       data.success ? setComments(data.comments) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }     
    
  const addComment = async (e) => {
     e.preventDefault(); 
     try {
       const {data} = await axios.post('/api/blog/add-comments', {blog: id, name,
        content
       })
       if(data.success){
        toast.success(data.message)                
        setName('')
        setContent('')
       } else {
          toast.error(data.message)
       }
     } catch (error) {
         toast.error(error.message)
     }   
  }
       useEffect(() => {
        fetchBlogData();
        fetchComments();
       }, []);  

  return data ? (
    <div className='relative'>
        <Navbar />
            {/* <img className='w-full absolute -top-50 -z-1 opacity-20' src=
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDIRkpm44ZMD_YlV3WbjQroEqFrHhYXxiug&s' alt="" /> */}

        <div className='text-center mt-20 text-gray-600  '>
            <p className='text-primary py-4 font-medium '>Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
            <h1 className='text-2xl font-semibold sm:text-5xl max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
            <h2 className='my-5 max-w-lg truncate mx-auto ' >{data.subTitle}</h2>
            <p className='text-primary inline-block rounded-full border border-gray-500 px-4 py-2'>Abhilash S</p>
        </div>
        <div className='mt-16 mx-8 sm:mx-20 lg:mx-32 xl:mx-40 flex flex-col gap-8 mb-20'>
            <img className='rounded-3xl mb-5' src={data.image} alt="" />
            <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{ __html: data.description }}></div>
</div>
            {/* comment section */}
  
             <div className='max-w-3xl mx-auto mt-20 '>
              <p className='font-semibold m-8'>Comments ({comments.length})</p>

                   <div className='mt-8 flex flex-col gap-8 m-8'>
                      {comments.map((item, index) => (
                         <div key={index} className='border border-gray-300 rounded-3xl p-5 flex flex-col gap-4 '>
                              <div className='flex items-center gap-4 font-medium'>
                                <img className='w-10 h-10 rounded-full' src={assets.user_icon} alt="" />
                                <p >{item.name}</p>
                              </div>
                               <p>{item.content}</p>
                               <div className='text-gray-500'>{Moment(item.createdAt).fromNow()}</div>
                         </div>        
                      ))}
                   </div>
               
             </div>

              {/* Add comment section */}

              <div className=' mt-20 mx-auto w-full max-w-3xl mb-8 '>
                <p className='font-semibold m-8'>Leave a Comment</p>
                <form className=' mt-8 flex flex-col border border-gray-400 p-5 rounded m-8' onSubmit={addComment} >

                  <input className='w-full border border-gray-300 rounded-2xl p-4
                   placeholder:text-gray-500' type="text" value={ name } onChange={ (e) =>  setName(e.target.value)}
                    placeholder='Your Name' required />
                  <textarea className='w-full border border-gray-300 rounded-2xl p-4 mt-3
                   placeholder:text-gray-500' rows="4" value={ content } onChange={ (e) =>  setContent(e.target.value)} 
                   placeholder='Write your comment here...'></textarea>
                  <button className='mt-4 bg-primary text-white px-6 py-2.5 rounded mx-auto
                   hover:bg-blue-800 ml-0.5 cursor-pointer'>Submit </button>

                </form>
              </div>

              <Footer />    
    </div>
  ) : <Loader />;
}

export default Blog