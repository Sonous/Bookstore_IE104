const routes = {
    home: '/',
    collections: '/collections/:collection/:genre?',
    results: '/results',

    blog: '/blogs/:option',
    blogDetail: '/blogs/:type/:blog_id',

    aboutus: '/aboutus',
    refundpolicy: '/refundpolicy',
    shoppingguide: '/shoppingguide',
    login: '/login',
    userpage: '/user',
    orderdetail: '/orderdetail',
    register: '/register',
    forgotpassword: '/forgotpassword',
    cartpage: '/cart',

    book: '/books/:book_name',
};

export default routes;
