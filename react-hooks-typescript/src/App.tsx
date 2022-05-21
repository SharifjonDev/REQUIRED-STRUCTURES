import React from "react";
//import EventMoreReactComponent from "./components/EventMoreReactComponent";
import UseContextComponent from "./components/UseContextComponent/UseContextComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import CustomHookComponent from "./components/UseRefComponent/CustomHookComponent";
import UseRefComponent from "./components/UseRefComponent/UseRefComponent";
import UseStateComponent from "./components/UseStateComponent";

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>Custom Hook</h1>
      <CustomHookComponent />
      {/* <h1>Event More</h1>
      <EventMoreReactComponent /> */}
    </div>
  );
}

export default App;
