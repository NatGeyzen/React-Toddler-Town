import React, { useState } from 'react';
import './MemoryGame.css';
import GameHomePage from './pages/GameHomePage/GameHomePage';
import MemoryGamePage from './pages/MemoryGamePage/MemoryGamePage';
import MemoryGameOverPage from './pages/MemoryGameOverPage/MemoryGameOverPage';

const MemoryGame = () => {

	/* STATE
	---------------------------------------------------------------------------------------------------- */
    const [ page_number, set_page_number ] = useState(1);
	
	/* FUNCTIONS
	---------------------------------------------------------------------------------------------------- */
	const startGameHandler = () => {
		set_page_number(2);
    };

    const endGameHandler = () => {
        set_page_number(3);
    }

    const newGameHandler = () => {
        set_page_number(1);
    }

    
    /* DYNAMICALLY RENDERED CONTENT
	---------------------------------------------------------------------------------------------------- */
    const game_home_page = (
        <GameHomePage title="Match from Memory" goToGame={startGameHandler}>
            <div className="MG-filter">
                <p>BOARD SIZE</p>	
                <select id="board-size">
                    <option value="4 x 3">4 x 3</option>
                </select>
            </div>
            <div className="MG-filter">
                <p>THEME</p>	
                <select id="theme">
                    <option value="default">default</option>
                </select>
            </div>
        </GameHomePage>    
    );

    const play_game_page = (
        <MemoryGamePage 
            endGame={endGameHandler}
        />
    );

    const game_over_page = (
        <MemoryGameOverPage 
            newGame={newGameHandler}
        />
    );

    let game_page;

    switch (page_number) {
        case 1:         game_page = game_home_page;         break;
        case 2:         game_page = play_game_page;         break;
        case 3:         game_page = game_over_page;         break;
        default:        game_page = game_home_page;
    }



	/* RETURN
	---------------------------------------------------------------------------------------------------- */
    return (
        <div className="App">
            {game_page}
        </div>
    )
}

export default MemoryGame;