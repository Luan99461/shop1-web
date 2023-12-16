import React from "react";
import {
    Nav,
    NavLink,
} from "./HeaderElementsHTCH";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './HTCH.css'
const HeaderHTCH = () => {
    return (
        <>
            <Nav>
                <h1>Hệ thống cửa hàng</h1>
                <NavLink to="/Home" activeStyle>
                    Trang chủ
                </NavLink>
                <i class="bi bi-chevron-right"></i>
                <NavLink to="/HTCH">Hệ thống cửa hàng</NavLink>
            </Nav>
            
        </>
    );
};

export default HeaderHTCH;