import { routes } from '~/configs';
import CollectionsPage from '~/pages/CollectionsPage';
import HomePage from '~/pages/HomePage/HomePage';

const pages = [
    { path: routes.home, Component: HomePage },
    { path: routes.collections, Component: CollectionsPage },

    { path: routes.dieuKhoan, Component: CollectionsPage },
    { path: routes.chinhSachBaoMat, Component: CollectionsPage },
    { path: routes.huongDanDatHang, Component: CollectionsPage },
    { path: routes.lienHe, Component: CollectionsPage },
    { path: routes.chinhSachDoiTra, Component: CollectionsPage },
    { path: routes.phuongThucVanChuyen, Component: CollectionsPage },
];

export default pages;
