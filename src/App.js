import React from "react";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import BoardForm from "./components/BoardForm";
import UpdateForm from "./components/UpdateForm";
import SnowboardReviews from "./components/SnowboardReviews";
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

  function handleReviewDelete(deletedReview){
    const currentBoard = snowboards.find((board) => board.id === deletedReview.snowboard_id)
    const updatedReviews = currentBoard.reviews.filter((review) => review.id !== deletedReview.id)
    currentBoard.reviews = updatedReviews
    const updatedSnowboards = snowboards.map((board) => board.id === currentBoard.id ? currentBoard : board)
    setSnowboards(updatedSnowboards)
  }

  function addNewReview(newReview){
    const currentBoard = snowboards.find((board) => board.id === newReview.snowboard_id)
    currentBoard.reviews.push(newReview)
    const updatedSnowboards = snowboards.map((board) => board.id === currentBoard.id ? currentBoard : board)
    setSnowboards(updatedSnowboards)
  }

  function updateReview(updatedReview){ 
    const currentBoard = snowboards.find((board) => board.id === updatedReview.snowboard_id)
    const upReviews = currentBoard.reviews.map((review) => review.id === updatedReview.id ? updatedReview : review)
    currentBoard.reviews = upReviews
    const updatedSnowboards = snowboards.map((board) => board.id === currentBoard.id ? currentBoard : board)
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
        <Route exact path='/reviews/:board_id'>
          <SnowboardReviews snowboards={snowboards} handleReviewDelete={handleReviewDelete} addNewReview={addNewReview} updateReview={updateReview} />
        </Route>
        
    </div>
  );
}

export default App;
