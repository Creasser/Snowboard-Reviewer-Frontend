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
                <h2>{price}</h2>
                <p>{preferredRiding}</p>
                <p>{directional ? 'Directional' : 'Twin'}</p>
                <Link to={`/update/${id}`}>Edit Snowboard Info</Link>
                <Link to={`/reviews/${id}`} >See Reviews</Link>
                <button onClick={() => handleDelete(id)}>Delete Snowboard</button>
            </div>
       
        
    )
}

export default Snowboard


// when the edit button is clicked, I want to send the user to another page that will allow them to update the info on the board. This should be able to be done with react-router
//Send the post request from that page to update the board information, and it will persist through the backend
//One submit the user will be redirected to the home page
//add another button that will allow the user to leave a review of the board