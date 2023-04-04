import React from "react";

function Review({ review }){

    return (
        <div>
            <h1>{`${review.rating}/10`}</h1>
            <h3>{review.comment}</h3>
        </div>
    )
}

export default Review