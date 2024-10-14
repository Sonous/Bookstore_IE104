import './Register.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationCodeErrorMessage, setVerificationCodeErrorMessage] = useState('');

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
    if (value === '') {
      setEmailErrorMessage('');
    }
  }

  function validateEmail(value) {
    if (value === '') {
      setEmailErrorMessage('');
      return;
    }

    if (/^\d+$/.test(value)) { // Nếu nhập số
      if (value.length < 10) {
        setEmailErrorMessage('Sai định dạng số điện thoại!');
      } else if (value.length > 12) {
        setEmailErrorMessage('Sai định dạng số điện thoại!');
      } else {
        setEmailErrorMessage('');
      }
    } else if (value.includes('@')) { // Nếu nhập email
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setEmailErrorMessage('Địa chỉ email không đúng định dạng!');
      } else {
        setEmailErrorMessage('');
      }
    } else {
      setEmailErrorMessage('Vui lòng nhập email hoặc số điện thoại hợp lệ!');
    }
  }

  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  }

  function validatePassword(value) {
    if (value === '') {
      setPasswordErrorMessage('');
    } else if (value.length < 8 || !/[a-zA-Z]/.test(value) || !/\d/.test(value)) {
      setPasswordErrorMessage('Mật khẩu phải có ít nhất 8 ký tự, bao gồm cả chữ và số!');
    } else {
      setPasswordErrorMessage('');
    }
  }

  function handleVerificationCodeChange(e) {
    const value = e.target.value;
    // Chỉ cho phép nhập số và giới hạn độ dài là 6
    if (/^\d{0,6}$/.test(value)) {
      setVerificationCode(value);
      // Xóa thông báo lỗi nếu ô mã xác nhận trống
      if (value === '') {
        setVerificationCodeErrorMessage('');
      } else if (value.length !== 6) {
        setVerificationCodeErrorMessage('Vui lòng nhập mã xác nhận 6 số!');
      } else {
        setVerificationCodeErrorMessage('');
      }
    }
  }

  function login() {
    let valid = true;

    if (!email) {
      setEmailErrorMessage('Vui lòng nhập email hoặc số điện thoại!');
      valid = false;
    }
    if (!password) {
      setPasswordErrorMessage('Vui lòng nhập mật khẩu!');
      valid = false;
    }
    if (verificationCode.length !== 6) {
      setVerificationCodeErrorMessage('Vui lòng nhập mã xác nhận 6 số!');
      valid = false;
    }

    if (!valid) return; // Ngừng thực hiện nếu có lỗi

    console.log('Email:', email, 'Password:', password, 'Verification Code:', verificationCode);
    alert('Đăng nhập thành công!');
    setEmailErrorMessage(''); // Xóa thông báo lỗi nếu đăng nhập thành công
    setPasswordErrorMessage('');
    setVerificationCodeErrorMessage('');
  }

  return (
    <div className="container">
      <div className="login-container">
        <h1 className="Title">
          <strong>Đăng Ký</strong>
        </h1>
        <div className="inputgroup">
          <p className="Login"><strong>Email/SĐT*</strong></p>
          <input
            className="Inputtext"
            type="text"
            placeholder="Nhập email hoặc số điện thoại"
            value={email}
            onChange={handleEmailChange} // Gọi hàm xử lý
            required
          />
           <p className="forgot-password">
           <a href="#">Gửi mã OTP</a>
           {emailErrorMessage && <p className="error-message">{emailErrorMessage}</p>}
           <div className="inputgroup">
          <p className="Login"><strong>Mã xác nhận</strong></p>
          <input
             className="Inputtext"
             type="number"
             placeholder="Nhập mã xác nhận"
             value={verificationCode}
             onChange={handleVerificationCodeChange}
             required
          />
          {verificationCodeErrorMessage && <p className="error-message">{verificationCodeErrorMessage}</p>}
          </div>
          <p className="Login"><strong>Mật khẩu*</strong></p>
          <input
            className="Inputtext"
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={handlePasswordChange} // Gọi hàm xử lý
            required
          />
          {passwordErrorMessage && <p className="error-message">{passwordErrorMessage}</p>} {/* Hiển thị thông báo lỗi */}
          </p>
        </div>
        <button className="LoginButton" onClick={login}>Đăng Nhập</button>
        <p style={{ textAlign: 'center' }}>
          Đã có tài khoản? <a href="#">Đăng nhập.</a>
        </p>
      </div>
    </div>
  );
}

export default App;
