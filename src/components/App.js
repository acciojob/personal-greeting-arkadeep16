import React from "react";
import { useState } from 'react';
import './../styles/App.css';

const App = () => {

  const [displayInput, setDisplayInput] = useState("");

  function getInput(event) {
    setDisplayInput(event.target.value);
  }
 
  return (
    <div>
        <p>Enter your name:</p>
        <input type="text"  onChange={getInput}></input>
        <p>{displayInput}</p>
    </div>
  )
}

export default App
