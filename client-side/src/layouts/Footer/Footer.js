import classNames from 'classnames/bind';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { routes } from '~/configs';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const footerItems = [
    {
        title: 'Giới thiệu',
        options: [
            { name: 'Về Bookstar', path: routes.aboutus },
        ],
    },
    {
        title: 'Hỗ trợ',
        options: [
            { name: 'Hướng dẫn đặt hàng', path: routes.shoppingguide },
            { name: 'Chính sách đổi trả', path: routes.refundpolicy },
        ],
    },
];

function Footer() {
    return (
        <footer className="px-5">
            <div className={cx('wrapper')}>
                <div className="">
                    <div className="flex items-center gap-3 pb-4">
                        <img src={images.logo} alt="logo" className="rounded-full w-24 h-w-24" />
                        <span className="text-sm text-primary-color font-semibold italic">
                            Cùng Bookstar mở ra cánh cổng tri thức
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-primary-color text-xl" />
                        <span>bookstar@gmail.com</span>
                    </div>
                </div>

                {footerItems.map((item, index) => {
                    return (
                        <div key={index} className={cx('footer-nav')}>
                            <h3>{item.title}</h3>
                            <div className={cx('info', 'link')}>
                                {item.options.map((option, index) => (
                                    <Link key={index} to={option.path}>
                                        <span>{option.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                })}

                <div className={cx('footer-nav')}>
                    <h3>Kết nối mạng xã hội</h3>

                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
