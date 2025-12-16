import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/pages/Profile/Profile";


function App() {
    return (<div className="App-wrapper">
        <Header/>
        <NavBar/>
        <Profile/>
    </div>);
}

export default App;
