import { routes } from '~/configs';
import CollectionsPage from '~/pages/CollectionsPage/CollectionsPage';
import HomePage from '~/pages/HomePage/HomePage';
import AboutUs from '~/pages/CollectionsPage/AboutUs';
import RefundPolicy from '~/pages/CollectionsPage/RefundPolicy';
import ShoppingGuide from '~/pages/CollectionsPage/ShoppingGuide';
import { Component } from 'react';

const pages = [
    { path: routes.home, Component: HomePage },
    { path: routes.collections, Component: CollectionsPage },

    { path: routes.dieuKhoan, Component: CollectionsPage },
    { path: routes.chinhSachBaoMat, Component: CollectionsPage },
    { path: routes.huongDanDatHang, Component: CollectionsPage },
    { path: routes.lienHe, Component: CollectionsPage },
    { path: routes.chinhSachDoiTra, Component: CollectionsPage },
    { path: routes.phuongThucVanChuyen, Component: CollectionsPage },
    { path: routes.aboutus, Component: AboutUs},
    { path: routes.refundpolicy, Component: RefundPolicy},
    { path: routes.shoppingguide, Component: ShoppingGuide}
];

export default pages;
