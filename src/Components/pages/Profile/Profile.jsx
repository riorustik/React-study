import React from "react";
import style from "./Profile.module.css";
import {AddPost} from "./AddPost/AddPost";
import {UserPersonalInfo} from "./UserPersonalInfo/UserPersonalInfo";
import {PostMain} from "./PostMain/PostMain";

export function Profile() {
    return (
        <section className={style.profile}>
            <UserPersonalInfo/>
            <PostMain image='https://images.unsplash.com/photo-1765470383293-af214e818d79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      styleName='verticalArticle'
                      title='Новогоднее чудо'
                      description='Как я провел самый семеный прздник'/>
            <PostMain image='https://images.unsplash.com/photo-1764418658910-c00b609c089e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      styleName='bottomLeftArticle'
                      title='NY жди!'
                      description='Отголоски будущего путешествия'/>
            <PostMain image='https://images.unsplash.com/photo-1761839262867-af53d08b0eb5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      styleName='bottomRightArticle'
                      title='Окружение'
                      description='Чем полезны наши враги?'/>

        </section>
    )
}