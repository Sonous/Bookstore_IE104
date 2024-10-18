import './UserPage.css';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const initialProfile = {
  avatar: 'https://via.placeholder.com/100',
  username: 'ethanwinters2004',
  name: 'Ethan Winters',
  email: 'ethanwinters.re8@gmail.com',
  phone: '0123456789',
  gender: 'Nam',
  birthDate: { day: '01', month: '01', year: '1984' },
};

const UserPage = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [editField, setEditField] = useState(null); // Quản lý trường nào đang được chỉnh sửa
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Quản lý thông báo lưu thành công

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('birthDate')) {
      setProfile((prevState) => ({
        ...prevState,
        birthDate: { ...prevState.birthDate, [name.split('.')[1]]: value },
      }));
    } else {
      setProfile((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile((prevState) => ({
          ...prevState,
          avatar: reader.result, // Cập nhật ảnh avatar với file được chọn
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra email hợp lệ
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(profile.email)) {
      alert('Email không hợp lệ');
      return;
    }

    // Kiểm tra số điện thoại hợp lệ
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(profile.phone)) {
      alert('Số điện thoại không hợp lệ');
      return;
    }

    // Kiểm tra ngày sinh (tất cả các trường phải điền)
    if (!profile.birthDate.day || !profile.birthDate.month || !profile.birthDate.year) {
      alert('Vui lòng nhập đầy đủ ngày sinh');
      return;
    }

    setEditField(null); // Reset editing fields
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); 
  };

  return (
    <>
      <Header />
      <div className="user-page">
        <h2>Thông tin tài khoản</h2>
        <hr className="ursp-hr"/>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Ảnh đại diện:</label>
            <img src={profile.avatar} alt="avatar" className="avatar" />
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
              onClick={() => setEditField('avatar')} 
            />
          </div>

          <div className="form-group">
            <label>Tên đăng nhập:</label>
            <input
              type="text"
              value={profile.username}
              name="username"
              disabled
            />
          </div>

          <div className="form-group">
            <label>Tên:</label>
            <input
              type="text"
              value={profile.name}
              name="name"
              onChange={handleChange}
              disabled={editField !== 'name'}
            />
            <FontAwesomeIcon 
              icon={faEdit} 
              className={`edit-icon ${editField === 'name' ? 'editing' : ''}`} 
              onClick={() => setEditField('name')} 
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={profile.email}
              name="email"
              onChange={handleChange}
              disabled={editField !== 'email'}
            />
            <FontAwesomeIcon 
              icon={faEdit} 
              className={`edit-icon ${editField === 'email' ? 'editing' : ''}`} 
              onClick={() => setEditField('email')} 
            />
          </div>

          <div className="form-group">
            <label>Số điện thoại:</label>
            <input
              type="text"
              value={profile.phone}
              name="phone"
              onChange={handleChange}
              disabled={editField !== 'phone'}
            />
            <FontAwesomeIcon 
              icon={faEdit} 
              className={`edit-icon ${editField === 'phone' ? 'editing' : ''}`} 
              onClick={() => setEditField('phone')} 
            />
          </div>

          <div className="form-group">
            <label>Ngày sinh:</label>
            <div className="date-group">
              <input
                type="text"
                placeholder="Ngày"
                name="birthDate.day"
                value={profile.birthDate.day}
                onChange={handleChange}
                disabled={editField !== 'birthDate'}
              />
              <input
                type="text"
                placeholder="Tháng"
                name="birthDate.month"
                value={profile.birthDate.month}
                onChange={handleChange}
                disabled={editField !== 'birthDate'}
              />
              <input
                type="text"
                placeholder="Năm"
                name="birthDate.year"
                value={profile.birthDate.year}
                onChange={handleChange}
                disabled={editField !== 'birthDate'}
              />
            </div>
            <FontAwesomeIcon 
              icon={faEdit} 
              className={`edit-icon ${editField === 'birthDate' ? 'editing' : ''}`} 
              onClick={() => setEditField('birthDate')} 
            />
          </div>

          <div className="form-group">
            <label>Giới tính:</label>
            <div className="radio-group">
                <input
                  type="radio"
                  value="Nam"
                  checked={profile.gender === 'Nam'}
                  name="gender"
                  onChange={handleChange}
                />
              <label>
                Nam
              </label>
                <input
                  type="radio"
                  value="Nữ"
                  checked={profile.gender === 'Nữ'}
                  name="gender"
                  onChange={handleChange}
                />
             <label>
                Nữ
              </label>
                <input
                  type="radio"
                  value="Khác"
                  checked={profile.gender === 'Khác'}
                  name="gender"
                  onChange={handleChange}
                />
                <label>
                Khác
              </label>
            </div>
          </div>

          <button type="submit" className="save-btn">
            Lưu
          </button>
          {showSuccessMessage && <span className="success-message">Lưu thành công</span>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UserPage;
