import React, { useEffect, useState } from "react";
//REDUX
import { useSelector, useDispatch } from "react-redux";
// style
import styled from "styled-components";
//ROUTER
import { useLocation, useHistory, Link } from "react-router-dom";
//ANIMATION
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";
import Search from "../components/Search";
// ACTION
import discoverAction from "../actions/discoverAction";
import searchAction from "../actions/searchAction";
//
import { PageFadeIn } from "../animation";
const Discover = () => {
  const dispatch = useDispatch();
  const { discover, isLoadingDiscover } = useSelector(
    (state) => state.discover
  );
  const { search, isSearching } = useSelector((state) => state.search);
  const { yearSelected } = useSelector((state) => state.year);
  const { sortBy } = useSelector((state) => state.sortBy);

  const { images } = useSelector((state) => state.config);
  const { pathname } = useLocation();
  const [counter, setCounter] = useState(1);

  let history = useHistory();
  console.log(discover.results);
  useEffect(() => {
    dispatch(discoverAction(counter, yearSelected, sortBy));
    history.push(`${counter}`);
    return () => {};
  }, [dispatch, pathname, counter]);
  console.log(discover);
  useEffect(() => {
    setCounter(parseInt(pathname.split("/")[2]));
    return () => {
      dispatch({ type: "LOADING_SEARCH" });
    };
  }, []);

  // functions

  const increment = () => {
    if (counter < discover.total_pages) {
      setCounter((p) => p + 1);
    } else {
      setCounter(1);
    }
    window.scroll({ top: 0 });
  };
  const decrement = () => {
    if (counter > 1) {
      setCounter((p) => p - 1);
    } else {
      setCounter(1);
    }
    window.scroll({ top: 0 });
  };
  return (
    <StyledDiscover
      variants={PageFadeIn}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Search></Search>

      {!isSearching && search.results && (
        <Movies>
          <>
            {search.results.map((movie) => (
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
          </>
        </Movies>
      )}
      {isSearching && (
        <Movies>
          {!isLoadingDiscover && (
            <>
              {discover.results.map((movie) => (
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
            </>
          )}
        </Movies>
      )}
      {isSearching && (
        <Pages>
          <Button onClick={decrement}>Previous</Button>
          <span>
            {counter} of {discover.total_pages}
          </span>
          <Button to={`${counter}`} onClick={increment}>
            Next
          </Button>
        </Pages>
      )}
      {!isSearching && (
        <Pages>
          <Button to={`${counter}`} onClick={decrement}>
            Previous
          </Button>
          <span>
            {counter} of {search.total_pages}
          </span>
          <Button to={`${counter}`} onClick={increment}>
            Next
          </Button>
        </Pages>
      )}
    </StyledDiscover>
  );
};

const StyledDiscover = styled(motion.div)`
  height: 100%;
  min-height: 100vh;
  padding: 5rem;
`;
const Movies = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  place-items: center;
  justify-content: center;
  align-items: center;
`;
const Pages = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  span {
    margin: 0 1rem;
    padding: 1rem;
  }
`;
const Button = styled(Link)`
  padding: 0.5rem 2rem;
  background: white;
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
  border-radius: 1rem;
  text-align: center;
  margin: 0 1rem;
  text-decoration: none;
  //
`;
//const Button = styled(motion.button)`
//   padding: 0.5rem 2rem;
//   background: white;
//   font-size: 1.5rem;
//   color: black;
//   font-weight: bold;
//   border-radius: 1rem;
//   text-align: center;
//   margin: 0 1rem;
//   text-decoration: none;
//
//`;
export default Discover;
