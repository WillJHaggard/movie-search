// External Deps
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import TransitionGroup from "react-transition-group/TransitionGroup";
// Internal Deps
import store, { history } from "./store";
import AnimatedSwitch from "./containers/AnimatedSwitch";
import TopOf from "./utils/TopOf";
import SearchPage from "./scenes/SearchPage/Container";
import MoviePage from "./scenes/MoviePage/Container";

// Global CSS
import "sanitize.css/sanitize.css";
import "./global.scss";

// cache root
const atTarget = document.querySelector("#root");

const Root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route
        render={({ location }) => (
          <TransitionGroup component="main">
            <AnimatedSwitch
              key={location.key}
              location={location}
            >
              <Route
                exact
                path="/"
                render={() => <TopOf comp={SearchPage} />}
              />
              <Route
                exact
                path="/movie/:imdbID"
                render={() => <TopOf comp={MoviePage} />}
              />
            </AnimatedSwitch>
          </TransitionGroup>
        )}
      />
    </ConnectedRouter>
  </Provider>
);

render(Root, atTarget);
