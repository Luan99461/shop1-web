import React from "react";
import {
    Nav,
    NavLink,
} from "./HeaderElementsGioiThieu";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './GioiThieu.css'
const HeaderGioiThieu = () => {
    return (
        <>
            <Nav>
                <h1>Giới thiệu</h1>
                <NavLink to="/Home" activeStyle>
                    Trang chủ
                </NavLink>
                <i class="bi bi-chevron-right"></i>
                <NavLink to="/GioiThieu">Giới thiệu</NavLink>
            </Nav>
        </>
    );
};

export default HeaderGioiThieu;