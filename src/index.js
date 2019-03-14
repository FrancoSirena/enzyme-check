import React, { useRef } from "react";
import ReactDOM from "react-dom";

import Main from "./components/Main";
import "./styles.css";

function App() {
  const input = useRef();
  return (
    <div className="App">
      <h1>Sample for learn session</h1>
      <label htmlFor="name">Your name</label>
      <input id="name" ref={input} type="text" />
      <Main myName={input.current.value} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
