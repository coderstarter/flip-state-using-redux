import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import "./index.css";


const TOGGLE_LIGHT = "TOGGLE_LIGHT";


const toggleLight = () => {
  return {
    type: TOGGLE_LIGHT
  };
};

const initialState = {
  isLightOn: true
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIGHT:
      return {
        ...state,
        isLightOn: !state.isLightOn
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const Room = () => {
  const isLightOn = useSelector(state => state.isLightOn);
  const dispatch = useDispatch();

  const toggleLightHandler = () => {
    dispatch(toggleLight());
  };

  const lightedness = isLightOn ? "lit" : "dark";

  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={toggleLightHandler}>flip</button>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Room />
  </Provider>,
  document.getElementById("root")
);
