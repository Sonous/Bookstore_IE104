import Blog from '../models/blog.model.js';
import BlogType from '../models/blogType.model.js';

export const getBlogsByName = async (req, res) => {
    try {
        const { type, page, limit } = req.query;

        if (type) {
            const offset = (page - 1) * limit;

            const blogsCount = await Blog.count({
                include: {
                    model: BlogType,
                    where: {
                        type_name: type,
                    },
                },
            });

            const blogs = await Blog.findAll({
                attributes: ['blog_id', 'blog_title', 'blog_thumbnail', 'blog_content', 'created_at'],
                include: {
                    model: BlogType,
                    attributes: [],
                    where: {
                        type_name: type,
                    },
                },
                offset,
                limit: parseInt(limit) || 1,
            });

            res.status(200).json({
                data: blogs,
                pagination: {
                    currentPage: page,
                    blogsCount,
                },
            });
        } else {
            const blogs = await Blog.findAll({
                attributes: ['blog_id', 'blog_title', 'blog_thumbnail', 'created_at'],
                include: {
                    model: BlogType,
                },
                limit: parseInt(limit) || 3,
            });

            res.status(200).json(blogs);
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findByPk(id);

        res.status(200).json(blog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
