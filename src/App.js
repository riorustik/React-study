import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/pages/Profile/Profile";
import {Messages} from "./Components/pages/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar/>
                <main className='App-content'>
                    <Routes>
                        <Route path='Profile'
                               element={<Profile />}/>
                        <Route path='Messages'
                               element={<Messages />}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>);
}

export default App;
