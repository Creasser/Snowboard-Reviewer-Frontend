import React from "react";

function Review({ review, board_id }){

    function handleReviewDelete(id){
        console.log(id)
        
    }


    //could use some conditional rendering with state to show an edit menu for the review and be able to change the info
    //can do the same for the new review button


    return (
        <div>
            <h1>{`${review.rating}/10`}</h1>
            <h3>{review.comment}</h3>
            <button onClick={() => handleReviewDelete(review.id)}>Delete Review</button>
        </div>
    )
}

export default Review