import './Login.css';
import { useState } from 'react';
import Username from './Username';
function App() {
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');

    function handleEmailChange(e) {
        const value = e.target.value;
        setEmail(value);
        // Xóa thông báo lỗi nếu ô email trống
        if (value === '') {
            setErrorMessage('');
        } else if (errorMessage === 'Vui lòng nhập đầy đủ thông tin đăng nhập!') {
            setErrorMessage(''); // Xóa thông báo khi người dùng nhập lại
        }
    }

    function handlePasswordChange(e) {
        const value = e.target.value;
        setPassword(value);
        // Xóa thông báo lỗi nếu ô mật khẩu trống
        if (value === '') {
            setErrorMessage('');
        } else if (errorMessage === 'Vui lòng nhập mật khẩu!') {
            setErrorMessage(''); // Xóa thông báo khi người dùng nhập lại
        }
    }

    function login() {
        if (!email) {
            setErrorMessage('Vui lòng nhập email hoặc số điện thoại!');
            return;
        }
        if (!password) {
            setErrorMessage('Vui lòng nhập mật khẩu!');
            return;
        }

        console.log('Email:', email, 'Password:', password);
        alert('Đăng nhập thành công!');
        setErrorMessage(''); // Xóa thông báo lỗi nếu đăng nhập thành công
    }

    return (
        <div className="container">
            <div className="login-container">
                <h1 className="Title">
                    <strong>Đăng Nhập</strong>
                </h1>
                <div className="inputgroup">
                    <Username /> {/* Hiển thị Username */}
                    {/* <p className="Login">
                        <strong>Email/SĐT*</strong>
                    </p>
                    <input
                        className="Inputtext"
                        type="text"
                        placeholder="Nhập email hoặc số điện thoại"
                        value={email}
                        onChange={handleEmailChange} // Gọi hàm xử lý
                        required
                    /> */}
                    <p className="Login">
                        <strong>Mật khẩu*</strong>
                    </p>
                    <input
                        className="Inputtext"
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChange={handlePasswordChange} // Gọi hàm xử lý
                        required
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Hiển thị thông báo lỗi */}
                    <p className="forgot-password">
                        <a href="#">Quên mật khẩu?</a>
                    </p>
                </div>
                <button className="LoginButton" onClick={login}>
                    Đăng Nhập
                </button>
                <p style={{ textAlign: 'center' }}>
                    Chưa có tài khoản? <a href="#">Tạo mới.</a>
                </p>
            </div>
        </div>
    );
}

export default App;
