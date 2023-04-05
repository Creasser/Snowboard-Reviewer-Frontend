import React, { useState } from "react";
import EditReview from "./EditReview";

function Review({ review, board_id, handleReviewDelete }){
    const [showEditReview, setshowEditReview] = useState(false)
    function onDelete(id){
        fetch(`http://localhost:9292/snowboards/${board_id}/reviews/${id}`, {
            method: 'DELETE'
        })
        handleReviewDelete(review)
    }


    //could use some conditional rendering with state to show an edit menu for the review and be able to change the info
    //can do the same for the new review button


    return (
        <div>
            <h1>{`${review.rating}/10`}</h1>
            <h3>{review.comment}</h3>
            <button onClick={() => onDelete(review.id)}>Delete Review</button>
            <button onClick={() => setshowEditReview(!showEditReview)}>Edit Review</button>
            <div>
                {showEditReview ? <EditReview review={review} /> : null}
            </div>
        </div>
    )
}

export default Review