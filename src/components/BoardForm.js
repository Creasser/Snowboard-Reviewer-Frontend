import React, { useState } from "react";

function BoardForm(){
    const [newBoard, setNewBoard] = useState({
        brand: '',
        price: '',
        preferred_riding: '',
        directional: '',
        image_url: ''
    })

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value

        setNewBoard({
            ...newBoard,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div>
            <h1>Add a New Snowboard to be Reviewed!</h1>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='brand'
                value={newBoard.brand}
                placeholder='Enter Snowboard Brand'
                onChange={handleChange}
                ></input>
                <input
                type='text'
                name='price'
                value={newBoard.price}
                placeholder='Enter Snowboard price'
                onChange={handleChange}
                ></input>
                <input
                type='text'
                name='preferred_riding'
                value={newBoard.preferred_riding}
                placeholder='Enter Snowboard preferred riding'
                onChange={handleChange}
                ></input>
                <input
                type='text'
                name='image_url'
                value={newBoard.image_url}
                placeholder='Enter Snowboard image url'
                onChange={handleChange}
                ></input>
                <input
                type='text'
                name='directional'
                value={newBoard.directional}
                placeholder='Enter Snowboard directional'
                onChange={handleChange}
                ></input>
                <input
                type='submit'
                name='submit'
                value='Add Board'
                ></input>
            </form>
        </div>
    )
}

export default BoardForm