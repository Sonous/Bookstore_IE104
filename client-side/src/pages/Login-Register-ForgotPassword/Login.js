import './Login.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 
  const navigate = useNavigate();

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  }

  function validateEmail(value) {
    if (value === '') {
      setEmailErrorMessage('Vui lòng nhập email hoặc số điện thoại!');
      setIsEmailValid(false);
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

  function login() {
    console.log('Email:', email, 'Password:', password);
    alert('Đăng nhập thành công!');
  }

  return (
    <div className="container">
      <div className="login-container">
        <h1 className="Title">
          <strong>Đăng Nhập</strong>
        </h1>
        <div className="inputgroup">
          <p className="Login"><strong>Email/SĐT*</strong></p>
          <input
            className="Inputtext"
            type="text"
            placeholder="Nhập email hoặc số điện thoại"
            value={email}
            onChange={handleEmailChange} 
            required
          />

          <p className="Login"><strong>Mật khẩu*</strong></p>
          <div style={{ position: 'relative' }}>
            <input
              className="Inputtext"
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
        </div>
        <span className="forgot-password" onClick={() => navigate('/forgotpassword')}>
          Quên mật khẩu?
        </span>
        <button 
          className="LoginButton"
          onClick={login}>
          Đăng Nhập
        </button>
        <p style={{ textAlign: 'center' }}>
          Chưa có tài khoản? 
          <span 
            style={{ 
              cursor: 'pointer', 
              marginLeft: '5px', 
              color: 'blue',  // Màu xanh biển
              textDecoration: 'underline' // Gạch dưới
            }} 
            onClick={() => navigate('/register')}
          >
            Đăng ký.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
