import React from "react";
import { useState, useEffect } from "react";
import Snowboard from "./Snowboard";

function App() {

  const [snowboards, setSnowboards] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/snowboards")
    .then(r => r.json())
    .then(data => setSnowboards(data))
  }, [])

  const boardsToDisplay = snowboards.map(board => {
    return <Snowboard key={board.id} 
    id={board.id} 
    brand={board.brand}
    price={board.price} 
    preferredRiding={board.preferred_riding} 
    directional={board.directional} />
  })

  return (
    <div className="App">
     {boardsToDisplay}
    </div>
  );
}

export default App;
