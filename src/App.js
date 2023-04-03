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

  function addBoardToDb(board){
    setSnowboards([...snowboards, board])
  }

  function handleSnowboardDelete(id){
    const updatedSnowboards = snowboards.filter((snowboard) => snowboard.id !== id)

    setSnowboards(updatedSnowboards)
  }


  return (
    <div className="app">


        <Route exact path="/">
          <BoardForm addBoardToDb={addBoardToDb} />
          <SnowboardList snowboards={snowboards} handleSnowboardDelete={handleSnowboardDelete} />
        </Route>

        <Route exact path='/update/:board_id'>
          
        </Route>
      
     
    </div>
  );
}

export default App;
