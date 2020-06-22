import React, { Fragment } from 'react';
import customId from 'custom-id';

import './MemoryGamePage.css';
import MemoryCard from '../../components/MemoryCard/MemoryCard';

import { connect } from 'react-redux';
import { incrementRound, incrementMatch, storeFoundId, storeFoundIds } from '../../../store/actions';

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

const MemoryGamePage = (props) => {

    let card_count = 0;
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
                setTimeout(() => { 
                    clicked_cards_ids.forEach(id => {
                        if (id !== null) {
                            document.getElementById(id).classList.remove("FlipperClicked");
                            document.getElementById(id).classList.add("Flipper");
                        }
                    });
                }, 1000);
                setTimeout(() => {
                    resetRoundValues();
                    props.incrementRound(props.round_count);
                }, 1500)  
            } else if (clicked_cards_numbers[0] === clicked_cards_numbers[1]) {
                setTimeout(() => {
                    clicked_cards_ids.forEach(id => {
                        props.storeFoundId(id);
                         props.storeFoundIds(props.matches_found, id); 
                    });
                    resetRoundValues();
                    props.incrementMatch(props.match_count);
                    props.incrementRound(props.round_count);

                    if (merged_sequence.length === 12 && props.match_count === 5) {
                        props.endGame();
                    }
                }, 1000)
            }
        }

        if (!(card_count === 0 || card_count === 1 || card_count === 2)) {
            clicked_cards_ids.push(null);
            clicked_cards_numbers.push(null);
        }  

    };   

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
                                    id={cell[0]}
                                    number={cell[1]}
                                    className={
                                        props.matches_found.length === 0 ? "Flipper" :
                                            props.matches_found.includes(cell[0]) ? "FlipperClicked" : "Flipper"
                                    }
                                    cardHandler={cardHandler}
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
};

const mapStateToProps = state => {
    return {
        round_count: state.roundCount,
        match_count: state.matchCount,
        id: state.id,
        matches_found: state.matchesFound
    }
};

const mapDispatchToProps = dispatch => {
    return {
        incrementRound: (count) => dispatch(incrementRound(count)),
        incrementMatch: (count) => dispatch(incrementMatch(count)),
        storeFoundId: (id) => dispatch(storeFoundId(id)),
        storeFoundIds: (matchesFound, id) => dispatch(storeFoundIds(matchesFound, id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MemoryGamePage);