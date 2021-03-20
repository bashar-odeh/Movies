import React from "react";
//STYLE
import styled from "styled-components";
// ANIMATION
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";
import { determineGenresHandler } from "../util";
import { Link } from "react-router-dom";

const HeaderMovieCard = ({
  image,
  title,
  releaseDate,
  overview,
  vote_average,
  gener_ids,
  width,
  base_url,
  id,
}) => {
  const { genres } = useSelector((state) => state.config);
  let temp = determineGenresHandler(gener_ids, genres);
  let stringVote = vote_average.toString();
  return (
    <StyledMovieCard>
      <img src={`${base_url}/${width}/${image}`} alt="" />

      <Wrapper>
        <Link to={`/movieDetails/${id}`}>
          <button>Read More</button>
        </Link>
      </Wrapper>
      <FloatingData>
        <Rate>
          {stringVote.length === 3 ? vote_average : `${vote_average}.0`}
        </Rate>
        <Title font={title.font}>
          <h2>{title.title}</h2>
        </Title>
        <Genres>
          {temp.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </Genres>
        <p>{overview}</p>
      </FloatingData>
    </StyledMovieCard>
  );
};
const StyledMovieCard = styled(motion.div)`
  height: 100%;
  width: 100%;
  min-height: 40vh;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    position: relative;
    display: block;
  }
  border-left: 1px solid black;
  @media (max-width: 768px) {
    p {
      display: none;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;
const Wrapper = styled(motion.div)`
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  position: absolute;
  &:hover {
    background: rgb(0, 0, 0, 0.8);
    button {
      opacity: 1;
      transform: translateY(0);
    }
  }

  button {
    padding: 2rem 3rem;
    background: none;
    border: 4px solid rgb(255, 255, 255, 1);
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
    margin: 1rem;
    transform: translateY(500px);
    opacity: 0;
    transition: 0.4s transform ease;
    cursor: pointer;
  }
  z-index: 100;
`;
const FloatingData = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: block;
  background: rgb(0, 0, 0, 0.5);

  top: 0;
  left: 0;
  position: absolute;
  padding: 0rem 2rem;
  p {
    max-width: 90%;
    font-size: 1.4rem;
    padding: 2rem 0;
  }
  @media (max-width: 1200px) {
    p {
      padding: 1rem 0;
      line-height: 120%;
    }
  }
  @media (max-width: 1350px) {
    p {
      font-size: 1rem;
    }
  }
`;
const Title = styled(motion.h3)`
  height: auto;
  width: 100%;
  display: block;
  padding: 1rem 0rem;
  font-size: ${(props) => props.font};
  @media (max-width: 1350px) {
    font-size: 1.5rem;
  }
  @media (max-width: 425px) {
    h2 {
      font-size: 1rem;
    }
  }
`;
const Rate = styled(motion.span)`
  height: auto;
  width: auto;
  padding: 1rem 0rem;
  font-size: 3rem;
`;
const Genres = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  div {
    height: 10vh;
  }
  span {
    margin: 0.1rem;
    padding: 0.1rem 0.2rem;
    width: auto;
    height: 50px;
    font-size: 1.2rem;
    font-weight: bolder;
  }
  @media (max-width: 1350px) {
    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    span {
      height: 50px;
      padding: 1rem;
    }
  }
  @media (max-width: 425px) {
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
    span {
      font-size: 0.7rem;
      padding: 0.5rem;
      height: 8vh;
    }
  }
`;
export default HeaderMovieCard;
