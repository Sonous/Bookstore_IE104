import './RegisterForgotPass.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationCodeErrorMessage, setVerificationCodeErrorMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true); // Thêm trạng thái này
  const [isVerificationValid, setIsVerificationValid] = useState(true);
  const [isPasswordvalid, setIsPasswordvalid] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 
  const navigate = useNavigate();

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  }

  function validateEmail(value) {
    if (value === '') {
      setEmailErrorMessage('');
      setIsEmailValid(true); 
      return;
    }

    if (/^\d+$/.test(value)) { 
      if (value.length < 10 || value.length > 12) {
        setEmailErrorMessage('Sai định dạng số điện thoại!');
        setIsEmailValid(false);
      } else {
        setEmailErrorMessage('');
        setIsEmailValid(true);
      }
    } else if (value.includes('@')) { 
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setEmailErrorMessage('Địa chỉ email không đúng định dạng!');
        setIsEmailValid(false);
      } else {
        setEmailErrorMessage('');
        setIsEmailValid(true);
      }
    } else {
      setEmailErrorMessage('Vui lòng nhập email hoặc số điện thoại hợp lệ!');
      setIsEmailValid(false);
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
      setIsPasswordvalid(true);
    } else if (value.length < 8 || !/[a-zA-Z]/.test(value) || !/\d/.test(value)) {
      setPasswordErrorMessage('Mật khẩu phải có ít nhất 8 ký tự, bao gồm cả chữ và số!');
      setIsPasswordvalid(false);
    } else {
      setPasswordErrorMessage('');
      setIsPasswordvalid(true);
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
        setIsVerificationValid(true);
      } else if (value.length !== 6) {
        setVerificationCodeErrorMessage('Vui lòng nhập mã xác nhận 6 số!');
        setIsVerificationValid(false);
      } else {
        setVerificationCodeErrorMessage('');
        setIsVerificationValid(true);
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
    alert('Đăng ký thành công!');
    setEmailErrorMessage(''); // Xóa thông báo lỗi nếu đăng ký thành công
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
          <p className="Login"><strong>Mã xác nhận*</strong></p>
          <input
             className="Inputtext"
             type="number"
             placeholder="Nhập mã xác nhận"
             value={verificationCode}
             onChange={handleVerificationCodeChange}
             disabled={!isEmailValid}
             required
          />
          {verificationCodeErrorMessage && <p className="error-message">{verificationCodeErrorMessage}</p>}
          </div>
          <p className="Login"><strong>Mật khẩu*</strong></p>
          <div style={{ position: 'relative' }}>
            <input
              className="Inputtext"
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={handlePasswordChange} 
              disabled={!isEmailValid || !isVerificationValid}
              required
              style={{
              
              }}
            />
          <button 
              type="button" 
              onClick={() => setIsPasswordVisible(!isPasswordVisible)} 
              style={{ 
                position: 'absolute', 
                right: '10px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer' 
              }}
            >
              <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
            </button>
          </div>
          {passwordErrorMessage && <p className="error-message">{passwordErrorMessage}</p>} {/* Hiển thị thông báo lỗi */}
          </p>
        </div>
        <button 
          className={`LoginButton ${!(isEmailValid && isVerificationValid && isPasswordvalid) ? 'disabled' : ''}`}
          onClick={login}
          disabled={!(isEmailValid && isVerificationValid && isPasswordvalid)}>
          Đăng Ký</button>
        <p style={{ textAlign: 'center' }}>
          Đã có tài khoản? 
          <span 
            style={{ 
              cursor: 'pointer', 
              marginLeft: '5px', 
              color: 'blue',  // Màu xanh biển
              textDecoration: 'underline' // Gạch dưới
            }} 
            onClick={() => navigate('/login')}
          >
            Đăng nhập.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
