import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import {
  Bars,
  Email,
  Hotline,
  LeftSection,
  Nav,
  NavLink,
  NavMenu,
} from "./NavbarElements";
import './style.css';

const Navbar1 = () => {
  return (
    <>
      <Nav>
        <LeftSection>
          <Hotline><i class="bi bi-telephone-fill"></i>123456789</Hotline>
          <Email><i class="bi bi-envelope-fill"></i> example@example.com</Email>
        </LeftSection>
        <Bars />
        <NavMenu>
          <NavLink to="/sign-up">Đăng ký</NavLink>
          <NavLink to="/logn-in">
            Đăng nhập
          </NavLink>
          <NavLink to="/FAQ" activeStyle>
            FAQ
          </NavLink>
          <NavLink to="/SanPhamYeuThich" activeStyle>
            Sản phẩm yêu thích
          </NavLink>
          <NavLink to="/HTCH">Hệ thống cửa hàng</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar1;