import React from "react";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import BoardForm from "./components/BoardForm";

import SnowboardList from "./components/SnowboardList";

function App() {

  const [snowboards, setSnowboards] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/snowboards")
    .then(r => r.json())
    .then(data => setSnowboards(data))
  }, [])


  return (
    <div className="app">


        <Route exact path="/">
          <BoardForm />
          <SnowboardList snowboards={snowboards} />
        </Route>
      
     
    </div>
  );
}

export default App;
