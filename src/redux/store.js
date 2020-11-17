import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducers";
import { FETCH_USERS, FETCH_ERROR } from "./actions";

export const initialState = {
  users: [],
  total: 0,
  health: 0,
  error: null,
};

const middleware = applyMiddleware(thunk, logger);
export const store = createStore(reducer, initialState, middleware);

store.dispatch((dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const users = data.map((user) => {
        return {
          ...user,
          health: Math.floor(Math.random() * (100 - 1000) * -1),
          amount: 1,
        };
      });
      dispatch({
        type: FETCH_USERS,
        payload: users,
      });
    })
    .catch((err) => dispatch({ type: FETCH_ERROR, payload: err }));
});
