import React from "react";
//STYLE
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
// Links
import { Link } from "react-router-dom";
// logo
import Logo from "../images/Logo.svg";
const Navbar = () => {
  return (
    <StyledNav>
      <StyledLink style={{ width: "40%" }} to="/">
        <StyledLogo className="logo">
          <img src={Logo} alt="" />
          <span>The Movie Yard</span>
        </StyledLogo>
      </StyledLink>
      <ul>
        <StyledLink to={"/"}>
          <li>Home</li>
        </StyledLink>
        <StyledLink to={"/discover/1"}>
          <li>Discover</li>
        </StyledLink>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  height: 10vh;
  width: 100vw;
  overflow-x: hidden;

  display: flex;
  padding: 4rem 2rem;
  margin-bottom: 3rem;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  overflow: hidden;
  justify-self: center;
  ul {
    display: flex;

    li {
      color: white;

      list-style: none;
      padding: 0rem 1rem;
      margin: 0rem 1rem;
    }
  }
  @media (max-width: 1200px) {
    padding: 2rem;
    font-size: 1.2rem;
    ul {
      li {
        padding: 0rem 0.5rem;
        margin: 0rem 0.5rem;
      }
    }
  }
  @media (max-width: 570px) {
    ul {
      li {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 570px) {
    display: none;
  }
`;
const StyledLink = styled(Link)`
  color: white;
  width: 50%;
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

  span {
    padding: 1rem;
    font-size: 3rem;
  }
  img {
    height: 20%;
    width: 20%;
  }
  color: white;
  @media (max-width: 570px) {
    img {
      height: 25%;
      width: 25%;
    }
    span {
      font-size: 1rem;
      font-size: 2rem;
    }
  }
  @media (max-width: 1200px) {
    img {
      height: 15%;
      width: 15%;
    }
    span {
      font-size: 1rem;
    }
  }
`;
export default Navbar;
