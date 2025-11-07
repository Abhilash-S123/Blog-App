import express from 'express'
import addBlog, { addComment, deleteBlogById, getAllBlogs, getBlogComment, getBlogId, togglePublish } from '../controllers/blogControllers.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

blogRouter.post("/add", upload.single('image'), auth, addBlog)
blogRouter.get('/all', getAllBlogs)
blogRouter.get('/:blogId', getBlogId)
blogRouter.post('/delete', auth, deleteBlogById)
blogRouter.post('/toggle-publish', togglePublish)
blogRouter.post('/add-comments', addComment)
blogRouter.post('/comments', getBlogComment)




export default blogRouter;