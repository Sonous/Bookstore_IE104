const routes = {
    home: '/',

    paying: '/paying',

    collections: '/collections/:collection/:genre?',
    results: '/results',

    blog: '/blogs/:option',
    blogDetail: '/blogs/:type/:blog_id',

    aboutus: '/aboutus',
    refundpolicy: '/refundpolicy',
    shoppingguide: '/shoppingguide',
    login: '/login',
    userpage: '/user/account',
    orderpage: '/user/order',
    orderDetail: '/user/order/:orderId',
    favoritepage: '/user/favorite',
    password: '/user/password',
    register: '/register',
    forgotpassword: '/forgotpassword',
    cartpage: '/cart',

    book: '/books/:book_name',
};

export default routes;
