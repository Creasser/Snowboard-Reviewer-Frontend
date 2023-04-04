import React from "react";
import { useParams } from "react-router-dom";

function SnowboardReviews({ snowboards }){

let {board_id} = useParams()
const currentBoard = snowboards.find((board) => board.id == board_id)

    return (
        <div>

        </div>
    )
}

export default SnowboardReviews