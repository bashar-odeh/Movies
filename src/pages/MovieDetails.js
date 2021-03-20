import React, { useState, useEffect } from "react";
import movieDetailsAction from "../actions/movieDetailAction";
import { useLocation } from "react-router-dom";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
// images
import fullstar from "../images/fullstar.png";
import Cast from "../components/Cast";
import Recomendations from "../components/Recomendations";
//router
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
// util
import { starsHandler } from "../util";
import Footer from "../components/Footer";
import MovieImageSlider from "../components/MovieImageSlider";
import Loading from "../components/Loading";
import { PageFadeIn, FadeIn, movieDetailAnimation } from "../animation";

const MovieDetails = ({ genres, images }) => {
  const dispatch = useDispatch();
  const { details, isLoadingDetails } = useSelector((state) => state.details);
  const location = useLocation();
  let id = location.pathname.split("/")[2];
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    dispatch(movieDetailsAction(id));
  }, [dispatch, id]);

  const ImageSliderHandler = (e) => {
    setShowSlider(!showSlider);
    if (showSlider) {
      document.body.style.overflow = "hidden";
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    }
  };
  return (
    <div>
      {isLoadingDetails && <Loading></Loading>}
      {!isLoadingDetails && (
        <Details
          variants={movieDetailAnimation}
          animate="show"
          initial="hidden"
          exit="exit"
        >
          <BackGround
            image={
              details.images.posters[0]
                ? `${images.base_url}original/${details.images.posters[0].file_path}`
                : `${images.base_url}original/${details.backdrop_path}`
            }
          >
            <div className="background-wrapper"></div>
          </BackGround>
          <Header>
            <Poster>
              <img
                src={`${images.base_url}original/${details.backdrop_path}`}
                alt=""
              />

              <button onClick={() => (window.location = `${details.homepage}`)}>
                Main Site
              </button>
            </Poster>
            <Info>
              <div>
                <Title>
                  {details.title} |
                  <span> {details.release_date.substring(0, 4)}</span>
                  <Rate>
                    {details.vote_average && starsHandler(details.vote_average)}
                  </Rate>
                </Title>
                <Status>Status: {details.status}</Status>
                {details.spoken_languages[0] &&
                  details.spoken_languages[0].english_name && (
                    <Language>
                      Language: {details.spoken_languages[0].english_name}
                    </Language>
                  )}
                <RunTime>Runtime: {details.runtime}min</RunTime>

                <Genres>
                  <h2>Genres</h2>
                  {details.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </Genres>
              </div>
            </Info>
          </Header>
          <Description>
            <span>Description:</span>
            <br></br>
            {details.overview}
          </Description>
          {details.keywords.keywords.length !== 0 && (
            <div>
              <h3>Keywords </h3>
              <Keywords>
                {details.keywords.keywords.map((keyword) => (
                  <li key={keyword.id}>{keyword.name},</li>
                ))}
              </Keywords>
            </div>
          )}

          <Images onClick={ImageSliderHandler}>
            {details.images.backdrops.map((image) => (
              <img
                key={uuid()}
                src={`${images.base_url}original/${image.file_path}`}
              />
            ))}
          </Images>
          {details.videos.results.length !== 0 && (
            <Videos>
              <iframe
                src={`https://www.youtube.com/embed/${details.videos.results[0].key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </Videos>
          )}
          <Cast cast={details.credits.cast.slice(0, 10)} images={images}></Cast>
          {details.recommendations.results[0] && (
            <Recomendations
              recommendations={details.recommendations.results}
              images={images}
            ></Recomendations>
          )}
        </Details>
      )}
      {showSlider && details.images && (
        <MovieImageSlider
          images={details.images.backdrops}
          base_url={images.base_url}
          setShowSlider={setShowSlider}
        ></MovieImageSlider>
      )}
      <Footer />{" "}
    </div>
  );
};

const Details = styled(motion.div)`
  height: auto;
  min-height: 100vh;
  padding: 0 3rem;
  font-family: "Abril";
`;
const BackGround = styled(motion.div)`
  position: relative;
  height: auto;
  min-height: 100vh;
  width: 100%;
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(50px);
  -webkit-filter: blur(50px);
  @media (max-width: 950px) {
    height: 150vh;
  }
  position: relative;
  .background-wrapper {
    height: 100%;
    width: 100%;
    background: rgb(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const Header = styled(motion.div)`
  height: 100%;
  min-height: 90vh;
  width: 100%;
  position: absolute;
  display: flex;
  top: 75%;
  left: 50%;
  padding: 2rem 4rem;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-column-gap: 0.5rem;
  @media (max-width: 950px) {
    grid-template-rows: repeat(auto-fill, minmax(500px, 1fr));
  }
`;
const Info = styled(motion.div)`
  height: 100%;
  width: 100%;
  min-width: 50vw;
  margin: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 950px) {
  }
`;
const Title = styled(motion.div)`
  height: auto;
  min-height: 20vh;
  width: 100%;
  font-size: 4rem;
  @media (min-width: 1400px) {
    font-size: 6rem;
  }
`;
const Rate = styled(motion.div)`
  font-size: 2rem;
  padding: 1rem 0;
  @media (min-width: 1400px) {
    font-size: 3rem;
  }
`;
const Description = styled(motion.p)`
  margin-top: 3rem;
  font-size: 1.5rem;
  padding: 1rem;

  span {
    font-size: 1rem;
  }
  @media (max-width: 1000px) {
    padding: 4rem 0rem;
    margin-top: 12rem;
  }
`;
const Poster = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  img {
    height: 70vh;
    width: 100%;
    border: 5px solid white;
    object-fit: cover;
  }
  button {
    height: 10vh;
    font-size: 2rem;
    width: 100%;
    text-align: center;
    margin: 0;
    margin-top: 1rem;
    border-radius: 1rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background: black;
      color: white;
    }
  }
`;
const Language = styled(motion.div)`
  height: 10vh;
  overflow: hidden;
  font-size: 1.5rem;
  @media (min-width: 1400px) {
    font-size: 3rem;
  }
`;
const Status = styled(motion.div)`
  height: 10vh;
  overflow: hidden;
  font-size: 1.5rem;
  @media (min-width: 1400px) {
    font-size: 3rem;
  }
`;
const Videos = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 10rem;
  padding-top: 2rem;
  iframe {
    min-height: 80vh;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 950px) {
    padding: 0;
  }
`;
const RunTime = styled(motion.div)`
  height: 10vh;
  overflow: hidden;
  font-size: 1.5rem;
  @media (min-width: 1400px) {
    font-size: 3rem;
  }
`;
const Images = styled(motion.div)`
  height: 100%;
  width: 100%;
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  img {
    height: 100%;
    width: 100%;
  }
`;
const Genres = styled(motion.div)`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-wrap: initial;
  min-height: 10vh;
  font-size: 1.2rem;
  align-items: center;
  span {
    font-size: 1.2rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  h2 {
    padding-left: 0;
  }
`;
const Keywords = styled(motion.div)`
  height: 30%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5rem;
  align-items: center;
  padding: 1rem;
  li {
    list-style-type: none;
    margin-right: 0.5rem;
  }
  h3 {
    padding: 0;
  }
`;
const WordsWrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  h4 {
    padding: 2rem 0;
  }
`;
export default MovieDetails;
