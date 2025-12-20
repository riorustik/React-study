import React from "react";
import {Link} from "react-router-dom";


export function Chat({name, id}){
    return(
        <div><Link to={'/Chats/' + id}>{name}</Link></div>
    )
}
