import React, { useContext, useEffect, useState } from 'react';
import styles from './PayingPage.module.css';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';
import { Button, Checkbox, Form, Input, Radio, Select, Space } from 'antd';
import { UserContext } from '~/context/UserContextProvider';
import userApi from '~/apis/userApi';
import axios from 'axios';
import payingApi from '~/apis/payingApi';
import { imageUrl } from '~/configs/axios.config';
import { convertPriceToString } from '~/utils/functions';
import orderApi from '~/apis/orderApi';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import cartApi from '~/apis/cartApi';

const PayingPage = () => {
    const [addressInfo, setAddressInfo] = useState();
    const [selectedAddress, setSelectedAddress] = useState(0);
    const [selectedPayingMethod, setSelectedPayingMethod] = useState(0);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [disableSelectList, setDisalbleSelectList] = useState(['districts', 'wards']);
    const [payingMethodList, setPayingMethodList] = useState([]);
    const [showNote, setShowNote] = useState(false);
    const [note, setNote] = useState('');
    const [isReload, setIsReload] = useState(false);
    const [form] = Form.useForm();
    const { user, setIsReloadCart } = useContext(UserContext);
    const { TextArea } = Input;
    const orderItems = JSON.parse(localStorage.getItem('order'));
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async () => {
            const address = await userApi.getAddressOfUser(user.user_id);
            const payingMethods = await payingApi.getMethods();

            setPayingMethodList(payingMethods);
            if (address) {
                setAddressInfo(() => {
                    delete address.address.address_id;

                    return address;
                });
            }
        };

        if (user) fetchApi();
    }, [user, isReload]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await axios.get('https://vapi.vnappmob.com/api/province/');

                setProvinces(() => {
                    return result.data.results.map((province) => ({
                        value: province.province_id,
                        label: province.province_name,
                    }));
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchApi();
    }, []);

    const getDistricts = async (id) => {
        try {
            const result = await axios.get(`https://vapi.vnappmob.com/api/province/district/${id}`);

            setDistricts(() => {
                return result.data.results.map((district) => ({
                    value: district.district_id,
                    label: district.district_name,
                }));
            });
        } catch (error) {
            console.error(error);
        }
    };

    const getWards = async (id) => {
        try {
            const result = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${id}`);

            setWards(() => {
                return result.data.results.map((ward) => ({
                    value: ward.ward_id,
                    label: ward.ward_name,
                }));
            });
        } catch (error) {
            console.error(error);
        }
    };

    const onChange = (e) => {
        if (e.target.value === 0) {
            setDisalbleSelectList(['districts', 'wards']);
        }

        setSelectedAddress(e.target.value);
    };

    const getLabelByValue = (list, value) => {
        const result = list.find((item) => item.value === value);

        return result.label;
    };

    const submitOrder = async (address) => {
        try {
            const orderInfo = {
                ...orderItems,
                pay_method_name: payingMethodList[selectedPayingMethod].pay_method_name,
                note: note,
                order_address_info: selectedAddress === 0 ? addressInfo : address,
                order_status: 'Đang xác nhận',
                user_id: user.user_id,
            };

            await orderApi.saveOrder(orderInfo);

            await Promise.all(
                orderInfo.order_books.map((book) => cartApi.updateQuantityItem(user.user_id, book.book_id, 0)),
            );

            setIsReloadCart(true);

            Swal.fire({
                title: 'Đặt hàng thành công!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
                didClose: () => {
                    localStorage.removeItem('order');
                    navigate('/user/order');
                },
            });
        } catch (error) {
            Swal.fire({
                title: 'Đặt hàng không thành công, xảy ra lỗi!',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const handleSubmitOrder = async () => {
        if (selectedAddress === 1 || !addressInfo) {
            form.submit();
            return;
        }

        await submitOrder();
    };

    const onFinish = async (values) => {
        if (!addressInfo) {
            await userApi.createAddress(
                {
                    user_name: values.username,
                    user_phone: values.phonenumber,
                    address: {
                        address_house_number: values.address,
                        address_ward: getLabelByValue(wards, values.ward),
                        address_district: getLabelByValue(districts, values.district),
                        address_province: getLabelByValue(provinces, values.province),
                    },
                },
                user.user_id,
            );
            setIsReload((prev) => !prev);
            return;
        }
        await submitOrder({
            user_name: values.username,
            user_phone: values.phonenumber,
            address: {
                address_house_number: values.address,
                address_ward: getLabelByValue(wards, values.ward),
                address_district: getLabelByValue(districts, values.district),
                address_province: getLabelByValue(provinces, values.province),
            },
        });
    };

    console.log(addressInfo);

    return (
        <div className={styles.container}>
            {/* Header */}
            <Header />

            {/* Main content */}
            <div className={styles.formSection}>
                {/* Address Information */}
                <div className={styles.addressInfoContainer}>
                    <div className={styles.sectionTitle}>Địa chỉ giao hàng</div>

                    {addressInfo && (
                        <Radio.Group value={selectedAddress} onChange={onChange}>
                            <Space direction="vertical">
                                <Radio value={0}>
                                    {addressInfo.user_name} | {Object.values(addressInfo.address).join(', ')} |{' '}
                                    {addressInfo.user_phone}
                                </Radio>
                                <Radio value={1}>Giao đến địa chỉ khác</Radio>
                            </Space>
                        </Radio.Group>
                    )}

                    {(selectedAddress === 1 || !addressInfo) && (
                        <Form
                            form={form}
                            layout="vertical"
                            clearOnDestroy={() => {
                                return true;
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="Họ và tên người nhận:"
                                name={'username'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập trường này',
                                    },
                                ]}
                            >
                                <Input placeholder="Nhập họ và tên người nhận" required />
                            </Form.Item>
                            <Form.Item
                                label="Số điện thoại:"
                                name={'phonenumber'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập trường này',
                                    },
                                ]}
                            >
                                <Input placeholder="0938xxxxxx (10 kí tự số)" required />
                            </Form.Item>
                            <Form.Item
                                label="Tỉnh/Thành Phố:"
                                name={'province'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn tỉnh/thành phố',
                                    },
                                ]}
                            >
                                <Select
                                    options={provinces}
                                    placeholder="Chọn tỉnh/thành phố"
                                    onChange={async (id) => {
                                        await getDistricts(id);
                                        setDisalbleSelectList(['wards']);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Quận/Huyện:"
                                name={'district'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn quận/huyện',
                                    },
                                ]}
                            >
                                <Select
                                    options={districts}
                                    placeholder="Chọn quận/huyện"
                                    disabled={disableSelectList.includes('districts')}
                                    onChange={async (id) => {
                                        await getWards(id);
                                        setDisalbleSelectList([]);
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Phường/Xã:"
                                name={'ward'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn phường/xã',
                                    },
                                ]}
                            >
                                <Select
                                    options={wards}
                                    placeholder="Chọn phường/xã"
                                    disabled={disableSelectList.includes('wards')}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Địa chỉ nhận hàng:"
                                name={'address'}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập địa chỉ nhận hàng',
                                    },
                                ]}
                            >
                                <Input placeholder="Nhập địa chỉ nhận hàng" />
                            </Form.Item>
                            {!addressInfo && (
                                <Button htmlType="submit" type="primary">
                                    Lưu địa chỉ
                                </Button>
                            )}
                        </Form>
                    )}
                </div>

                {/* Payment Method */}
                <div className={styles.paymentContainer}>
                    <div className={styles.sectionTitle}>Phương thức thanh toán</div>
                    <Radio.Group value={selectedPayingMethod} onChange={(e) => setSelectedPayingMethod(e.target.value)}>
                        <Space direction="vertical">
                            {payingMethodList.map((method, index) => (
                                <Radio key={index} value={index}>
                                    {method.pay_method_name}
                                </Radio>
                            ))}
                        </Space>
                    </Radio.Group>
                </div>

                <div className={styles.paymentContainer}>
                    <div className={styles.sectionTitle}>Thông tin khác</div>
                    <Checkbox onChange={() => setShowNote(!showNote)}>Ghi chú</Checkbox>
                    {showNote && (
                        <TextArea
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Nhập ghi chú"
                            className="mt-3"
                        />
                    )}
                </div>

                {/* Order Summary */}
                <div className={styles.orderSummary}>
                    <div className={styles.sectionTitle}>Tóm tắt đơn hàng</div>
                    <div className="flex flex-col gap-5 p-5">
                        {orderItems.order_books.map((book, index) => (
                            <div key={index} className="flex gap-4 ">
                                <div className="basis-[13%]">
                                    <img src={`${imageUrl}/${book.bookimages[0].book_image_url}`} alt="" />
                                </div>
                                <span className="mt-4 basis-[50%]">{book.book_name}</span>
                                <div className="mt-4 basis-[12%] flex flex-col">
                                    <span className="text-sm">{convertPriceToString(book.book_end_cost)}</span>
                                    <span className="text-sm line-through text-gray-500">
                                        {convertPriceToString(book.book_cost)}
                                    </span>
                                </div>
                                <span className="mt-4 basis-[10%]">Số lượng: {book.cart.quantity}</span>
                                <span className="mt-4 basis-[10%] text-yellow-500 font-bold">
                                    {convertPriceToString(book.cart.quantity * book.book_end_cost)}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-end flex-col mt-5 pt-5 border-t-[1px] border-[#b6b6b6] px-10">
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-14">
                                <span className="flex-1">Thành tiền: </span>
                                <span>{convertPriceToString(orderItems.books_total_prices)}</span>
                            </div>
                            <div className="flex gap-14">
                                <span className="flex-1">Phí vận chuyển ({orderItems.transport_name}): </span>
                                <span>{convertPriceToString(orderItems.transport_cost)}</span>
                            </div>
                            <div className="flex gap-10">
                                <span className="flex-1">Tổng Số Tiền (gồm VAT): </span>
                                <span className="font-semibold text-yellow-500 text-xl">
                                    {convertPriceToString(orderItems.order_total_cost)}
                                </span>
                            </div>
                            <div
                                className=" py-2 bg-primary-color font-semibold text-white text-center rounded-lg hover:opacity-90 cursor-pointer tracking-wide"
                                onClick={handleSubmitOrder}
                            >
                                Xác nhận đặt hàng
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default PayingPage;
