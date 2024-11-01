const routes = {
    home: '/',
    collections: '/collections/:collection/:genre?',
    results: '/results',

    blog: '/blog',
    blogEvent: '/blog/events/:id',
    blogNews: '/blog/news/:id',
    blogActivities: '/blog/activities/:id',

    aboutus: '/aboutus',
    refundpolicy: '/refundpolicy',
    shoppingguide: '/shoppingguide',
    login: '/login',
    userpage: '/user',
    orderdetail: '/orderdetail',
    register: '/register',
    forgotpassword: '/forgotpassword',
    cartpage: '/cartpage',

    book: '/books/:book_name',
};

export default routes;
