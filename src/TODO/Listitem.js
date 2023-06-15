import React from "react";

export default function Listitem(props){
    return(
        <div>
            <p>{props.obj.name} <button onClick={() => props.onDelete(props.obj)}>x</button> </p> 
        </div>
    )
}