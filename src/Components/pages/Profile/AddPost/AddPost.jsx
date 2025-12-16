import React from "react";
import {Post} from "./Post/Post";

export function AddPost() {
    return (
        <div>
            <h2>
                My posts
            </h2>
            <input type="text"/>
            <button>sent</button>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}