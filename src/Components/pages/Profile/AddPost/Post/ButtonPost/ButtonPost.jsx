import React from "react";
import style from './ButtonPost.module.css'

export function ButtonPost({ text }) {
    return (
        <button className={style.button}>{text}</button>
    )
}