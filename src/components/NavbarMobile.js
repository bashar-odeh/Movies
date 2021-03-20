import React, { useState } from "react";
//STYLE
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
// Links
import { Link } from "react-router-dom";
// logo
import Logo from "../images/Logo.svg";
const NavbarMobile = () => {
  const [toggleNav, setToggleNav] = useState("-100%");
  return (
    <Wrapper>
      <button
        onClick={() => {
          setToggleNav("0%");
        }}
      >
        Menu
      </button>
      <StyledNav toggleNav={toggleNav}>
        <StyledLink style={{ width: "40%" }} to="/">
          <StyledLogo className="logo">
            <img src={Logo} alt="" />
            <span>The Movie Yard</span>
          </StyledLogo>
        </StyledLink>
        <li
          onClick={() => {
            setToggleNav("-100%");
          }}
        >
          Exits
        </li>
        <ul>
          <StyledLink to={"/"}>
            <li>Home</li>
          </StyledLink>
          <StyledLink to={"/discover"}>
            <li>Discover</li>
          </StyledLink>
        </ul>
      </StyledNav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  button {
    display: none;
    @media (max-width: 450px) {
      display: block;
    }
  }
`;
const StyledNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 120vh;
  width: 100%;
  background: black;
  padding: 4rem 2rem;
  display: flex;
  transform: translateX(${(props) => props.toggleNav});
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  justify-self: center;
  transition: all 1s ease;
  ul {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    li {
      color: white;
      list-style: none;
      padding: 1rem;
    }
  }
  @media (min-width: 450px) {
    display: none;
  }
`;
const StyledLink = styled(Link)`
  color: white;

  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: black;
    text-decoration: none;
  }
`;
const StyledLogo = styled(motion.div)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;
  span {
    width: 100%;
    height: 100%;
    padding: 1rem;
    font-size: 3rem;
  }
  img {
    height: 100%;
    width: 100%;
  }
  color: white;
`;
export default NavbarMobile;
