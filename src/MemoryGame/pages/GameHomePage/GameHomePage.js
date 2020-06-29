import React from 'react';
import '../../../App.css';
import './GameHomePage.css';

const GameHomePage = props => {
    return (
        <div className="GameHomePage">
            <h1>{props.title}</h1>
            <div className="GameFilterContainer">{props.children}</div>
            <button 
                className="StartGameButton"
                onClick={props.goToGame}
            >START GAME</button>
            <footer className="copyright">&copy; Nat Geyzen 2020</footer>
        </div>
    )
}

export default GameHomePage;