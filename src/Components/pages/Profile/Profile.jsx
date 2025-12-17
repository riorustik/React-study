import React from "react";
import style from "./Profile.module.css";
import {AddPost} from "./AddPost/AddPost";

export function Profile() {
    return (
        <section className={style.profile}>
            <div className={style.profile__poster}>
            </div>
            <div>
                ava + description
            </div>
            <AddPost/>
        </section>
    )
}