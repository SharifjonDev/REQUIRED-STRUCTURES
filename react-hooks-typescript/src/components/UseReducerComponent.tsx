import React, { useReducer } from "react";

const initialState = {
  counter: 100,
};

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

const reducer = (state: typeof initialState, action: ACTIONTYPES) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return { ...state, counter: state.counter - action.payload };

    default:
      return state;
  }
};

function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>{state.counter}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement
      </button>
    </div>
  );
}

export default UseReducerComponent;
