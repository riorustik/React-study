import React from "react";
import style from "./Messages.module.css";
import {Link, NavLink} from "react-router";

export function Messages() {
    return (
        <section className={style.messages}>
            <div className={style.dialogs}>
                <h3>Dialogs</h3>
                <div><NavLink to="/Messages/1">Павел</NavLink></div>
                <div><Link to="/Messages/2">Рустам</Link></div>
                <div><Link to="/Messages/3">Максим</Link></div>
                <div><Link to="/Messages/4">Андрей</Link></div>
                <div><Link to="/Messages/5">Владислав</Link></div>
                <div>Павел</div>
                <div>Павел</div>
                <div>Павел</div>
                <div>Павел</div>
            </div>
            <div className={style.dialog}>
                <h3>Dialog</h3>

                <div>Hi</div>
                <div>How are you??</div>
                <div>Do you free seven 0'clock?</div>
            </div>
        </section>
    )
}