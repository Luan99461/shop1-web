import React from "react";
import {
    Nav,
    NavLink,
} from "./HeaderElementsFAQ";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './FAQ.css'
const HeaderFAQ = () => {
    return (
        <>
            <Nav>
                <h1>Giải đáp thắc mắc</h1>
                <NavLink to="/Home" activeStyle>
                    Trang chủ
                </NavLink>
                <i class="bi bi-chevron-right"></i>
                <NavLink to="/FAQ">FAQ</NavLink>
            </Nav>
            
        </>
    );
};

export default HeaderFAQ;