import React, { useState } from 'react'
import { comments_data } from '../../assets/assets';
import CommentTableitem from './CommentTableitem';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Comments = () => {

  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('Not Approved');

  const {axios} = useAppContext()

  const fetchComments = async () => {
    // setComments(comments_data);
    try {
      const {data} = await axios.get('/api/admin/comments')
      data.success ? setComments(data.comments) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  React.useEffect(() => {
      fetchComments();
  }, []);

  return (
    <div className='flex-1 pad-4 md:p-10 bg-blue50/50'>
      <div className='flex items-center justify-between max-w-3xl'>
        <h1 className='text-lg font-semibold'>Comments</h1>
        <div className='flex items-center gap-6 mr-4'>
          <button onClick={() => setFilter('Approved')} className=
          {`border rounded-full cursor-pointer 
          px-4 py-1 text-xs shadow-custom-sm ${filter === 'Approved' ? 'text-primary' : 'text-gray-700'}`}>Approved</button>
          <button onClick={() => setFilter('Not Approved')} className=
          {`border rounded-full cursor-pointer px-4 py-1
           text-xs shadow-custom-sm ${filter === 'Not Approved' ? 'text-primary' : 'text-gray-700'}`}>Not Approved</button>
        </div>
      </div>
        
      <div className='overflow-x-auto max-w-3xl relative mt-4 shadow bg-white rounded-lg '>
         <table className='w-full text-sm text-gray-500' >
            <thead className='bg-white shadow text-left uppercase text-gray-700 border-b border-gray-300 '>
                <tr className='border-b border-gray-300 '>
                    <th scope='col' className='px-6 py-3'> Blog title & Comment</th>
                    <th scope='col' className='max-sm-hidden px-6 py-3'> Date</th>
                    <th scope='col' className='px-6 py-3'> Action</th>
                </tr>
            </thead>
            <tbody className='divide-y divide-gray-300 '>
                 {
                  comments.filter((comment) => {
                    if(filter === 'Approved') return comment.isApproved === true;
                       return comment.isApproved === false;
                  }).map((comment, index) => 
                        <CommentTableitem key={comment._id} comment={comment} fetchComments={fetchComments} index={index + 1} />
                  )
                 }
            </tbody>
         </table>
      </div>
    </div>
  )                              
}

export default Comments