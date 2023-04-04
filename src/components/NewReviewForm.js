import React, { useState } from "react";

function NewReviewForm() {
    const [newReview, setNewReview] = useState({
        rating: '',
        snowboard_id: '',
        comment: ''
    })

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value
        if (e.target.type === "checkbox") {
            value = e.target.checked
        }
        setNewReview({
            ...newReview,
            [name]: value
        })
    }

    return (
        <div>
            <form>
                <select onChange={handleChange}>
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
                placeholder="Enter Comment"
                onChange={handleChange}></input>
            </form>
        </div>
    )
}

export default NewReviewForm