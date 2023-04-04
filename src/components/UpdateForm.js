import React, { useState } from "react";
import { useParams } from "react-router-dom";

function UpdateForm({ snowboards, onUpdate }){
let {board_id} = useParams()
const currentBoard = snowboards.find((board) => board.id == board_id)

const [updatedBoard, setUpdatedBoard] = useState({
    brand: currentBoard.brand,
    price: currentBoard.price,
    preferred_riding: currentBoard.preferred_riding,
    directional: currentBoard.directional,
    image_url: currentBoard.image_url
})



function handleChange(e){
    const name = e.target.name
    let value = e.target.value

    if (e.target.type === "checkbox") {
        value = e.target.checked
    }

    setUpdatedBoard({
        ...updatedBoard,
        [name]: value
    })

}

function handleSubmit(e){
    e.preventDefault()
    console.log(updatedBoard)
    let updatedBoardData = {
        brand: updatedBoard.brand,
        price: updatedBoard.price,
        preferred_riding: updatedBoard.preferred_riding,
        directional: updatedBoard.directional,
        image_url: updatedBoard.image_url
    }

    fetch()
}


    return (
        <div>
          <div>{`You are updating the ${currentBoard.brand} ${currentBoard.preferred_riding} board!`}</div>
          <form onSubmit={handleSubmit}>
          <input
                    type='text'
                    name='brand'
                    value={updatedBoard.brand}
                    placeholder='Enter Snowboard Brand'
                    onChange={handleChange}
                ></input>
                <input
                    type='text'
                    name='price'
                    value={updatedBoard.price}
                    placeholder='Enter Snowboard price'
                    onChange={handleChange}
                ></input>
               <select name="preferred_riding" onChange={handleChange}>
                    <option value='Mountain'>Mountain</option>
                    <option value='Park'>Park</option>
                    <option value='Back Country'>Back Country</option>
                    <option value='Universal'>Universal</option>
               </select>
                <input
                    type='text'
                    name='image_url'
                    value={updatedBoard.image_url}
                    placeholder='Enter Snowboard image url'
                    onChange={handleChange}
                ></input>
                <input
                    type='checkbox'
                    name='directional'
                    id="directional"
                    value={updatedBoard.directional}
                    onChange={handleChange}
                ></input>
                <label>Directional?</label>
                <input
                    type='submit'
                    name='submit'
                    value='Add Board'
                ></input>
          </form>
        </div>
    )
}

export default UpdateForm