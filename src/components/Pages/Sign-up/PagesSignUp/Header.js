import React from "react";
import {
    Nav,
    NavLink,
} from "./HeaderElements";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
const HeaderSignUp = () => {
    return (
        <>
            <Nav>
                <h1>Đăng ký tài khoản</h1>
                <NavLink to="/Home" activeStyle>
                    Trang chủ
                </NavLink>
                <i class="bi bi-chevron-right"></i>
                <NavLink to="/sign-up">Đăng ký tài khoản</NavLink>
            </Nav>
            
        </>
    );
};

export default HeaderSignUp;