import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

let postsData = [
    {id: 1, message: 'Hi', likesCount: 23},
    {id: 2, message: 'How are you?', likesCount: 4},
    {id: 2, message: 'How are you?', likesCount: 4},

    {id: 2, message: 'How are you?', likesCount: 4},
    {id: 2, message: 'How are you?', likesCount: 4},
    {id: 2, message: 'How are you?', likesCount: 4},
    {id: 2, message: 'How are you?', likesCount: 4},

]

let chatsPageData = {chatsData: chatsData, messagesData: messagesData};
let postsPageData = {postsData: postsData};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App
            chatsPageData={chatsPageData}
            postsPageData={postsPageData}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
