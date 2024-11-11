import React, { useContext } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import authApi from '~/apis/authApi';
import Swal from 'sweetalert2';
import { UserContext } from '~/context/UserContextProvider';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';

export default function Register() {
    const navigate = useNavigate();

    const { login } = useContext(UserContext);

    // const onFinish = async (values) => {
    //     try {
    //         const userDetails = {
    //             user_name: 'new user',
    //             user_email: values.email,
    //             user_password: values.password,
    //             user_phone: '',
    //             user_avatar_url: '',
    //         };
    //         const newUser = await authApi.register(userDetails);

    //         const token = await authApi.login(newUser.user_email, newUser.user_password);

    //         localStorage.setItem('token', token);
    //         login();
    //         navigate('/');
    //     } catch (error) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: error.message,
    //             toast: true,
    //             timer: 2500,
    //             timerProgressBar: true,
    //             position: 'top-end',
    //             showConfirmButton: false,
    //         });
    //     }
    // };
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
                        // onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập email',
                                },
                                {
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Email không hợp lệ',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Email" />
                            <div className="flex justify-end">
                                <span className="hover:text-blue-600 cursor-pointer">Gửi mã OTP</span>
                            </div>
                        </Form.Item>
                        <Form.Item
                            name="OTP"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập OTP',
                                },
                            ]}
                        >
                            <Input placeholder="Nhập OTP gồm 6 kí tự" disabled />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập trường password!',
                                },
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Mật khẩu" disabled />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                block
                                type="primary"
                                htmlType="submit"
                                style={{ backgroundColor: '#228b22' }}
                                disabled
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
