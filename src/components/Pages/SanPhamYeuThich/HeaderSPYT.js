import React from "react";
import {
    Nav,
    NavLink,
} from "./HeaderElementsSPYT";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
const HeaderSPYT = () => {
    return (
        <>
            <Nav>
                <h1>Sản phẩm yêu thích</h1>
                <NavLink to="/Home" activeStyle>
                    Trang chủ
                </NavLink>
                <i class="bi bi-chevron-right"></i>
                <NavLink to="/SanPhamYeuThich">Sản phẩm yêu thích</NavLink>
            </Nav>
        </>
    );
};

export default HeaderSPYT;