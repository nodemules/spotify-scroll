import React from 'react';
import './App.css';
import RandomTrack from "./RandomTrack";

const App = () => (
    <div className="App">
        <header className="App-header">
            <p>
                spotify-scroll - <a className="App-link">Scroll spotify</a>
            </p>
        </header>
        <RandomTrack/>
    </div>
)

export default App;
