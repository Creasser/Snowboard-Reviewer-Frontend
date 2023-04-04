import React from "react";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import BoardForm from "./components/BoardForm";
import UpdateForm from "./components/UpdateForm";

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

  function handleSnowboardUpdate(updatedBoard){
    const updatedSnowboards = snowboards.map((board) => board.id === updatedBoard.id ? updatedBoard : board)
    setSnowboards(updatedSnowboards)
  }

  return (
    <div className="app">
        <Route exact path="/">
          <BoardForm addBoardToDb={addBoardToDb} />
          <SnowboardList snowboards={snowboards} 
          handleSnowboardDelete={handleSnowboardDelete} />
        </Route>
        <Route exact path='/update/:board_id'>
          <UpdateForm snowboards={snowboards} onUpdate={handleSnowboardUpdate} />
        </Route>
    </div>
  );
}

export default App;
