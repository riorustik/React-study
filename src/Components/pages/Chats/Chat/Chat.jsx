import React from "react";
import {Link} from "react-router-dom";


export function Chat({name, number}){
    return(
        <div><Link to={'/Chats/' + number}>{name}</Link></div>
    )
}
