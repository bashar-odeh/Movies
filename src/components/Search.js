import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fillYears } from "../util";
import searchAction from "../actions/searchAction";
import discoverAction from "../actions/discoverAction";
import { PageFadeIn, FadeIn } from "../animation";

const Search = () => {
  const { query } = useSelector((state) => state.query);
  const { yearSelected } = useSelector((state) => state.year);
  const { sortBy } = useSelector((state) => state.sortBy);
  const input = useRef(null);
  const dispatch = useDispatch();
  const sortByHandler = (e) => {
    dispatch({ type: "SORT", payload: e.target.value });
    dispatch({ type: "LOADING_SEARCH" });
    dispatch(discoverAction(1, yearSelected, e.target.value));
  };
  const searchBarHandler = (e) => {
    dispatch({ type: "query", payload: e.target.value });
  };
  const DiscoverHandler = (e) => {
    input.current.value = "";
    dispatch(searchAction(query));
  };
  const discoverYear = (e) => {
    dispatch({ type: "YEAR", payload: e.target.value });
    dispatch(discoverAction(1, e.target.value, sortBy));
    dispatch({ type: "LOADING_SEARCH" });
  };
  return (
    <StyledSearch variants={FadeIn} animate="show" initial="hidden" exit="exit">
      <StyledInput>
        <input
          onChange={searchBarHandler}
          type="text"
          name="query"
          id="query"
          required={true}
          ref={input}
        />
        <button type="button" onClick={DiscoverHandler}>
          Search
        </button>
      </StyledInput>
      <StyledSelect onChange={discoverYear} name="year" id="year">
        <option name="year" value="">
          Year
        </option>
        {fillYears()}
      </StyledSelect>{" "}
      <StyledSelect onChange={sortByHandler} name="sort" id="sort">
        <option value="popularity.desc">Sort By</option>
        <option value="popularity.asc">Popularity ascending</option>
        <option value="popularity.desc">Popularity descending </option>
        <option value="release_date.asc">Release date ascending</option>
        <option value="release_date.desc">Release date descending </option>
        <option value="vote_average.asc">Rate ascending</option>
        <option value="vote_average.desc">Rate descending </option>
      </StyledSelect>
    </StyledSearch>
  );
};
const StyledSearch = styled(motion.div)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const StyledSelect = styled.select`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 20%;
  border: none;
  font-size: 1.2rem;
  margin-left: 1rem;
  @media (max-width: 750px) {
    width: 100%;
  }
`;
const StyledInput = styled.div`
  width: 100%;
  height: 100;
  padding: 1rem 0rem;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
  button {
    width: 30%;
    height: 100%;
    padding: 1rem;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    button {
      width: 100%;
    }
    input {
      width: 200%;
      height: 100%;
      padding: 1rem;
    }
  }
`;
export default Search;
