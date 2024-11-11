import React, { useContext } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import authApi from '~/apis/authApi';
import Swal from 'sweetalert2';
import { UserContext } from '~/context/UserContextProvider';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';

export default function Login() {
    const navigate = useNavigate();

    const { login } = useContext(UserContext);

    const onFinish = async (values) => {
        try {
            const token = await authApi.login(values.username, values.password);

            localStorage.setItem('token', token);
            login();
            navigate('/');
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
            <div className="flex justify-center items-center h-svh ">
                <div className="shadow-lg shadow-neutral-300 px-10 py-5 w-[400px] rounded-xl ">
                    <h1 className="text-center text-2xl pb-5 text-primary-color font-semibold">Đăng nhập</h1>
                    <Form
                        name="login"
                        style={{
                            maxWidth: 360,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập trường username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Email" />
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
                            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Mật khẩu" />
                        </Form.Item>
                        <Form.Item>
                            <span
                                className="cursor-pointer hover:text-blue-500"
                                onClick={() => navigate('/forgotpassword')}
                            >
                                Quên mật khẩu?
                            </span>
                            <Button
                                block
                                type="primary"
                                htmlType="submit"
                                style={{ backgroundColor: '#228b22', marginTop: '5px' }}
                            >
                                Đăng nhập
                            </Button>
                            <div>
                                <span>Chưa có mật khẩu? </span>
                                <span
                                    className="cursor-pointer hover:text-blue-500"
                                    onClick={() => navigate('/register')}
                                >
                                    Đăng kí ngay!
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
