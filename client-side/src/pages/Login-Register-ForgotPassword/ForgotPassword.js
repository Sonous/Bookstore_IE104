import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import authApi from '~/apis/authApi';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '~/context/UserContextProvider';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';
import userApi from '~/apis/userApi';

export default function Register() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [disabledInput, setDisabledInput] = useState(['otp', 'password']);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [userId, setUserId] = useState();

    const onFinish = async (values) => {
        try {
            await userApi.changePasswardNoToken(userId, {
                user_password: values.password,
            });

            await Swal.fire({
                icon: 'success',
                text: 'Thay đổi thành công',
                timer: 1500,
                showConfirmButton: false,
            });

            navigate('/login');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: error.message,
                toast: true,
                timer: 2500,
                timerProgressBar: true,
                position: 'top-end',
                showConfirmButton: false,
            });
        }
    };

    return (
        <>
            <Header />
            <div className="flex justify-center items-center h-svh">
                <div className="shadow-lg px-10 py-5 w-[400px] rounded-xl shadow-neutral-300">
                    <h1 className="text-center text-2xl pb-5 text-primary-color font-semibold">Quên mật khẩu</h1>
                    <Form
                        name="login"
                        style={{
                            maxWidth: 360,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập email',
                                },
                                {
                                    validator: async (_, value) => {
                                        if (!value) return Promise.resolve();
                                        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                                        if (regex.test(value)) {
                                            const checkEmail = await userApi.checkEmail(value);

                                            if (checkEmail) {
                                                setIsValidEmail(true);
                                                setUserId(checkEmail);
                                                return Promise.resolve();
                                            } else return Promise.reject('Email không tồn tại');
                                        }
                                        setIsValidEmail(false);

                                        return Promise.reject('Email không hợp lệ');
                                    },
                                },
                            ]}
                        >
                            <div>
                                <Input prefix={<UserOutlined />} placeholder="Email" />
                                <div className="flex justify-end">
                                    <span
                                        className="hover:text-blue-600 cursor-pointer"
                                        onClick={() => {
                                            if (!isValidEmail) {
                                                Swal.fire({
                                                    toast: true,
                                                    icon: 'error',
                                                    text: 'Vui lòng nhập đúng trường email',
                                                    timer: 1500,
                                                    position: 'top-right',
                                                    showConfirmButton: false,
                                                    timerProgressBar: true,
                                                });
                                                return;
                                            }

                                            const otp = uuidv4().slice(0, 6);
                                            console.log(otp);
                                            setDisabledInput(['password']);
                                            setOtp(otp);
                                        }}
                                    >
                                        Gửi mã OTP
                                    </span>
                                </div>
                            </div>
                        </Form.Item>

                        <Form.Item
                            name="OTP"
                            dependencies={['email']}
                            rules={[
                                {
                                    validator: (_, value) => {
                                        if (value === otp) setDisabledInput([]);
                                        return value === otp ? Promise.resolve() : Promise.reject('Nhập sai OTP');
                                    },
                                },
                            ]}
                        >
                            <Input placeholder="Nhập OTP gồm 6 kí tự" disabled={disabledInput.includes('otp')} />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            dependencies={['OTP']}
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập trường password!',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Mật khẩu"
                                disabled={disabledInput.includes('password')}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                block
                                type="primary"
                                htmlType="submit"
                                style={{ backgroundColor: '#228b22' }}
                                disabled={disabledInput.length > 0}
                            >
                                Xác nhận
                            </Button>
                            <div className="flex justify-center">
                                <span className="cursor-pointer hover:text-blue-500" onClick={() => navigate('/login')}>
                                    Trở lại
                                </span>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    );
}
