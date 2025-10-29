import React, { useEffect } from 'react'
import { blog_data } from '../../assets/assets';

const Listblog = () => {

    const [blogs, setBlogs] = React.useState([]);

    const fetchBlogs = async () => {  
      setBlogs(blog_data);
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

  return (
    <div>
        
    </div>
  )
}

export default Listblog