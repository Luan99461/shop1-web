
import React, { useState } from 'react';
import './style.css';
import { Nav, NavLink } from "./FormHeader";

function RegistrationForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'firstName') {
            setFirstName(value);
        } else if (id === 'lastName') {
            setLastName(value);
        } else if (id === 'email') {
            setEmail(value);
        } else if (id === 'password') {
            setPassword(value);
        } else if (id === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const handleSubmit = () => {
        if (firstName && lastName && email && password && confirmPassword) {
            const registrationData = {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            };

            localStorage.setItem('registrationInfo', JSON.stringify(registrationData));

            setIsRegistered(true);
        } else {
            alert('Vui lòng điền đầy đủ thông tin.');
        }
    };

    return (
        <div className="form">
            <div className='form-header'>
                <Nav>
                    <NavLink to="/logn-in" activeStyle>
                        ĐĂNG NHẬP
                    </NavLink>
                    <NavLink to="/sign-up">ĐĂNG KÝ</NavLink>
                </Nav>
            </div>
            <div className="form-body">
                <h2>ĐĂNG KÝ</h2>
                <div className="username">
                    <input
                        className="form__input"
                        type="text"
                        value={firstName}
                        onChange={(e) => handleInputChange(e)}
                        id="firstName"
                        placeholder="Họ"
                    />
                </div>
                <div className="lastname">
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        className="form__input"
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Tên"
                    />
                </div>
                <div className="email">
                    <input
                        type="email"
                        id="email"
                        className="form__input"
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Email"
                    />
                </div>
                <div className="password">
                    <input
                        className="form__input"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Mật khẩu"
                    />
                </div>
                <div className="confirm-password">
                    <input
                        className="form__input"
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Xác nhận mật khẩu"
                    />
                </div>
            </div>
            <div className="footer">
                <button
                    onClick={() => handleSubmit()}
                    type="submit"
                    className="btn"
                >
                    Đăng ký
                </button>
            </div>
            <p>Hoặc đăng nhập bằng</p>
            <a href="/sign-up"><img src='https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg' alt='facebook' /></a>
            <a href="/sign-up"><img src='https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg' alt='google' /></a>
            {isRegistered && alert("Hoàn tất! Bạn đã đăng ký tài khoản thành công.")}
        </div>
    );
}

export default RegistrationForm;