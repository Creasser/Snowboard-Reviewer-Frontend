import React from "react";
import Snowboard from "./Snowboard";

function SnowboardList({ snowboards, handleSnowboardDelete }){
    return (
        <div className="snowboardCardContainer">
          {snowboards.map(board => {
            return  <Snowboard key={board.id} 
                    id={board.id} 
                    brand={board.brand}
                    price={board.price} 
                    preferredRiding={board.preferred_riding} 
                    directional={board.directional}
                    img={board.image_url}
                    onBoardDelete={handleSnowboardDelete} />
          })}
        </div>
    )
}

export default SnowboardList