import React from "react";
import style from "./Profile.module.css";
import {AddPost} from "./AddPost/AddPost";
import {UserPersonalInfo} from "./UserPersonalInfo/UserPersonalInfo";

export function Profile() {
    return (
        <section className={style.profile}>
            <UserPersonalInfo />
            <AddPost/>
        </section>
    )
}