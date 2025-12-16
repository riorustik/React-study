import logo from './logo.svg';
import './App.css';

function App() {
    return (<div className="App-wrapper">
        <header className="app-header">
            <img src={logo}
                 className="app-logo"
                 alt="logo"/>
        </header>
        <nav className="app-nav">
            <div><a href="">Profile</a></div>
            <div><a href="">News</a></div>
            <div><a href="">Music</a></div>
            <div><a href="">Settings</a></div>
        </nav>
        <main className="app-main">
            <div className='main-poster'>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                </div>
            </div>
        </main>
    </div>);
}

export default App;
