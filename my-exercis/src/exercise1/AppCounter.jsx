import React from "react";
import Counter from "./Counter";
import "./counter.css"

function AppCounter() {
  let arrCounter = [];
  for (let i = 0; i < 10; i++) {
    arrCounter.push(
      <div>
        <Counter key={i} id={i + 1} />
      </div>
    );
  }
  return <div className="container">{arrCounter}</div>;
}

export default AppCounter;
