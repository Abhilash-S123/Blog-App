import express from 'express'
import addBlog, { deleteBlogById, getAllBlogs, getBlogId, togglePublish } from '../controllers/blogControllers.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

blogRouter.post("/add", upload.single('image'), auth, addBlog)
blogRouter.get('/all', getAllBlogs)
blogRouter.get('/:blogI', getBlogId)
blogRouter.post('/delete', auth, deleteBlogById)
blogRouter.post('/toggle-publish', togglePublish)




export default blogRouter;
