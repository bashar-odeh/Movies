import React, { useEffect } from "react";
// pages
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import MovieDetails from "./pages/MovieDetails";
//COMPONENTS
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import GlobalStyle from "./components/GlobalStyle";
// route
import { Route, Switch, useLocation } from "react-router-dom";
//redux

import { useDispatch, useSelector } from "react-redux";
// action
import configurationAction from "./actions/configurationAction";
// ANIMATION
import { AnimatePresence } from "framer-motion";
function App() {
  const { images, genres, isLoadingConfig } = useSelector(
    (state) => state.config
  );
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(configurationAction());
  }, []);
  return (
    <div className="App">
      {
        //never show the page unless you get all the config
      }
      {!isLoadingConfig && (
        <>
          <GlobalStyle />
          <Navbar />
          <NavbarMobile />
          <AnimatePresence exitBeforeEnter>
            {" "}
            <Switch location={location} key={location.pathname}>
              <Route path={["/", "/upcoming", "/popular"]} exact>
                <Home />
              </Route>
              <Route path={"/discover/:id"}>
                <Discover />
              </Route>
              <Route path="/movieDetails/:id">
                <MovieDetails images={images} genres={genres} />
              </Route>
            </Switch>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
