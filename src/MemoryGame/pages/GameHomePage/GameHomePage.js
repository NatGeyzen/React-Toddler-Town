import React from 'react';
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
        </div>
    )
}

export default GameHomePage;