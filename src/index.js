import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/Main";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Sample for learn session</h1>
      <Main />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
