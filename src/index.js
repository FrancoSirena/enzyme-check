import React, { useState } from "react";
import ReactDOM from "react-dom";

import Main from "./components/Main";
import "./styles.css";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <h1>Sample for learn session</h1>
      <label htmlFor="name">Your name</label>
      <input
        id="name"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <hr />
      <Main myName={name} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
