import React from "react";

function Snowboard({ id, brand, price, preferredRiding, directional,img }){
    return (

    
        <div className="snowboardCard">
            <h1>{brand}</h1>
            <img src={img}></img>
            <h2>{price}</h2>
            <p>{preferredRiding}</p>
            <p>{directional ? 'Directional' : 'Twin'}</p>
            <button>Edit Board Info</button>
            <button>See Reviews</button>
        </div>
    )
}

export default Snowboard