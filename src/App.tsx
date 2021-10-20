import React from 'react';
import './App.css';
import RandomTrack from "./RandomTrack";

const App = () => (
    <div className="App">
        <header className="App-header">
            <p>
                Scroll&nbsp;
                <a
                    className="App-link"
                    href="https://www.spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Spotify
                </a>
            </p>
        </header>
        <RandomTrack/>
    </div>
)

export default App;
