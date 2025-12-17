import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/pages/Profile/Profile";
import {Messages} from "./Components/pages/Messages/Messages";


function App() {
    return (<div className="App-wrapper">
        <Header/>
        <NavBar/>
        <main className='App-content'>
            {/*<Profile/>*/}
            <Messages/>
        </main>
    </div>);
}

export default App;
