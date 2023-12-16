import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
`;

export const NavLink = styled(Link)`
  font-size: 18px;
  color: black;
  text-decoration: none;
  padding: 0 40px;
  height: 100%;
  cursor: pointer;
  padding-bottom: 10px;
  &.active {
    border-bottom: 1px solid black; 
    font-size: 19px;
    font-weight: 500;
  }
`;