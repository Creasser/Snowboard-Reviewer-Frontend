import React, { useState } from "react";
import EditReview from "./EditReview";

function Review({ review, board_id, handleReviewDelete, updateReview }){
    const [showEditReview, setShowEditReview] = useState(false)
    function onDelete(id){
        fetch(`http://localhost:9292/snowboards/${board_id}/reviews/${id}`, {
            method: 'DELETE'
        })
        handleReviewDelete(review)
    }

    return (
        <div>
            <h1>{`${review.rating}/10`}</h1>
            <h3>{review.comment}</h3>
            <button onClick={() => onDelete(review.id)}>Delete Review</button>
            <button onClick={() => setShowEditReview(!showEditReview)}>Edit Review</button>
            <div>
                {showEditReview ? <EditReview review={review} updateReview={updateReview} showEdit={setShowEditReview} /> : null}
            </div>
        </div>
    )
}

export default Review