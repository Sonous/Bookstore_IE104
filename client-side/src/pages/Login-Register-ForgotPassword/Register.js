import React, { useContext } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import authApi from '~/apis/authApi';
import Swal from 'sweetalert2';
import { UserContext } from '~/context/UserContextProvider';

export default function Register() {
    const navigate = useNavigate();

    const { login } = useContext(UserContext);

    const onFinish = async (values) => {
        try {
            const userDetails = {
                user_name: 'new user',
                user_email: values.email,
                user_password: values.password,
                user_phone: '',
                user_avatar_url: '',
            };
            const newUser = await authApi.register(userDetails);

            const token = await authApi.login(newUser.user_email, newUser.user_password);

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
        <div className="flex justify-center items-center h-svh">
            <div className="shadow-lg px-10 py-5 w-[400px] rounded-xl shadow-neutral-300">
                <h1 className="text-center text-2xl pb-5 text-primary-color font-semibold">Register</h1>
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
                                message: 'Please input your Username!',
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
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
                    </Form.Item>

                    <Form.Item
                        name="Confirm password"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit" style={{ backgroundColor: '#228b22' }}>
                            Register
                        </Button>
                        or{' '}
                        <span className="cursor-pointer hover:text-blue-500" onClick={() => navigate('/login')}>
                            Log in now!
                        </span>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
