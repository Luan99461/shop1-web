
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: black;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 12;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Hotline = styled.span`
  color: white;
  margin-right: 10px;

  i {
    margin-right: 5px;
  }
`;

export const Email = styled.span`
  color: white;
  margin-right: 10px;

  i {
    margin-right: 5px;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: orange;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const LoginButton = styled.button`
  border-radius: 4px;
  background: lightgray;
  padding: 10px 22px;
  color: black;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    background: #fff;
    color: orange;
  }
`;