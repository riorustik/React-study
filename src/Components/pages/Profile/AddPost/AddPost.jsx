import React from "react";
import {Post} from "./Post/Post";
import style from "./AddPost.module.css";

export function AddPost({state}) {
    let posts = state.postsData.map(obj => <Post likeCount={obj.likesCount} textPost={obj.message}/>)
    let addPostInput = React.createRef();
    function addPost() {

        alert(addPostInput.current.value);
    }

    return (
        <section className={style.posts}>
            <h2>
                My posts
            </h2>
            <div className={style.newPost}>
                <input type="text" ref={addPostInput}/>
                <button id='btnAdd'
                        onClick={addPost}>sent
                </button>
            </div>
            <section className={style.postsList}>
                {posts}
            </section>
        </section>
    )
}