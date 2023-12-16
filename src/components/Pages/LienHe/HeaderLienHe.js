import React from "react";
import {
    Nav,
    NavLink,
} from "./HeaderElementsLienHe";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './LienHe.css'
const HeaderLienHe = () => {
    return (
        <>
            <Nav>
                <h1>Liên hệ</h1>
                <NavLink to="/Home" activeStyle>
                    Trang chủ
                </NavLink>
                <i class="bi bi-chevron-right"></i>
                <NavLink to="/LienHe">Liên hệ</NavLink>
            </Nav>
            
        </>
    );
};

export default HeaderLienHe;