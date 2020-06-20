import React, { useState, Fragment } from 'react';
import customId from 'custom-id';
import './MemoryGamePage.css';
import MemoryCard from '../../components/MemoryCard/MemoryCard';

/* ----------------------------------------------------------------------------------------------------
    GLOBAL VARIABLES
---------------------------------------------------------------------------------------------------- */

const random_sequence1 = [];
const random_sequence2 = [];
const full_sequence = [];
const index_sequence = [];
const shuffled_sequence = [];
const merged_sequence = [];
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
    createRandomSetSequence(random_sequence1, 6);
    createRandomSetSequence(random_sequence2, 6);
    full_sequence.push(...random_sequence1, ...random_sequence2);
    createRandomSetSequence(index_sequence, 12);
    while (shuffled_sequence.length !== index_sequence.length) {
        index_sequence.map(index => shuffled_sequence.push(full_sequence[index - 1]))
    }	
};

const createMergedSequence = () => {
    createRandomGameSequence();
    shuffled_sequence.forEach(number => merged_sequence.push([customId({}), number]));    
}

// create an array of arrays using the latest sequence
const createGrid = () => {
    createMergedSequence();
    grid.push(merged_sequence.slice(0, 4));
    grid.push(merged_sequence.slice(4, 8));
    grid.push(merged_sequence.slice(8, 12));	
};

createGrid();

const MemoryGamePage = () => {

    const [ completed, set_completed ] = useState(false);
    
    let card_count = 0;
    let round_count = 0;
    let matches_found = 0;
    let clicked_cards_ids = [];
    let clicked_cards_numbers = [];

    const resetRoundValues = () => {
        card_count = 0;
        clicked_cards_ids = [];
        clicked_cards_numbers = [];
    };

    const cardHandler = (id, number) => {
        if (card_count !== 2) {
            card_count++;  
            clicked_cards_ids.push(id);    
            document.getElementById(id).classList.remove("Flipper");
            document.getElementById(id).classList.add("FlipperClicked");
            clicked_cards_numbers.push(number);
        }
        if (card_count === 2) {     
            if (clicked_cards_numbers[0] !== clicked_cards_numbers[1]) {
                console.log('no match');
                setTimeout(() => { 
                    clicked_cards_ids.forEach(id => {
                        if (id !== null) {
                            document.getElementById(id).classList.remove("FlipperClicked");
                            document.getElementById(id).classList.add("Flipper");
                        }
                    });
                }, 2000);
                setTimeout(() => {
                    ++round_count;
                    console.log(`round count: ${round_count}`);
                    resetRoundValues();
                }, 3000)  
            } else if (clicked_cards_numbers[0] === clicked_cards_numbers[1]) {
                console.log('match');
                
                setTimeout(() => {
                    resetRoundValues();
                    ++matches_found;
                    ++round_count;
                    console.log(`round count: ${round_count}`);
                    console.log(`matches found: ${matches_found}`);
                    if (merged_sequence.length === 12 && matches_found === 6) {
                        set_completed(true);
                    }
                }, 1000)
                
            }
        }

        if (!(card_count === 0 || card_count === 1 || card_count === 2)) {
            clicked_cards_ids.push(null);
            clicked_cards_numbers.push(null);
        }

        console.log(`card count: ${card_count}`);
        
    }   


    // // ------------------------------
    // // KEEP TRACK OF CARD COUNT
    // // ------------------------------

   
    
    
    

    return (
        <Fragment>
            {/* <div className="GameInfo">
                <div>rounds played: 
                    <span> {round_count}</span>
                    </div>
                <div>matches found: 
                    <span> {matches_found}</span>
                </div>
            </div> */}
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
                                    id={cell[0]}
                                    number={cell[1]}
                                    cardHandler={cardHandler}
                                    completed={completed}
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