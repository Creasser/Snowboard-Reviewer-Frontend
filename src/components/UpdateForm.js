import React from "react";
import { useParams } from "react-router-dom";

function UpdateForm({ snowboards }){


let {board_id} = useParams()

const currentBoard = snowboards.find((board) => board.id == board_id)


    return (
        <div>
          <div>{`You are updating the ${currentBoard.brand} ${currentBoard.preferred_riding} board!`}</div>
        </div>
    )
}

export default UpdateForm