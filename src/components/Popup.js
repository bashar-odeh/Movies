import React from "react";
//REDUX
import { useSelector, useDispatch } from "react-redux";
// style
import styled from "styled-components";
//ROUTER
import { Link, useHistory } from "react-router-dom";
//ANIMATION
import { motion } from "framer-motion";
import { PopupAnimation } from "../animation";
import MovieCard from "../components/MovieCard";
// ACTION
import HomePageMoviesAction from "../actions/HomePageMoviesAction";

const Popup = ({ type, popularMovies, upcominMovies }) => {
  const dispatch = useDispatch();

  const { images } = useSelector((state) => state.config);

  const history = useHistory();
  // functions
  const PageHandler = (e, direction) => {
    e.stopPropagation();
    if (direction === "next") {
      if (type === "popular") {
        dispatch(HomePageMoviesAction(1, parseInt(popularMovies.page + 1)));
      } else {
        dispatch(HomePageMoviesAction(parseInt(popularMovies.page + 1), 1));
      }
    } else {
      if (type === "popular") {
        dispatch(HomePageMoviesAction(1, parseInt(popularMovies.page - 1)));
      } else {
        dispatch(HomePageMoviesAction(parseInt(popularMovies.page - 1), 1));
      }
    }
    document.querySelector("#parent").scroll({ top: 0 });
  };
  const exitHandler = () => {
    history.push("/");
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
  };
  return (
    <StyledPopup
      id="parent"
      onClick={exitHandler}
      variants={PopupAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Popular</h1>
      <Movies>
        {type === "popular" &&
          popularMovies.results &&
          popularMovies.results.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.poster_path}
              releaseDate={movie.release_date}
              vote_average={movie.vote_average}
              base_url={images.base_url}
            />
          ))}{" "}
        {type === "upcoming" &&
          popularMovies.results &&
          upcominMovies.results.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.poster_path}
              releaseDate={movie.release_date}
              vote_average={movie.vote_average}
              base_url={images.base_url}
            />
          ))}
      </Movies>
      <Pages>
        <Button
          onClick={(e) => {
            PageHandler(e, "pre");
          }}
        >
          Previous
        </Button>
        <span></span>
        <Button
          onClick={(e) => {
            PageHandler(e, "next");
          }}
        >
          Next
        </Button>
      </Pages>
    </StyledPopup>
  );
};

const StyledPopup = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.9);
  z-index: 999;
  pointer-events: all;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: #081b27;
  }
  h1 {
    width: 100%;
    padding: 0 5rem;
    padding-top: 1rem;
    transform: translateY(2rem);
    font-size: 3rem;
  }
`;

const Movies = styled(motion.div)`
  position: relative;
  padding: 5rem;
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  place-items: center;
  justify-content: center;
  align-items: center;
  z-index: 100;
  pointer-events: all;

  pointer-events: all;
`;
const Pages = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  span {
    margin: 0 1rem;
    padding: 1rem;
  }
  z-index: 11;
`;
const Button = styled(Link)`
  height: 10%;
  padding: 0.5rem 2rem;
  background: white;
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
  border-radius: 1rem;
  text-align: center;
  margin: 0 1rem;
  text-decoration: none;
`;
export default Popup;
