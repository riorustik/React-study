import React from "react";
import {Post} from "./Post/Post";
import style from "./AddPost.module.css";

export function AddPost() {


    let postsData = [
        {id: 1, message: 'Hi', likesCount: 23},
        {id: 2, message: 'How are you?', likesCount: 4},
        {id: 2, message: 'How are you?', likesCount: 4},

        {id: 2, message: 'How are you?', likesCount: 4},
        {id: 2, message: 'How are you?', likesCount: 4},
        {id: 2, message: 'How are you?', likesCount: 4},
        {id: 2, message: 'How are you?', likesCount: 4},

    ]

    return (
        <section className={style.posts}>
            <h2>
                My posts
            </h2>
            <div className={style.newPost}>
                <input type="text"/>
                <button>sent</button>
            </div>
            <section className={style.postsList}>
                {
                    postsData.map(obj => <Post likeCount={postsData.likesCount} textPost={postsData.message}/>)
                }
            </section>
        </section>
    )
}