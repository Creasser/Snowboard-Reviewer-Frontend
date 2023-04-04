import React from "react";
import { Link, useParams } from "react-router-dom";
import Review from "./Review";


function SnowboardReviews({ snowboards }){

let {board_id} = useParams()
const currentBoard = snowboards.find((board) => board.id == board_id)
console.log(currentBoard.reviews)


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
                {currentBoard.reviews.map((review) => {
                    return <Review review={review} />
                })}
            </div>

            <Link to='/'>Return to Homepage</Link>
        </div>
    )
}

export default SnowboardReviews