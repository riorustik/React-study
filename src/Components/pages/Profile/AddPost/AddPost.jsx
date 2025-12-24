import React from "react";
import {Post} from "./Post/Post";
import style from "./AddPost.module.css";

export function AddPost({state}) {

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
                    state.postsData.map(obj => <Post likeCount={obj.likesCount}
                                               textPost={obj.message}/>)
                }
            </section>
        </section>
    )
}