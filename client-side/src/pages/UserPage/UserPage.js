import './UserPage.css';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import AccountLayout from './AccountLayout';
import { UserContext } from '~/context/UserContextProvider';
import { imageUrl } from '~/configs/axios.config';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import userApi from '~/apis/userApi';
import { Form, Input, Select } from 'antd';
import axios from 'axios';
import addresApi from '~/apis/addressApi';

const UserPage = () => {
    const { user, login } = useContext(UserContext);
    const [avatar, setAvatar] = useState('');
    const [avatarFile, setAvatarFile] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [isDisableButton, setIsDisableButton] = useState(true);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [disableSelectList, setDisalbleSelectList] = useState(['districts', 'wards']);
    const [editField, setEditField] = useState(null); // Quản lý trường nào đang được chỉnh sửa
    const [form] = Form.useForm();

    useEffect(() => {
        if (user) {
            const fetchApi = async () => {
                const address = await userApi.getAddressOfUser(user.user_id);
                setAddress(() => {
                    const temp = { ...address.address };

                    delete temp.address_id;

                    return {
                        address_id: address.address.address_id,
                        address: temp,
                    };
                });
            };
            fetchApi();
            setAvatar(`${imageUrl}/${user.user_avatar_url}`);
            setUsername(user.user_name);
            setEmail(user.user_email);
            setPhone(user.user_phone);
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            const handelValidData = () => {
                if (
                    avatar === `${imageUrl}/${user.user_avatar_url}` &&
                    username === user.user_name &&
                    email === user.user_email &&
                    phone === user.user_phone &&
                    editField !== 'address'
                ) {
                    setIsDisableButton(true);
                    return;
                }

                setIsDisableButton(false);
            };

            handelValidData();
        }
    }, [avatar, username, email, phone, editField]);

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

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatar(URL.createObjectURL(file));
            setAvatarFile(file);
        }
    };

    const handleSubmit = async (e) => {
        try {
            // Kiểm tra email hợp lệ
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Email không hợp lệ');
                return;
            }

            // Kiểm tra số điện thoại hợp lệ
            const phoneRegex = /^[0-9]{10,11}$/;
            if (!phoneRegex.test(phone)) {
                alert('Số điện thoại không hợp lệ');
                return;
            }

            const userData = {
                user_name: username,
                user_email: email,
                user_phone: phone,
            };

            if (avatarFile) {
                const url = await userApi.uploadAvatar(avatarFile, user.user_id);
                userData.user_avatar_url = url.name;
            }

            await userApi.updateUser(user.user_id, {
                ...userData,
            });

            await login();

            setEditField(null);

            await Swal.fire({
                title: 'Thay đổi thành công!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            console.error(error);

            Swal.fire({
                title: 'Thay đổi không thành công, xảy ra lỗi!',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const handleActiveInput = (prev, name) => {
        return prev === name ? null : name;
    };

    const getLabelByValue = (list, value) => {
        const result = list.find((item) => item.value === value);

        return result.label;
    };

    const handleSubmitInfo = async () => {
        if (editField === 'address') {
            form.submit();

            return;
        }

        await handleSubmit();
    };

    const onFinish = async (values) => {
        await addresApi.updateAddress(
            {
                address_house_number: values.address,
                address_ward: getLabelByValue(wards, values.ward),
                address_district: getLabelByValue(districts, values.district),
                address_province: getLabelByValue(provinces, values.province),
            },
            address.address_id,
        );
        await handleSubmit();
    };

    return (
        <>
            {user && (
                <AccountLayout currentPage="Thông tin tài khoản">
                    <main className="flex items-center w-full">
                        <div className="user-page flex-1">
                            <h2 className="user-page-header">Thông tin tài khoản</h2>
                            <hr className="ursp-hr" />
                            <div>
                                <div className="form-group">
                                    <label>Ảnh đại diện:</label>
                                    <img src={avatar} alt="avatar" className="avatar" />
                                    {editField === 'avatar' && (
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="avatar-upload"
                                            onChange={handleAvatarChange}
                                        />
                                    )}
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        className={`edit-icon ${editField === 'avatar' ? 'editing' : ''}`}
                                        onClick={() => setEditField((prev) => handleActiveInput(prev, 'avatar'))}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Họ và tên:</label>
                                    <input
                                        type="text"
                                        value={username}
                                        name="username"
                                        disabled={editField !== 'username'}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        className={`edit-icon ${editField === 'username' ? 'editing' : ''}`}
                                        onClick={() => setEditField((prev) => handleActiveInput(prev, 'username'))}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        value={email}
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={editField !== 'email'}
                                    />
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        className={`edit-icon ${editField === 'email' ? 'editing' : ''}`}
                                        onClick={() => setEditField((prev) => handleActiveInput(prev, 'email'))}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Số điện thoại:</label>
                                    <input
                                        type="text"
                                        value={phone}
                                        name="phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                        disabled={editField !== 'phone'}
                                    />
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        className={`edit-icon ${editField === 'phone' ? 'editing' : ''}`}
                                        onClick={() => setEditField((prev) => handleActiveInput(prev, 'phone'))}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Địa chỉ giao hàng:</label>
                                    <input
                                        type="text"
                                        value={address ? Object.values(address.address).join(', ') : ''}
                                        name="address"
                                        disabled={editField !== 'address'}
                                    />
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        className={`edit-icon ${editField === 'address' ? 'editing' : ''}`}
                                        onClick={() =>
                                            setEditField((prev) => {
                                                setDisalbleSelectList(['districts', 'wards']);
                                                return handleActiveInput(prev, 'address');
                                            })
                                        }
                                    />
                                </div>

                                {editField === 'address' && (
                                    <Form
                                        form={form}
                                        layout="vertical"
                                        clearOnDestroy={() => {
                                            return true;
                                        }}
                                        onFinish={onFinish}
                                    >
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
                                    </Form>
                                )}

                                <button
                                    type="submit"
                                    className={classNames('save-btn', {
                                        'opacity-50 !cursor-not-allowed': isDisableButton,
                                    })}
                                    onClick={handleSubmitInfo}
                                    disabled={isDisableButton}
                                >
                                    Lưu
                                </button>
                            </div>
                        </div>
                    </main>
                </AccountLayout>
            )}
        </>
    );
};

export default UserPage;
