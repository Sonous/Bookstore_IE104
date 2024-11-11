import React, { useContext, useEffect, useState } from 'react';
import OrderStatus from '~/components/Order/OrderStatus';
import OrderItem from '~/components/Order/OrderItem';
import { UserContext } from '~/context/UserContextProvider';
import userApi from '~/apis/userApi';
import orderApi from '~/apis/orderApi';
import images from '~/assets/images';
import AccountLayout from './AccountLayout';
import Loading from '~/components/Loading';

const statusList = ['Tất Cả', 'Chờ thanh toán', 'Đang xử lý', 'Đang giao', 'Hoàn tất', 'Bị hủy', 'Đổi trả'];

export default function OrderPage() {
    const [orders, setOrders] = useState();
    const [orderQuantity, setOrderQuantity] = useState();
    const [currentStatus, setCurrentStatus] = useState('Tất Cả');
    const [isReload, setIsReload] = useState(false);
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            const fetchApi = async () => {
                try {
                    const result = await userApi.getOrdersByUser(user.user_id, currentStatus);

                    const quantityArr = await Promise.all(
                        statusList.map((status) => orderApi.countOrders(user.user_id, status)),
                    );

                    setOrderQuantity(quantityArr);
                    setOrders(result);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchApi();
        }
    }, [currentStatus, isReload]);

    return (
        <>
            {orders && orderQuantity ? (
                <AccountLayout currentPage={'Đơn hàng của tôi'}>
                    <div className="bg-main-bg-color  flex flex-col gap-2">
                        <div className="bg-white rounded-xl sm:p-5 mx-5 ">
                            <span className="text-xl font-semibold">Đơn hàng của tôi</span>
                            <div className="flex justify-between px-10 mt-5">
                                {orderQuantity.map((item, index) => {
                                    return (
                                        <OrderStatus
                                            status={item.status}
                                            orderQuantity={item.quantity}
                                            currentStatus={currentStatus === item.status}
                                            setCurrentStatus={setCurrentStatus}
                                            key={index}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        {orders.length > 0 ? (
                            <>
                                {orders.map((item, index) => {
                                    return <OrderItem key={index} {...item} setIsReload={setIsReload} />;
                                })}
                            </>
                        ) : (
                            <div className=" flex flex-col items-center bg-white rounded-xl sm:p-7 mx-5">
                                <img src={images.nothingIcon} alt="nothing" className="h-32 w-32" />
                                <span>Chưa có sản phẩm nào...</span>
                            </div>
                        )}
                    </div>
                </AccountLayout>
            ) : (
                <div className="h-svh flex justify-center items-center">
                    <Loading />
                </div>
            )}
        </>
    );
}
