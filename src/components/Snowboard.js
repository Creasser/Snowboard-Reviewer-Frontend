import React from "react";
import { Link } from "react-router-dom";


function Snowboard({ id, brand, price, preferredRiding, directional, img, onBoardDelete }){

    function handleDelete(id){
        console.log(id)
        fetch(`http://localhost:9292/snowboards/${id}`, {
            method: 'DELETE'
        })

        onBoardDelete(id)
    }

    return (

            <div className="snowboardCard">
                <h1>{brand}</h1>
                <img src={img} alt="Snowboard" className='boardImage'></img>
                <h2>${price}</h2>
                <p>{preferredRiding}</p>
                <p>{directional ? 'Directional' : 'Twin'}</p>
                <Link to={`/update/${id}`} className="boardLinks">Edit Snowboard Info</Link>
                <Link to={`/reviews/${id}`} className="boardLinks" >See Reviews</Link>
                <button onClick={() => handleDelete(id)} className="deleteBoardBtn">Delete Snowboard</button>
            </div>
       
        
    )
}

export default Snowboard