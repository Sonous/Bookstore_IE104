import React, { Fragment, useContext, useEffect } from 'react';
import { useState } from 'react';
import './OrderDetailPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faReceipt, faBox, faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '~/context/UserContextProvider';
import orderApi from '~/apis/orderApi';
import Loading from '~/components/Loading';
import AccountLayout from '../UserPage/AccountLayout';
import StatusTag from '~/components/Order/StatusTag';
import { convertPriceToString, formatDateHour } from '~/utils/functions';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import userApi from '~/apis/userApi';
import { imageUrl } from '~/configs/axios.config';

// Hàm lấy màu theo trạng thái
const getStatusColor = (status) => {
    switch (status) {
        case 'Đơn hàng mới':
        case 'Đang xác nhận':
            return 'order-theme-blue';
        case 'Đang xử lý':
        case 'Đang vận chuyển':
            return 'order-theme-yellow';
        case 'Hoàn tất':
            return 'order-theme-green';
        case 'Bị hủy':
            return 'order-theme-orange';
        default:
            return 'order-theme-gray';
    }
};

const process = [
    { status: 'Đang xác nhận', icon: faReceipt },
    { status: 'Đang xử lý', icon: faBox },
    { status: 'Đang giao', icon: faTruckFast },
];

const statusList = ['Đang xác nhận', 'Đang xử lý', 'Đang giao', 'Hoàn tất', 'Bị hủy', 'Đổi trả'];

const OrderDetailPage = () => {
    const { orderId } = useParams();

    const { user } = useContext(UserContext);
    const [order, setOrder] = useState(null);
    const [isReLoad, setIsReload] = useState(false);
    const [indexStatus, setIndexStatus] = useState(0);

    const navigate = useNavigate();

    console.log(indexStatus);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const order = await orderApi.getOrderById(orderId);

                setOrder(order);
                setIndexStatus(() => statusList.indexOf(order.order_status));
            } catch (error) {
                console.error('Error fetching orders or addresses:', error);
            }
        };

        fetchOrder();
    }, [user, isReLoad]);

    const handleCandel = async () => {
        try {
            const result = await Swal.fire({
                title: 'Bạn có muốn hủy đơn hàng này không?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            });

            if (result.isConfirmed) {
                await orderApi.updateOrder(order.order_id, 'Bị hủy');

                await Swal.fire({
                    title: 'Hủy đơn thành công!',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                });

                setIsReload((prev) => !prev);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handlePurchaseAgain = async () => {
        try {
            await Promise.all(
                order.order_books.map((book) => userApi.addBookToCart(order.user_id, book.book_id, book.cart.quantity)),
            );

            navigate('/cart');
        } catch (error) {
            console.error(error);
        }
    };

    console.log(order);

    return (
        <>
            {order ? (
                <AccountLayout currentPage={'Đơn hàng của tôi'}>
                    <main className="order-detail-container ">
                        <div className="flex flex-col gap-3 ">
                            <div className="order-only bg-white">
                                {/* Mã đơn hàng và ngày mua */}
                                <div className="order-header">
                                    <div className="order-header-left gap-5">
                                        <h1 className="order-id">Mã đơn hàng #{order.order_id}</h1>
                                        <StatusTag status={order.order_status} />
                                    </div>

                                    <p className="order-date">Ngày mua: {formatDateHour(order.created_at)}</p>
                                </div>

                                {/* Thanh tiến trình tổng đơn hàng */}
                                <div className={`progress-bar ${getStatusColor(order.order_status)}`}>
                                    {process.map((step, index) => {
                                        let currentProcess = order.order_status;
                                        if (indexStatus < 3 && index > indexStatus) currentProcess = '';

                                        return (
                                            <Fragment key={index}>
                                                <div className={`step-item ${getStatusColor(currentProcess)}`}>
                                                    <FontAwesomeIcon className="status-icon" icon={step.icon} />
                                                    <p>{step.status}</p>
                                                </div>
                                                <p className="pt-[20px] tracking-wider !text-xl">.......</p>
                                            </Fragment>
                                        );
                                    })}
                                    <div
                                        className={`step-item ${getStatusColor(
                                            ['Hoàn tất', 'Bị hủy'].includes(order.order_status)
                                                ? order.order_status
                                                : '',
                                        )}`}
                                    >
                                        <FontAwesomeIcon
                                            className="status-icon"
                                            icon={order.order_status !== 'Bị hủy' ? faCheck : faCircleXmark}
                                        />
                                        <p>{order.order_status !== 'Bị hủy' ? 'Hoàn tất' : 'Bị hủy'}</p>
                                    </div>
                                </div>

                                {/* Thông tin người nhận, thanh toán, và tổng tiền */}
                                <div className="info-section">
                                    <div className="info-box">
                                        <h2>Thông tin người nhận</h2>
                                        <p>{order.order_address_info.user_name}</p>
                                        <p>Tel: {order.order_address_info.user_phone}</p>
                                        <p>
                                            {order.order_address_info.address.address_house_number},{' '}
                                            {order.order_address_info.address.address_ward},{' '}
                                            {order.order_address_info.address.address_district},{' '}
                                            {order.order_address_info.address.address_province}
                                        </p>
                                    </div>
                                    <div className="info-box">
                                        <h2>Phương thức thanh toán</h2>
                                        <p>{order.pay_method_name}</p>
                                    </div>
                                    <div className="info-box">
                                        <h2>Tổng tiền</h2>
                                        <div className="flex gap-3">
                                            <p className="flex-1">Tạm tính: </p>
                                            <p>{convertPriceToString(order.books_total_prices)}</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <p className="flex-1">Phí vận chuyển: </p>
                                            <p>{convertPriceToString(order.transport_cost)}</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <p className="flex-1">Tổng số tiền (gồm VAT): </p>
                                            <p>{convertPriceToString(order.order_total_cost)}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Các nút tùy thuộc vào trạng thái đơn hàng */}
                                <div className="flex justify-end">
                                    {order.order_status !== 'Đang giao' && (
                                        <div className="grid grid-cols-2 gap-3">
                                            {order.order_status === 'Hoàn tất' ? (
                                                <button className="w-[180px] border-2 border-blue-400 border-solid rounded-md text-blue-400 font-bold py-2 hover:opacity-70">
                                                    Đánh giá đơn hàng
                                                </button>
                                            ) : (
                                                <button
                                                    className={classNames(
                                                        'w-[180px] border-2  border-solid rounded-md font-bold py-2 hover:opacity-70',
                                                        {
                                                            'border-gray-400 text-gray-400 hover:cursor-not-allowed': [
                                                                'Bị hủy',
                                                                'Đổi trả',
                                                            ].includes(order.order_status),
                                                            'col-span-2': !['Bị hủy', 'Đổi trả'].includes(
                                                                order.order_status,
                                                            ),
                                                        },
                                                    )}
                                                    disabled={['Bị hủy', 'Đổi trả'].includes(order.order_status)}
                                                    onClick={handleCandel}
                                                >
                                                    Hủy đơn
                                                </button>
                                            )}
                                            {['Hoàn tất', 'Bị hủy', 'Đổi trả'].includes(order.order_status) && (
                                                <button
                                                    className="bg-primary-color text-white font-bold rounded-md hover:opacity-70"
                                                    onClick={handlePurchaseAgain}
                                                >
                                                    Mua lại
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="shipping-method-box bg-white flex flex-col gap-3">
                                    <h2>Phương thức vận chuyển</h2>
                                    <p>{order.transport_name}</p>
                                </div>
                                <div className="shipping-method-box bg-white flex flex-col gap-3">
                                    <h2>Ghi chú</h2>
                                    <p>{order.note ? order.note : '(Không có)'}</p>
                                </div>
                            </div>

                            {/* Kiện hàng */}
                            <div className="package-only bg-white">
                                <div className="package">
                                    <div className="package-header">
                                        <h2>
                                            Kiện hàng #{1} | Mã đơn hàng: {order.order_id}
                                        </h2>
                                        <div className="package-header-right gap-5">
                                            <a href="" className="shipping-lookup">
                                                Tra cứu vận chuyển
                                            </a>
                                            <StatusTag status={order.order_status} />
                                        </div>
                                    </div>

                                    {/* Sản phẩm trong kiện hàng */}
                                    <div className="product-list">
                                        <div className="product-header">
                                            <span className="product-cell"></span>
                                            <span className="product-cell product-name-label">Tên sản phẩm</span>
                                            <span className="product-cell">Đơn giá</span>
                                            <span className="product-cell">Số lượng</span>
                                            <span className="product-cell">Thành tiền</span>
                                        </div>
                                        {order.order_books.map((product, index) => (
                                            <div key={index}>
                                                <div className="product-row">
                                                    <img
                                                        className="product-image"
                                                        src={`${imageUrl}/${product.bookimages[0].book_image_url}`}
                                                        alt={product.book_name}
                                                    />
                                                    <span className="product-cell product-name">
                                                        {product.book_name}
                                                    </span>
                                                    <div className="product-cell">
                                                        <p>{convertPriceToString(product.book_end_cost)}</p>
                                                        <p className="line-through text-[#7b7b7b] text-sm">
                                                            {convertPriceToString(product.book_cost)}
                                                        </p>
                                                    </div>
                                                    <span className="product-cell">{product.cart.quantity}</span>
                                                    <span className="product-cell">
                                                        {convertPriceToString(
                                                            product.book_end_cost * product.cart.quantity,
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="total-product-row">
                                            <span className="total-label">Tổng tiền: </span>
                                            <span className="total-amount">
                                                {convertPriceToString(order.order_total_cost)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </AccountLayout>
            ) : (
                <div className="h-svh flex justify-center items-center">
                    <Loading />
                </div>
            )}
        </>
    );
};

export default OrderDetailPage;
