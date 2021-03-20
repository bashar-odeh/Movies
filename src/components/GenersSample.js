import React from "react";
//STYLE
import styled from "styled-components";
// ANIMATION
import { motion } from "framer-motion";
import action from "../images/action.jpg";
import comedy from "../images/comedy.jpg";
import horror from "../images/horror.jpg";
import crime from "../images/crime.jpg";
const GenersSample = () => {
  return (
    <GenersSampleStyled>
      <div className="description">
        <h2>
          Top Categories Movies <br /> to Watch Now
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
          tenetur dolorum rerum, assumenda voluptatum asperiores dolore modi
          temporibus illum provident. lorem50
        </p>
        <Small className="small">Action</Small>
        <Small className="small">Comedy</Small>
        <Small className="small">Horror</Small>
        <Small className="small">Crime</Small>
        <button>View All</button>
      </div>
      <Samples>
        <Genre>
          <img src={action} alt="" />{" "}
          <div>
            <span>Action</span>
          </div>
        </Genre>
        <Genre>
          <img src={comedy} alt="" />{" "}
          <div>
            <span>Comedy</span>
          </div>
        </Genre>
        <Genre>
          {" "}
          <img src={horror} alt="" />{" "}
          <div>
            <span>Horror</span>
          </div>
        </Genre>
        <Genre>
          {" "}
          <img src={crime} alt="" />{" "}
          <div>
            <span>Crime</span>
          </div>
        </Genre>
        <Genre></Genre>
      </Samples>
    </GenersSampleStyled>
  );
};
const GenersSampleStyled = styled(motion.div)`
  height: auto;
  min-height: 70vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin-top: 6rem;
  button {
    padding: 1rem 3rem;
    background: none;
    color: white;
    border: 3px solid red;
    border-radius: 1rem;
    font-size: 1.5rem;
    color: red;
    transition: all 0.2s ease;
    &:hover {
      background: red;
      color: white;
    }
    @media (max-width: 450px) {
      margin: 0;
      padding: 1rem 2rem;
      font-size: 1.2rem;
    }
    @media (min-width: 2500px) {
      padding: 2rem 4rem;
      font-size: 3rem;
    }
  }
  .description {
    @media (max-width: 450px) {
      p {
        display: none;
      }
    }
    @media (min-width: 2500px) {
      p {
        font-size: 2.5rem;
      }
      h2 {
        font-size: 3rem;
      }
    }
  }
`;
const Samples = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;

  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  div:nth-child(1) {
    top: -20%;
  }
  div:nth-child(3) {
    top: -20%;
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 0 350px;
    div:nth-child(1) {
      top: 0;
    }
    div:nth-child(3) {
      top: 0;
    }
  }
`;

const Genre = styled(motion.div)`
  margin: 1rem;
  font-size: 3rem;
  text-align: center;
  border-radius: 1rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    div {
      background: rgb(0, 0, 0, 0);
      span {
        top: 30%;
        left: 30%;
        transform: scale(1.3);
      }
    }
  }

  div {
    height: 100%;
    width: 100%;
    background: rgb(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    color: white;

    span {
      position: absolute;
      top: 70%;
      left: 40%;
      transition: all 0.5s ease;
      font-size: 2.5rem;
      @media (max-width: 500px) {
        /* display: none; */
        font-size: 5px;
        top: 70%;
        left: 10%;
      }
      @media (min-width: 2500px) {
        font-size: 5rem;
      }
    }
    @media (max-width: 450px) {
      opacity: 0;
    }
  }

  img {
    display: block;
    height: 30vh;
    width: 100%;
    @media (max-width: 450px) {
      opacity: 0;
    }
    @media (min-width: 2500px) {
      height: 50vh;
    }
  }

  @media (max-width: 1000px) {
    width: 50%;
    height: 20vh;
    div {
      span {
        font-size: 1.4rem;
      }
    }
    img {
      display: block;
      height: 30vh;
      width: 100%;
    }
  }
`;
const Small = styled.span`
  display: none;
  opacity: 0;
  color: white;
  display: flex;
  @media (max-width: 450px) {
    height: 100px;
    width: 100%;
    opacity: 1;
    font-size: 2rem;
    margin: 1rem 0;
  }
`;

export default GenersSample;
