import React from "react";
import style from "./Chats.module.css";
import {Chat} from "./Chat/Chat"

export function Chats() {
    return (
        <section className={style.messages}>
            <div className={style.dialogs}>
                <h3>Dialogs</h3>

                <Chat name='Дмитрий' number='1'/>
                <Chat name='Рустам' number='2'/>
                <Chat name='Максим' number='3'/>
                <Chat name='Андрей' number='4'/>
                <Chat name='Владислав' number='5'/>
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