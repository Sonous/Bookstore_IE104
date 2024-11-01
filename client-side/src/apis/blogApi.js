const { request } = require('~/configs');

const blogApi = {
    async getBlogsByName(type, page, limit) {
        try {
            const blogs = await request.get('/blog', {
                params: {
                    type,
                    page,
                    limit,
                },
            });

            return blogs;
        } catch (error) {
            console.log(error);
        }
    },

    async getBlogById(id) {
        try {
            const blog = await request.get(`/blog/${id}`);

            return blog;
        } catch (error) {
            console.log(error);
        }
    },
};

export default blogApi;
