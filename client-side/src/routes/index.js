import routes from '~/configs/routes.config';
import BlogPage from '~/pages/BlogPage/BlogPage';
import BlogPageEvents from '~/pages/BlogPage/BlogPageEvents';
import BlogPageNews from '~/pages/BlogPage/BlogPageNews';
import BlogPageActivities from '~/pages/BlogPage/BlogPageActivities';
import CollectionsPage from '~/pages/CollectionsPage';
import HomePage from '~/pages/HomePage/HomePage';
import AboutUs from '~/pages/InformationPage/AboutUs';
import RefundPolicy from '~/pages/InformationPage/RefundPolicy';
import ShoppingGuide from '~/pages/InformationPage/ShoppingGuide';
import UserPage from '~/pages/UserPage/UserPage';
import OrderDetail from '~/pages/OrderDetailPage/OrderDetailPage';
import Login from '~/pages/Login-Register-ForgotPassword/Login';
import ForgotPassword from '~/pages/Login-Register-ForgotPassword/ForgotPassword';
import Register from '~/pages/Login-Register-ForgotPassword/Register';




const pages = [
    { path: routes.home, Component: HomePage },
    { path: routes.collections, Component: CollectionsPage },
    { path: routes.blog, Component: BlogPage },
    { path: routes.blogEvent, Component: BlogPageEvents },
    { path: routes.blogNews, Component: BlogPageNews },
    { path: routes.blogActivities, Component: BlogPageActivities },

    { path: routes.aboutus, Component: AboutUs},
    { path: routes.refundpolicy, Component: RefundPolicy},
    { path: routes.shoppingguide, Component: ShoppingGuide},
    { path: routes.userpage, Component: UserPage},
    { path: routes.orderdetail, Component: OrderDetail},
    { path: routes.login, Component: Login},
    { path: routes.register, Component: Register},
    { path: routes.forgotpassword, Component: ForgotPassword}
];

export default pages;
