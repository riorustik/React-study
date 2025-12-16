import React from "react";
import style from "./Profile.module.css";

export function Profile() {
    return (
        <main className={style.profile}>
            <div className={style.profile__poster}>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                </div>
            </div>
        </main>
    )
}