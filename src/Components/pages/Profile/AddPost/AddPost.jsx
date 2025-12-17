import React from "react";
import {Post} from "./Post/Post";
import style from "./AddPost.module.css";

export function AddPost() {
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
                <Post likeCount={10} textPost='My first Post!'/>
                <Post likeCount={15} textPost='Hello my friends!'/>
                <Post likeCount={5} textPost='Hello my friends!'/>
                <Post likeCount={17} textPost='Hello my friends!'/>
                <Post likeCount={23} textPost='Hello my friends!'/>
            </section>
        </section>
    )
}