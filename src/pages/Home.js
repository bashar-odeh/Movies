import React, { useEffect } from "react";
//STYLE
import styled from "styled-components";
// ANIMATION
import { motion } from "framer-motion";
import { PageFadeIn, FadeIn } from "../animation";
//ACTION
import HomePageMoviesAction from "../actions/HomePageMoviesAction";
// redux
import { useSelector, useDispatch } from "react-redux";
import HeaderMovieCard from "../components/HeaderMovieCard";
// router
import { useLocation } from "react-router-dom";
//COMPONENTS
import Popular from "../components/Popular";
import GenersSample from "../components/GenersSample";
import TopRated from "../components/TopRated";
import Upcoming from "../components/Upcoming";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import useScroll from "../components/useScroll";
import Loading from "../components/Loading";

const Home = () => {
  let {
    trendingMovies,
    popularMovies,
    topRatedMovies,
    upcominMovies,
    isLoadingHomePageMovies,
  } = useSelector((state) => state.homePageMovies);
  const { images } = useSelector((state) => state.config);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  let type = pathname.split("/")[1];
  if (type) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
    document.body.style.overflowX = "hidden";
  }
  useEffect(() => {
    dispatch(HomePageMoviesAction());
    dispatch({ type: "EMPTY" });
  }, []);

  // function getOnly 5 english Movies
  const englishMoviesHandler = () => {
    if (trendingMovies) {
      let englishTrendingMovies = trendingMovies.filter((movie) => {
        if (movie.original_language === "en") {
          return movie;
        }
      });
      trendingMovies = englishTrendingMovies.slice(0, 4);
    }
  };
  englishMoviesHandler();
  return (
    <StyledHome>
      {type && (
        <Popup
          type={type}
          popularMovies={popularMovies}
          upcominMovies={upcominMovies}
        ></Popup>
      )}
      {isLoadingHomePageMovies && <Loading></Loading>}
      {!isLoadingHomePageMovies && (
        <motion.div
          variants={PageFadeIn}
          animate="show"
          initial="hidden"
          exit="exit"
        >
          <StyledHeader>
            {trendingMovies.map((movie, index) => (
              <HeaderMovieCard
                key={movie.id}
                id={movie.id}
                className="card"
                image={movie.backdrop_path}
                title={
                  index === 1
                    ? { title: movie.title, font: "1.3rem" }
                    : { title: movie.title, font: "2rem" }
                }
                releaseDate={movie.release_date}
                overview={""}
                vote_average={movie.vote_average}
                gener_ids={movie.genre_ids}
                width="original"
                base_url={images.base_url}
              />
            ))}
          </StyledHeader>
          <StyledMain>
            <GenersSample />
            {popularMovies && (
              <Popular popularMovies={popularMovies} images={images} />
            )}
            {topRatedMovies[0] && (
              <TopRated
                topRatedMovies={topRatedMovies[0]}
                id={topRatedMovies[0].id}
                base_url={images.base_url}
                isLoadingHomePageMovies={isLoadingHomePageMovies}
              />
            )}
            {upcominMovies && (
              <Upcoming upcominMovies={upcominMovies} images={images} />
            )}
          </StyledMain>

          <Footer />
        </motion.div>
      )}
    </StyledHome>
  );
};
const StyledHome = styled(motion.div)`
  display: block;
  position: relative;
`;
const StyledHeader = styled(motion.header)`
  padding: 4rem 2rem;
  min-height: 70vh;
  width: 100vw;
  display: grid;
  overflow-x: hidden;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(1fr, 2fr));
  grid-template-rows: 350px;
  overflow: hidden;
  div:nth-of-type(1) {
    grid-row: 1/2;
    grid-column: 1/3;
  }
  div:nth-of-type(2) {
    grid-row: 1/3;
  }
  div:nth-of-type(3) {
    grid-column: 1/2;
  }
  div:nth-of-type(4) {
    grid-row: 1/3;
  }
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    div {
      margin-bottom: 1rem;
      height: 80vh;
    }
  }
`;

const StyledMain = styled(motion.main)`
  padding: 2rem;
  overflow-x: hidden;
`;

export default Home;
