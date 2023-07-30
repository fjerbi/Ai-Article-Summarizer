import React from "react";

import "./App.css";
import Demo from "./components/Demo";
import Hero from "./components/hero";
const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
    <div className="app">
    <Hero/>
    <Demo/>
    </div>
    </main>
  );
};

export default App;