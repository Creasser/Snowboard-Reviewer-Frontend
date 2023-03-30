import React from "react";
import Snowboard from "./Snowboard";

function SnowboardList({ snowboards }){
    return (
        <div>
          {snowboards.map(board => {
            return  <Snowboard key={board.id} 
                    id={board.id} 
                    brand={board.brand}
                    price={board.price} 
                    preferredRiding={board.preferred_riding} 
                    directional={board.directional}
                    img={board.image_url} />
          })}
        </div>
    )
}

export default SnowboardList