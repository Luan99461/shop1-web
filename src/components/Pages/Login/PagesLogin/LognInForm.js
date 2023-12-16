// LognInForm.js
import React, { useState } from 'react';
import './style.css';
import { Nav, NavLink } from "./FormHeaderLogin";
import RegistrationForm from '../../Sign-up/SignupElements/registrationForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { login } from '../../../AUser/authSlice';

function LognInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [registrationInfo, setRegistrationInfo] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    // const dispatch = useDispatch();

    useEffect(() => {
        const storedData = localStorage.getItem('registrationInfo');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setRegistrationInfo(parsedData);
        }
    }, []);

    const handleRegistration = (info) => {
        setRegistrationInfo(info);
    };
    <RegistrationForm handleRegistration={handleRegistration} />

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === 'email') {
            setEmail(value);
        } else if (id === 'password') {
            setPassword(value);
        }
    };

    const handleLogin = () => {
        if (registrationInfo && email === registrationInfo.email && password === registrationInfo.password) {
            setIsLoggedIn(true);
            alert("Đăng nhập thành công!")
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 1000);
        } else {
            alert('Sai mật khẩu hoặc Email!');
        }
        // dispatch(login());
    };

    return (
        <div className="formlogin">
            <Nav>
                <NavLink to="/logn-in" activeStyle>
                    ĐĂNG NHẬP
                </NavLink>
                <NavLink to="/sign-up">ĐĂNG KÝ</NavLink>
            </Nav>
            <div className="form-body">
                <h2>ĐĂNG NHẬP</h2>
                <div className="email">
                    <label className="form__label" htmlFor="email">
                        Email
                    </label>
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
                    <label className="form__label" htmlFor="password">
                        Mật khẩu
                    </label>
                    <input
                        className="form__input"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Mật khẩu"
                    />
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={handleLogin}>
                    Đăng nhập
                </button>
            </div>
            <p>Quên mật khẩu?</p>
            <p>Hoặc đăng nhập bằng</p>
            <a href="/sign-up">
                <img src='https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg' alt='facebook' />
            </a>
            <a href="/sign-up">
                <img src='https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg' alt='google' />
            </a>

            {showSuccessMessage && (
                <div className="success-message">
                    Đăng nhập thành công!
                </div>
            )}
        </div>
    );
}

export default LognInForm;