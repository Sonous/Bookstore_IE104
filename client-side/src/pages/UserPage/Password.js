import React, { useContext } from 'react';
import AccountLayout from './AccountLayout';
import { Form, Input } from 'antd';
import userApi from '~/apis/userApi';
import { UserContext } from '~/context/UserContextProvider';
import Swal from 'sweetalert2';

export default function Password() {
    const [form] = Form.useForm();
    const { user } = useContext(UserContext);

    const handleSubmit = async (values) => {
        try {
            const isTruePassword = await userApi.checkPassword(user.user_id, values.currentPassword);

            if (!isTruePassword) {
                Swal.fire({
                    icon: 'error',
                    text: 'Nhập sai mật khẩu hiện tại',
                    timer: 1500,
                    showConfirmButton: false,
                });

                return;
            }

            await userApi.updateUser(user.user_id, {
                user_password: values.newPassword,
            });

            await Swal.fire({
                icon: 'success',
                text: 'Thay đổi thành công',
                timer: 1500,
                showConfirmButton: false,
            });

            form.resetFields();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AccountLayout currentPage={'Đổi mật khẩu'}>
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <span className="font-medium text-xl">Đổi mật khẩu</span>

                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label="Mật khẩu hiện tại"
                        name="currentPassword"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.Password placeholder="Nhập mật khẩu hiện tại" />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu mới"
                        name="newPassword"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.Password placeholder="Nhập mật khẩu mới" />
                    </Form.Item>
                    <Form.Item
                        label="Nhập lại mật khẩu mới"
                        name="confirmPassword"
                        dependencies={['newPassword']}
                        rules={[
                            {
                                required: true,
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('newPassword') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Nhập lại mật khẩu mới" />
                    </Form.Item>
                </Form>
                <div className="flex justify-center">
                    <div
                        className="bg-primary-color py-3 px-10 text-white rounded-md cursor-pointer hover:bg-green-700"
                        onClick={() => form.submit()}
                    >
                        Lưu thay đổi
                    </div>
                </div>
            </div>
        </AccountLayout>
    );
}
