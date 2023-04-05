import React, { useState } from "react";

function EditReview({ review, updateReview, showEdit }){
    const [editedReview, setEditReview] = useState({
        rating: '',
        snowboard_id: review.snowboard_id,
        comment: ''
    })

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value

        setEditReview({
            ...editedReview,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        
        let newEditedReview = {
            rating: editedReview.rating,
            snowboard_id: editedReview.snowboard_id,
            comment: editedReview.comment
        }

        fetch(`http://localhost:9292/snowboards/${review.snowboard_id}/reviews/${review.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEditedReview)
        })
        .then(r => r.json())
        .then(reviewData => updateReview(reviewData))

        showEdit(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select name="rating" onChange={handleChange}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                    </select>
                    <input
                        type="text"
                        name="comment"
                        value={editedReview.comment}
                        placeholder="Update Comment"
                        onChange={handleChange}>
                    </input>
                    <input
                        type='submit'
                        name='submit'
                        value='Update Review'
                    ></input>
            </form>
        </div>
    )
}

export default EditReview