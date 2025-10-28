import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard'
import AddBlog from './pages/Admin/AddBlog'
import Comments from './pages/Admin/Comments'
import Listblog from './pages/Admin/Listblog'
import Login from './components/Admin/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />

        <Route path='/admin' element={ false ? <Layout /> : <Login/>}>
          <Route index element={<Dashboard />} />
          <Route path='AddBlog' element={<AddBlog />} />
          <Route path='Comments' element={<Comments />} />
          <Route path='ListBlog' element={<Listblog />} />
        </Route>
        
      </Routes> 
    </div>
  )
}

export default App       