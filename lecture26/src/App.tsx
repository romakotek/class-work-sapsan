import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greating from "./components/Greating";
import { user } from "./data/mock";

function App() {
  return (
    <div className="App">
      <Greating user={user} />
    </div>
  );
}

export default App;
