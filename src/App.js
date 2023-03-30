import React from "react";
import { useState, useEffect } from "react";
import SnowboardList from "./SnowboardList";

function App() {

  const [snowboards, setSnowboards] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/snowboards")
    .then(r => r.json())
    .then(data => setSnowboards(data))
  }, [])


  return (
    <div className="App">
     <SnowboardList snowboards={snowboards} />
    </div>
  );
}

export default App;
