import React from "react";
import style from "./UserPersonalInfo.module.css";
import ava from '../../../../image/ava.jpg'
import {Link} from "react-router";

export function UserPersonalInfo() {
    return (
        <div className={style.profileInfo}>
            <img src={ava}
                 className={style.profileAvatar}
                 alt=""/>
            <div className={style.profileDescription}>
                <h1><span>Кусяпкулов </span> <br/> Рустам </h1>
                <br/>
                <p>Фронтенд разработчик, в поисках работы демонстриющий свои навыки прямо сейчас пока вы читаете этот
                    текст</p>

                <Link to='/Profile/Posts' className={style.button}> Создать запись</Link>
            </div>
        </div>
    )
}