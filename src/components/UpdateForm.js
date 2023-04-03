import React from "react";
import { useParams } from "react-router-dom";

function UpdateForm({ snowboards }){


let {board_id} = useParams()

//const boardInfoDisplayed =

    return (
        <div>
          {board_id}
        </div>
    )
}

export default UpdateForm