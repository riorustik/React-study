import React from "react";
import style from "./Chats.module.css";
import {Chat} from "./Chat/Chat"
import {Message} from "./Message/Message";

export function Chats({chatsPageData}) {

    return (
        <section className={style.messages}>
            <div className={style.dialogs}>
                <h3>Dialogs</h3>
                {
                    chatsPageData.chatsData.map(obj => <Chat name={obj.name}
                                               id={obj.id}/>)
                }

            </div>
            <div className={style.dialog}>
                <h3>Dialog</h3>

                {
                    chatsPageData.messagesData.map(obj => <Message message={obj.message}
                                                     id={obj.id}/>)
                }
            </div>
        </section>
    )
}