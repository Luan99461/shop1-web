import React from "react";
import {
  Nav,
  LeftSection,
  NavLink,
  Bars,
  NavMenu,
  RightSection,
} from "./NavbarElements";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import Header from "../Pages/SanPhamMenu/Header";
import { useState } from "react";
import '../Pages/SanPhamMenu/Dropdown.css'

const Navbar2 = () => {
  const [isProductHovered, setIsProductHovered] = useState(false);
  
  return (
    <>
      <Nav>
        <LeftSection>
          <img src="https://www.sacvang.com/data/01/logo-ca-map-14.jpg" alt="logo"></img>
        </LeftSection>
        <button className="navbar-button">Danh mục nổi bật <i className="bi bi-list"></i></button>
        <Bars />
        <NavMenu>
          <NavLink to="/Home">Trang chủ</NavLink>
          <NavLink to="/GioiThieu" activeStyle>
            Giới thiệu
          </NavLink>
          {/* <NavLink to="/Product" activeStyle>
            Sản phẩm <i class="bi bi-caret-down-fill"></i>
          </NavLink> */}
          <NavLink
            to="/SanPham"
            activeStyle
            onMouseEnter={() => setIsProductHovered(true)}
            onMouseLeave={() => setIsProductHovered(false)}
          >Sản Phẩm <i class="bi bi-caret-down-fill"></i></NavLink>
          <NavLink to="/TinTuc" activeStyle>
            Tin tức
          </NavLink>
          <NavLink to="/LienHe">Liên hệ</NavLink>
          <NavLink to="/SanPham/cart"> <i class="bi bi-bag-fill"></i></NavLink>
          <NavLink to="/SanPham/search"><i class="bi bi-search"></i></NavLink>
        </NavMenu>
        <RightSection>
          <NavLink to="/User"><img src="https://yt3.ggpht.com/qoNJSK9xsuTjUQzNpZwfiu9WcHf6D8t6TWp8FNTYcxcVFLnvMgbbqI5NWNgiATdwChFjwI3SEbQ=s88-c-k-c0x00ffffff-no-rj" alt="logo" style={{width:"50px", borderRadius:"100%"}}></img></NavLink>
        </RightSection>
      </Nav>
      {isProductHovered && <Header />}
    </>
  );
};

export default Navbar2;