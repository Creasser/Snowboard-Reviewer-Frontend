import React from "react";
import { Link, useParams } from "react-router-dom";
import Review from "./Review";
import NewReviewForm from "./NewReviewForm";

function SnowboardReviews({ snowboards, handleReviewDelete, addNewReview, updateReview }){

let {board_id} = useParams()
const currentBoard = snowboards.find((board) => board.id == board_id)

    return (
        <div>
            <div className="snowboardCard">
                <h1>{currentBoard.brand}</h1>
                <img src={currentBoard.image_url} 
                alt="Snowboard" 
                className="boardImage"></img>
                <h2>{currentBoard.price}</h2>
                <p>{currentBoard.preferred_riding}</p>
                <p>{currentBoard.directional ? 'Directional' : 'Twin'}</p>
            </div>
            <div>
                <h3>Add a New Review</h3>
                <NewReviewForm board_id={board_id} addNewReview={addNewReview} />
            </div>
            <div>
                {currentBoard.reviews.map((review) => {
                    return <Review key={review.id} review={review} board_id={board_id} handleReviewDelete={handleReviewDelete} updateReview={updateReview} />
                })}
            </div>

            <Link to='/'>Return to Homepage</Link>
        </div>
    )
}

export default SnowboardReviews