import React, { useState } from "react";

function NewReviewForm({ board_id, addNewReview }) {
    const [newReview, setNewReview] = useState({
        rating: '',
        snowboard_id: board_id,
        comment: ''
    })

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value

        setNewReview({
            ...newReview,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        let review = {
            rating: newReview.rating,
            snowboard_id: newReview.snowboard_id,
            comment: newReview.comment
        }
        
        fetch(`http://localhost:9292/snowboards/${board_id}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(r => r.json())
        .then(data => addNewReview(data))

        setNewReview({
            rating: '',
            snowboard_id: board_id,
            comment: ''
        })
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
                    value={newReview.comment}
                    placeholder="Enter Comment"
                    onChange={handleChange}>
                </input>
                <input
                    type='submit'
                    name='submit'
                    value='Add Review'
                ></input>
            </form>
        </div>
    )
}

export default NewReviewForm