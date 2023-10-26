import React from "react";
import "./styles.css";

import { Date } from "./Date";
import { DogImage } from "./DogImage";

export default function App() {
  return (
    <div className="App">
      <h5>Load the dates on demand</h5>
      <Date />
      <div id="divider" />
      <h5>Load images on demand by clicking them</h5>
      {[1, 2, 3, 4].map(num => (
        <DogImage num={num} key={`${num}`} />
      ))}
    </div>
  );
}
