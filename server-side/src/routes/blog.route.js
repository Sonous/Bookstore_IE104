import express from 'express';
import * as BlogController from '../controllers/blog.controller.js';

const blogRouter = express.Router();

blogRouter.route('/').get(BlogController.getBlogsByName);
blogRouter.route('/:id').get(BlogController.getBlogById);

export default blogRouter;
