import React from "react";
import style from "./Post.module.css";
import {ButtonPost} from "../../../../Buttons/ButtonPost/ButtonPost";

export function Post({textPost, likeCount}) {
    return (
        <article className={style.post}>
            <div className={style.news}>
                <p>{textPost}</p>
                <img src="https://plus.unsplash.com/premium_photo-1734097487771-acac1d308a88?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     className={style.image}
                     alt=""/>
            </div>
            <div className={style.buttons}>
                <ButtonPost text='Like'/>
                <span>{likeCount}</span>
                <ButtonPost text='Share'/>
            </div>
        </article>
    )
}