import routes from '~/configs/routes.config';
import BlogPage from '~/pages/BlogPage/BlogPage';
import CollectionsPage from '~/pages/CollectionsPage';
import HomePage from '~/pages/HomePage/HomePage';
import SearchResultPage from '~/pages/SearchResultPage';
import AboutUs from '~/pages/InformationPage/AboutUs';
import RefundPolicy from '~/pages/InformationPage/RefundPolicy';
import ShoppingGuide from '~/pages/InformationPage/ShoppingGuide';
import UserPage from '~/pages/UserPage/UserPage';
import OrderDetailPage from '~/pages/OrderDetailPage/OrderDetailPage';
import Login from '~/pages/Login-Register-ForgotPassword/Login';
import ForgotPassword from '~/pages/Login-Register-ForgotPassword/ForgotPassword';
import Register from '~/pages/Login-Register-ForgotPassword/Register';

import PayingPage from '~/pages/PayingPage/PayingPage';

import CartPage from '~/pages/CartPage/CartPage';
import BookDetail from '~/pages/BookDetail/BookDetail';
import BlogDetail from '~/pages/BlogPage/BlogDetail';
import PrivateRoute from './PrivateRoute';
import OrderPage from '~/pages/UserPage/OrderPage';
import FavoriteBooksPage from '~/pages/UserPage/FavoriteBooksPage';
import Password from '~/pages/UserPage/Password';

const pages = [
    { path: routes.home, Component: HomePage },
    { path: routes.collections, Component: CollectionsPage },
    { path: routes.blog, Component: BlogPage },
    { path: routes.blogDetail, Component: BlogDetail },

    { path: routes.results, Component: SearchResultPage },

    { path: routes.aboutus, Component: AboutUs },
    { path: routes.refundpolicy, Component: RefundPolicy },
    { path: routes.shoppingguide, Component: ShoppingGuide },

    { path: routes.userpage, Component: UserPage, PrivateRoute: PrivateRoute },
    { path: routes.orderpage, Component: OrderPage, PrivateRoute: PrivateRoute },
    { path: routes.favoritepage, Component: FavoriteBooksPage, PrivateRoute: PrivateRoute },
    { path: routes.password, Component: Password, PrivateRoute: PrivateRoute },
    { path: routes.orderDetail, Component: OrderDetailPage, PrivateRoute: PrivateRoute },
    { path: routes.login, Component: Login },
    { path: routes.register, Component: Register },
    { path: routes.forgotpassword, Component: ForgotPassword },
    { path: routes.cartpage, Component: CartPage, PrivateRoute: PrivateRoute },

    { path: routes.paying, Component: PayingPage, PrivateRoute: PrivateRoute },

    { path: routes.book, Component: BookDetail },
];

export default pages;
