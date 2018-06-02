// External Deps
import {
  createStore,
  applyMiddleware,
  compose,
} from "redux";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";
// Internal Deps
import { rootReducer, rootSaga } from "./services";

export const history = createHistory();

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  sagaMiddleware,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);
