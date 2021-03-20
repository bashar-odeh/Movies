import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "../images/Logo.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <StyledLogo className="logo">
        <img src={Logo} alt="" />
        <span>The Movie Yard</span>
      </StyledLogo>
      <Nav>
        <li>Home</li>
        <li>Discover</li>
        <li>Genres</li>
      </Nav>

      <Nav>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Gmail</li>
      </Nav>
    </FooterStyled>
  );
};

const FooterStyled = styled(motion.footer)`
  height: auto;
  min-height: 30vh;
  padding: 0rem 4rem;
  display: grid;
  border-top: 1px solid red;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  justify-content: center;
  align-items: center;
  @media (min-width: 2500px) {
    grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
  }
`;
const Nav = styled(motion.ul)`
  height: 100%;
  width: 100%;
  padding: 2rem;
  li {
    list-style-type: none;
    padding: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      color: red;
    }
    @media (min-width: 2500px) {
      font-size: 2rem;
    }
  }
`;
const StyledLogo = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  span {
    padding: 1rem 0;
    font-size: 2rem;
    &:hover {
      color: red;
    }
  }
  img {
    height: 30%;
    width: 30%;
  }
  color: white;
`;
export default Footer;
