import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {

  const {axios, setToken} = useAppContext()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {    
      
     const {data} = await axios.post('/api/admin/login', {email, password})

     if(data.success) {
        setToken(data.token)
        localStorage.setItem('token', data.token)
        axios.defaults.headers.common['Authorization'] = data.token
     } else {
        toast.error(data.message)
     }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-sm'>
          <div className='flex flex-col gap-6'>
            <div className='text-center'>
              <h1 className='text-2xl font-bold'><span className='text-blue-500'>Admin</span> Login</h1>
              <p className='text-gray-600'>Enter your credentials to access the admin <br /> panel</p>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className='mb-4 flex flex-col gap-2'>
                  <label htmlFor="email">Email</label>
                  <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-300 p-2 rounded placeholder:text-gray-500' type="email" id="email" name="email" placeholder='Enter your email' required />
                </div>
                <div className='mb-4 flex flex-col gap-2'>
                  <label htmlFor="password">Password</label>
                  <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-gray-300 p-2 rounded placeholder:text-gray-500' type="password" id="password" name="password" placeholder='Enter your password' required />
                </div>
                <button className='w-full bg-blue-600 text-white py-2 rounded cursor-pointer
                    hover:bg-blue-800 transition-colors' type="submit">Login</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login