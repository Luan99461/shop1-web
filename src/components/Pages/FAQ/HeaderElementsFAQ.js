import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url(//bizweb.dktcdn.net/100/480/479/themes/900388/assets/breadcrumb.jpg?1700208175302);
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  height: 200px;
  width: 99vw;
  padding-top: 30px;
  padding-bottom: 20px; /* Add padding to the bottom */
`;

export const NavLink = styled(Link)`
  font-size: 16px;
  color: white;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: orange;
  }
`;