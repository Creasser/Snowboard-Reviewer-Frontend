import React from "react";

function Snowboard({ id, brand, price, preferredRiding, directional }){
    return (
        <div>
            <h1>{brand}</h1>
            <h2>{price}</h2>
            <p>{preferredRiding}</p>
            <p>{directional ? 'Directional' : 'Split'}</p>
        </div>
    )
}

export default Snowboard