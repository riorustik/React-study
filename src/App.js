import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/pages/Profile/Profile";
import {Chats} from "./Components/pages/Chats/Chats";
import {BrowserRouter, Route, Routes} from "react-router";
import {AddPost} from "./Components/pages/Profile/AddPost/AddPost";

function App() {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                {/*<Header/>*/}
                <NavBar/>
                <main className='App-content'>
                    <Routes>
                        <Route path='/'
                               element={<Profile />}/>
                        <Route path='/Profile'
                               element={<Profile />}/>
                        <Route path='/Profile/Posts'
                               element={<AddPost />}/>
                        <Route path='/Chats'
                               element={<Chats />}/>
                        <Route path='/Chats/:id'
                               element={<Chats />}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>);
}

export default App;
