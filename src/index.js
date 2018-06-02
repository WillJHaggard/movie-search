// External Deps
import React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import { Route, matchPath } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import TransitionGroup from "react-transition-group/TransitionGroup";
// Internal Deps
import store, { history } from "./store";
import { AnimatedSwitch } from "./components";
import SearchPage from "./scenes/SearchPage/Container";

// CSS
import "sanitize.css/sanitize.css";
import "./index.css";

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
                component={SearchPage}
              />
            </AnimatedSwitch>
          </TransitionGroup>
        )}
      />
    </ConnectedRouter>
  </Provider>
);

render(Root, atTarget);
