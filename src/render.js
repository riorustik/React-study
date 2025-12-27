import React from "react";
import {addPost} from "./Storage/State";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';


export function AppRender(state) {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}/>
        </React.StrictMode>
    );
}