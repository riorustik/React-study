import React from "react";
import style from "./Chats.module.css";
import {Chat} from "./Chat/Chat"
import {Message} from "./Message/Message";

export function Chats() {

    let chatsData = [
        {id: 1, name: 'Дмитрий'},
        {id: 2, name: 'Рустам'},
        {id: 3, name: 'Максим'},
        {id: 4, name: 'Андрей'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Do you free seven 0\'clock?'},
    ]

    return (
        <section className={style.messages}>
            <div className={style.dialogs}>
                <h3>Dialogs</h3>
                {
                    chatsData.map(obj => <Chat name={obj.name} id={obj.id}/>)
                }

            </div>
            <div className={style.dialog}>
                <h3>Dialog</h3>

                {
                    messagesData.map(obj => <Message message={obj.message} id={obj.id}/>)
                }
            </div>
        </section>
    )
}