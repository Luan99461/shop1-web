import React from "react";
import {
    Nav,
    NavLink,
} from "./HeaderElementsTinTuc";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
const HeaderNews = () => {
    return (
        <>
            <Nav>
                <h1>Tin tức</h1>
                <NavLink to="/Home" activeStyle>
                    Trang chủ
                </NavLink>
                <i class="bi bi-chevron-right"></i>
                <NavLink to="/TinTuc">Tin tức</NavLink>
            </Nav>
            
        </>
    );
};

export default HeaderNews;