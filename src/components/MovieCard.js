import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { movieCardAnimation } from "../animation";
const MovieCrad = ({
  id,
  base_url,
  image,
  releaseDate,
  vote_average,
  title,
}) => {
  let stringVote = vote_average.toString();

  return (
    <MovieCardStyled
      variants={movieCardAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <img src={`${base_url}w500/${image}`} alt="" />
      <div className="floating-data">
        <span>
          {stringVote.length === 3 ? vote_average : `${vote_average}.0`}
        </span>
        <h2>{title}</h2>
        <p>{releaseDate}</p>
        <div className="wrapper"></div>
      </div>
      <Link to={`/movieDetails/${id}`}>
        <button onClick={(e) => e.stopPropagation()}>Read More</button>
      </Link>
    </MovieCardStyled>
  );
};

const MovieCardStyled = styled(motion.div)`
  overflow: hidden;
  height: 100%;
  transform-origin: center;
  width: 100%;
  position: relative;
  pointer-events: none;
  border-radius: 1rem;

  img {
    height: 80vh;
    width: 100%;
    display: block;
  }

  button {
    width: 50%;
    position: absolute;
    bottom: 100%;
    left: 20%;
    background: none;
    border: 2px solid white;
    color: white;
    font-weight: bold;
    padding: 1rem;
    font-size: 1.5rem;
    opacity: 0;
    transition: all 0.3s ease;
    cursor: pointer;

    @media (max-width: 450px) {
      margin-left: 20%;
      width: 20%;
    }

    pointer-events: all;
  }
  &:hover {
    button {
      opacity: 1;
      bottom: 40%;
      left: 20%;
    }
    &:hover {
      span,
      h2,
      p {
        opacity: 0;
      }
    }
  }
  .floating-data {
    pointer-events: all;
    width: 110%;
    height: 105%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5 all ease;
    background: rgb(0, 0, 0, 0.6);
    span {
      padding: 1rem;
      font-size: 3rem;
      width: 100%;
      text-align: center;
    }
    p {
      width: 100%;

      position: absolute;
      top: 90%;
      transform: translateY(-50%);
      left: 0;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    }
    h2 {
      width: 100%;
      position: absolute;
      top: 50%;
      text-align: center;
      @media (max-width: 450px) {
        font-size: 1.3rem;
      }
    }
  }
`;
export default MovieCrad;
