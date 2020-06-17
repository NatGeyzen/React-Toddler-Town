import React, { useState } from 'react';

import './App.css';
import GameHomePage from './pages/GameHomePage/GameHomePage';
import MemoryGamePage from './pages/MemoryGamePage/MemoryGamePage';

function App() {

	const [ startGame, setStartGame ] = useState(true);
	const [ goToGame, setGoToGame ] = useState(false);

    return (
        <div className="App">
			{startGame ? 
				<GameHomePage title="Memory Game" goToGame={() => {
					setStartGame(false);
					setGoToGame(true); }}
				>
					<div className="MG-filter">
						<p>Board Size</p>	
						<select id="board-size">
  							<option value="4 x 3">4 x 3</option>
						</select>
					</div>
					<div className="MG-filter">
						<p>Theme</p>	
						<select id="theme">
  							<option value="default">default</option>
						</select>
					</div>
				</GameHomePage> : null }
			{goToGame ? <MemoryGamePage /> : null }
        </div>
    );
}

export default App;
