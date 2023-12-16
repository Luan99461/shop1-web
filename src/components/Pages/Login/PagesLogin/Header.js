import React from "react";
import {
    Nav,
    NavLink,
} from "./HeaderElements.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
const HeaderLogin = () => {
    return (
        <>
            <Nav>
                <h1>Đăng nhập tài khoản</h1>
                <NavLink to="/Home" activeStyle>
                    Trang chủ
                </NavLink>
                <i class="bi bi-chevron-right"></i>
                <NavLink to="/logn-in">Đăng nhập tài khoản </NavLink>
            </Nav>
            
        </>
    );
};

export default HeaderLogin;