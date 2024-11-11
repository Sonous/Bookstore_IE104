import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import images from '~/assets/images';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import classNames from 'classnames';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineLock } from 'react-icons/md';

const tags = [
    {
        title: 'Thông tin tài khoản',
        icon: images.userIcon,
        nav: 'account',
    },
    {
        title: 'Đơn hàng của tôi',
        icon: images.orderIcon,
        nav: 'order',
    },
    {
        title: 'Sản phẩm yêu thích',
        icon: images.heartIcon,
        nav: 'favorite',
    },
    {
        title: 'Đổi mật khẩu',
        iconName: MdOutlineLock,
        nav: 'password',
    },
];

export default function AccountLayout({ currentPage, children }) {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="bg-main-bg-color grid grid-cols-8 py-10 px-[100px] gap-5">
                <div className="py-5 bg-white col-span-2 self-start flex flex-col gap-5">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className={classNames('flex gap-3 cursor-pointer px-5', {
                                'border-l-4 border-primary-color': currentPage === tag.title,
                            })}
                            onClick={() => navigate(`/user/${tag.nav}`)}
                        >
                            {tag.icon ? <img src={tag.icon} alt="" /> : <tag.iconName size={25} color="#7a7e7f" />}
                            <span
                                className={classNames({
                                    ' text-primary-color font-semibold': currentPage === tag.title,
                                })}
                            >
                                {tag.title}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="col-span-6">{children}</div>
            </div>
            <Footer />
        </>
    );
}
