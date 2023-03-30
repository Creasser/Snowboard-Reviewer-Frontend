import React from "react";
import { useState, useEffect } from "react";

function App() {

  const [snowboards, setSnowboards] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/snowboards")
    .then(r => r.json())
    .then(data => setSnowboards(data))
  })

  const boardsToDisplay = snowboards.map(board => {
    <h1></h1>
  })

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
