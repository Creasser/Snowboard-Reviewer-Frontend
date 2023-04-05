import React, { useState } from "react";

function Review({ review, board_id, handleReviewDelete }){
    const [editReview, setEditReview] = useState(false)
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
            <button onClick={() => setEditReview(!editReview)}>Edit Review</button>
            <div>
                {editReview ? 'Review Active' : 'Inactive'}
            </div>
        </div>
    )
}

export default Review