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

    return (
        <div>
            <h1>Add a New Snowboard to be Reviewed!</h1>
            <form>
                <input
                type='text'
                name='brand'
                value={newBoard.brand}
                placeholder='Enter Snowboard Brand'
                onChange={handleChange}
                ></input>
            </form>
        </div>
    )
}

export default BoardForm