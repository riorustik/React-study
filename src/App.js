import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/pages/Profile/Profile";
import {Chats} from "./Components/pages/Chats/Chats";
import {BrowserRouter, Route, Routes} from "react-router";
import {AddPost} from "./Components/pages/Profile/AddPost/AddPost";

function App({state, addPost}) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                {/*<Header/>*/}
                <NavBar/>
                <main className='App-content'>
                    <Routes>
                        <Route path='/'
                               element={<Profile/>}/>
                        <Route path='/Profile'
                               element={<Profile/>}/>
                        <Route path='/Profile/Posts'
                               element={<AddPost state={state.profile} addPost={addPost}/>}/>
                        <Route path='/Chats'
                               element={<Chats state={state.chats}/>}/>
                        <Route path='/Chats/:id'
                               element={<Chats state={state.chats}/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>);
}

export default App;
