import React, { useState } from "react";

function BoardForm({addBoardToDb}){
    const [newBoard, setNewBoard] = useState({
        brand: '',
        price: '',
        preferred_riding: '',
        directional: false,
        image_url: ''
    })

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value

        if (e.target.type === "checkbox") {
            value = e.target.checked
        }

        setNewBoard({
            ...newBoard,
            [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(newBoard)

        let addedBoard = {
            brand: newBoard.brand,
            price: newBoard.price,
            preferred_riding: newBoard.preferred_riding,
            directional: newBoard.directional,
            image_url: newBoard.image_url
        }

        fetch('http://localhost:9292/snowboards', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(addedBoard)
        })
        .then(r => r.json())
        .then(data => addBoardToDb(data))
    }

    return (
        <div className="boardForm">
            <h1>Add a New Snowboard to be Reviewed!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="formInput"
                    type='text'
                    name='brand'
                    value={newBoard.brand}
                    placeholder='Enter Snowboard Brand'
                    onChange={handleChange}
                ></input>
                <input
                    className="formInput"
                    type='text'
                    name='price'
                    value={newBoard.price}
                    placeholder='Enter Snowboard price'
                    onChange={handleChange}
                ></input>
               <select name="preferred_riding" className="formInput" onChange={handleChange}>
                    <option value='Mountain'>Mountain</option>
                    <option value='Park'>Park</option>
                    <option value='Back Country'>Back Country</option>
                    <option value='Universal'>Universal</option>
               </select>
                <input
                    className="formInput"
                    type='text'
                    name='image_url'
                    value={newBoard.image_url}
                    placeholder='Enter Snowboard image url'
                    onChange={handleChange}
                ></input>
                <input
                    className="formInput"
                    type='checkbox'
                    name='directional'
                    id="directional"
                    value={newBoard.directional}
                    onChange={handleChange}
                ></input>
                <label className="checkText">Directional?</label>
                <input
                    className="formInput"
                    type='submit'
                    name='submit'
                    value='Add Board'
                ></input>
            </form>
            
        </div>
    )
}

export default BoardForm