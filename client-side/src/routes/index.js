import { routes } from '~/configs';
import CollectionsPage from '~/pages/CollectionsPage';
import HomePage from '~/pages/HomePage/HomePage';
import AboutUs from '~/pages/InformationPage/AboutUs';
import RefundPolicy from '~/pages/InformationPage/RefundPolicy';
import ShoppingGuide from '~/pages/InformationPage/ShoppingGuide';
import UserPage from '~/pages/UserPage/UserPage';
import Login from '~/pages/Login-Register-ForgotPassword/Login';
import ForgotPassword from '~/pages/Login-Register-ForgotPassword/ForgotPassword';
import Register from '~/pages/Login-Register-ForgotPassword/Register';




const pages = [
    { path: routes.home, Component: HomePage },
    { path: routes.collections, Component: CollectionsPage },

    { path: routes.aboutus, Component: AboutUs},
    { path: routes.refundpolicy, Component: RefundPolicy},
    { path: routes.shoppingguide, Component: ShoppingGuide},
    { path: routes.userpage, Component: UserPage},
    { path: routes.login, Component: Login},
    { path: routes.register, Component: Register},
    { path: routes.forgotpassword, Component: ForgotPassword}
];

export default pages;
