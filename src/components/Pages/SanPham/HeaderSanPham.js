import React from "react";
import {
    Nav,
    NavLink,
} from "./HeaderElementsSanPham";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
const HeaderSanPham = () => {
    return (
        <>
            <Nav>
                <h1>Sản phẩm</h1>
                <NavLink to="/Home" activeStyle>
                    Trang chủ
                </NavLink>
                <i class="bi bi-chevron-right"></i>
                <NavLink to="/SanPham">Sản phẩm</NavLink>
            </Nav> 
        </>
    );
};

export default HeaderSanPham;