import React from "react";
import style from "./PostMain.module.css";

export function PostMain({styleName, description, image, title}) {
    return (
        <div className={`${style[styleName]} ${style.general}`}>
            <img src={image}
                 alt=""/>
           <div className={style.postDescription}>
               <h1>{title}</h1>
               <p>
                   {description}
               </p>
           </div>
        </div>
    )
}