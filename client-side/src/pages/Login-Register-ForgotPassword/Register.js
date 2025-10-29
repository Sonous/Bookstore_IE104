import React, { useContext } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import authApi from '~/apis/authApi';
import Swal from 'sweetalert2';
// import { UserContext } from '~/context/UserContextProvider';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';
import { MdEmail, MdOutlineMailOutline } from 'react-icons/md';

export default function Register() {
    const navigate = useNavigate();

    // const { login } = useContext(UserContext);

    const onFinish = async (values) => {
        try {
            const userDetails = {
                user_name: values.name,
                user_email: values.email,
                user_password: values.password,
                user_phone: '',
                user_avatar_url: '',
            };
            await authApi.register(userDetails);

            await Swal.fire({
                icon: 'success',
                text: 'Đăng kí thành công',
                timer: 1500,
                timerProgressBar: true,
                showConfirmButton: false,
            });

            // const token = await authApi.login(newUser.user_email, newUser.user_password);

            // localStorage.setItem('token', token);
            // login();
            navigate('/login');
        } catch (error) {
            console.log(error);
            if (error.status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: error.response.data.message,
                    toast: true,
                    timer: 2500,
                    timerProgressBar: true,
                    position: 'top-end',
                    showConfirmButton: false,
                });
            } else {
                console.log(error);
            }
        }
    };
    return (
        <>
            <Header />
            <div className="flex justify-center items-center h-svh">
                <div className="shadow-lg px-10 py-5 w-[400px] rounded-xl shadow-neutral-300">
                    <h1 className="text-center text-2xl pb-5 text-primary-color font-semibold">Đăng kí</h1>
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
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Email không hợp lệ',
                                },
                            ]}
                        >
                            <Input prefix={<MdOutlineMailOutline />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập tên của bạn ',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Nhập tên của bạn" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập password',
                                },
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Mật khẩu" />
                        </Form.Item>

                        <Form.Item
                            name="Confirm password"
                            dependencies={['password']}
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập lại password',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Mật khẩu không trùng với mật khẩu đã nhập!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Nhập lại mật khẩu" />
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" htmlType="submit" style={{ backgroundColor: '#228b22' }}>
                                Đăng kí
                            </Button>

                            <div>
                                <span>Đã có tài khoản? </span>
                                <span className="cursor-pointer hover:text-blue-500" onClick={() => navigate('/login')}>
                                    Đăng nhập
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
