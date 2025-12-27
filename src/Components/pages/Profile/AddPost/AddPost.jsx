import React from "react";
import {Post} from "./Post/Post";
import style from "./AddPost.module.css";

export function AddPost({state, addPost}) {
    let posts = state.postsData.map(obj => <Post likeCount={obj.likesCount} textPost={obj.message}/>)
    let addPostInput = React.createRef();

    function btnAddPost() {
        addPost(addPostInput.current.value);
        addPostInput.current.value = ''
    }

    return (
        <section className={style.posts}>
            <h2>
                My posts
            </h2>
            <div className={style.newPost}>
                <input type="text" ref={addPostInput}/>
                <button id='btnAdd'
                        onClick={btnAddPost}>sent
                </button>
            </div>
            <section className={style.postsList}>
                {posts}
            </section>
        </section>
    )
}