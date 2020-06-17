import React, { useState, Fragment } from 'react';
import './MemoryGamePage.css';
import MemoryCard from '../../components/MemoryCard/MemoryCard';

/* ----------------------------------------------------------------------------------------------------
    GLOBAL VARIABLES
---------------------------------------------------------------------------------------------------- */

const randomSequence1 = [];
const randomSequence2 = [];
const fullSequence = [];
const indexSequence = [];
const shuffledSequence = [];
const grid = [];

/* ----------------------------------------------------------------------------------------------------
    GLOBAL FUNCTIONS
---------------------------------------------------------------------------------------------------- */

// return integer between 0 and number of SETS in a game
const returnRandomInteger = (numberOfSets) => {
	return Math.floor(Math.ceil(Math.random() * numberOfSets));
}

// create random sequence the length of the amount of SETS in a game
const createRandomSetSequence = (array, numberOfSets) => {
    array.push(returnRandomInteger(numberOfSets));
    while (array.length !== numberOfSets) {
        const number = returnRandomInteger(numberOfSets);
        if (!array.includes(number)) {
            array.push(number);
        } else {
            returnRandomInteger(numberOfSets);
        }
	}
}

// create random sequence the length of the amount of CARDS in a game
const createRandomGameSequence = () => {
    createRandomSetSequence(randomSequence1, 6);
    createRandomSetSequence(randomSequence2, 6);
    fullSequence.push(...randomSequence1, ...randomSequence2);
    createRandomSetSequence(indexSequence, 12);
    while (shuffledSequence.length !== indexSequence.length) {
        indexSequence.map(index => shuffledSequence.push(fullSequence[index - 1]))
    }	
};

// create an array of arrays using the latest sequence
const createGrid = () => {
    createRandomGameSequence();
    grid.push(shuffledSequence.slice(0, 4));
    grid.push(shuffledSequence.slice(4, 8));
    grid.push(shuffledSequence.slice(8, 12));	
};

createGrid();

const MemoryGamePage = () => {

    let roundCount = 0;
    // const [ init, setInit ] = useState(true);
    const [ wrongMatch, setwrongMatch ] = useState(false);

    // // ------------------------------
    // // KEEP TRACK OF CARD COUNT
    // // ------------------------------

    let count = 0;
    let clickedCards = [];

    const cardCountHandler = (id) => {
        count = count + 1;
        clickedCards.push(id);
        
        if (count === 2) {
            if (clickedCards[0] !== clickedCards[1]) {
                console.log('no match');
                // setTimeout(() => { setwrongMatch(true)}, 2500);
            } else {
                console.log('match');
            }
            setTimeout(() => {
                count = 0;
                clickedCards = [];
            }, 1000) 
            roundCount += 1;
        }  
        console.log(count);
        console.log(clickedCards);
        console.log(roundCount);
    }

    

    return (
        <Fragment>
            <div className="MemoryGameBoard">    
                {grid.map(row => 
                    <div 
                        key={Math.random() * 100}
                        className="MemoryRow MemoryRowHeight3Rows">
                        {row.map(cell => 
                            <div 
                                key={Math.random() * 100}
                                className="MemoryCell">
                                <MemoryCard 
                                    id={cell}
                                    count={cardCountHandler}
                                    wrongMatch={wrongMatch}
                                />
                            </div>
                        )}
                    </div>
                )}  
            </div>
            <footer>
                <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>    
        </Fragment>
        
    )
}

export default MemoryGamePage;