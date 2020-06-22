import React, { useState } from 'react';
// { Fragment, useState } 

import './MemoryGamePage.css';
import MemoryCard from '../../components/MemoryCard/MemoryCard';

const MemoryGamePage = () => {

    const randomSequence1 = [];
    const randomSequence2 = [];
    const fullSequence = [];
    const grid = [];

    const [ wrongMatch, setwrongMatch ] = useState(false);

    // ------------------------------
    // CREATE RANDOM ARRAY
    // ------------------------------

    const randomNumber = (numberOfSets) => {
        return Math.floor(Math.ceil(Math.random() * numberOfSets));
    }

    const createRandomSequence = (array, numberOfSets) => {
        array.push(randomNumber(numberOfSets));
        while (array.length !== numberOfSets) {
            const number = randomNumber(numberOfSets);
            if (!array.includes(number)) {
                array.push(number);
            } else {
                 randomNumber(numberOfSets);
            }
        }
    }

    const indexSequence = [];
    const shuffledSequence = [];

    const createRandomArray = () => {
        createRandomSequence(randomSequence1, 6);
        createRandomSequence(randomSequence2, 6);
        fullSequence.push(...randomSequence1, ...randomSequence2);

        createRandomSequence(indexSequence, 12);
        while (shuffledSequence.length !== indexSequence.length) {
            indexSequence.map(index => shuffledSequence.push(fullSequence[index - 1]))
        }
    }

    createRandomArray();

    // ------------------------------
    // CREATE GRID ARRAY
    // ------------------------------

    const createGrid = () => {
        if (shuffledSequence.length === 12) {
            grid.push(shuffledSequence.slice(0, 4));
            grid.push(shuffledSequence.slice(4, 8));
            grid.push(shuffledSequence.slice(8, 12));
        } 
    }

    createGrid(shuffledSequence);

    // // ------------------------------
    // // KEEP TRACK OF CARD COUNT
    // // ------------------------------

    let count = 0;
    const clickedCards = [];

    const cardCountHandler = (id) => {
        count = count + 1;
        clickedCards.push(id);
        
        if (count === 2) {
            if (clickedCards[0] !== clickedCards[1]) {
                setwrongMatch(true);
            } else {
                console.log('match');
            }
            count = 0;
            console.log(clickedCards);
        }  
        
    }

    return (
        <div className="MemoryGameBoard">
            {grid.map(row => 
                <div key={Math.random()} className="MemoryRow MemoryRowHeight3Rows"> 
                    {row.map(cell => 
                        <div key={Math.random() * cell} className="MemoryCell">
                            <MemoryCard 
                                id={cell}
                                count={cardCountHandler} 
                                wrongMatch={wrongMatch}
                            />
                        </div>
                    )}
                </div>)}
        </div>
    )
}

export default MemoryGamePage;




    
//     const grid16 = [];
//     const grid20 = [];

//     let openedCards = [];
//     const [ wrongMatch, setWrongMatch ] = useState(false);



// else if (array.length === 16) {
//     grid16.push(random16.slice(0, 4));
//     grid16.push(random16.slice(4, 8));
//     grid16.push(random16.slice(8, 12));
//     grid16.push(random16.slice(12, 16));
// } else if (array.length === 20) {
//     grid20.push(random20.slice(0, 5));
//     grid20.push(random20.slice(5, 10));
//     grid20.push(random20.slice(10, 15));
//     grid20.push(random20.slice(15, 20));
// }





//     const resetCardData = () => {

//     }

//     const cardCountHandler = (id) => {
//         count = count + 1;
//         openedCards.push(id);
//         console.log(openedCards);
//         if (count === 2) {
//             if (!(openedCards === [1, 2] ||
//                 openedCards === [3, 4] ||
//                 openedCards === [5, 6] ||
//                 openedCards === [7, 8] ||
//                 openedCards === [9, 10] ||
//                 openedCards === [11, 12] )) {
//                     console.log('wrong')
//                     setWrongMatch(true);  
//             }
//             count = 0;
//             openedCards = [];
//             console.log(count);
//             console.log(openedCards);
//         }



// -------------------------------------------------------------
// {grid12.map(row => 
//     <div 
//         key={Math.random()}
//         className="MemoryRow MemoryRowHeight3Rows">
//         {row.map(cell => 
//             <div 
//                 key={cell}
//                 className="MemoryCell">
//                 <MemoryCard 
//                     id={cell}
//                     count={cardCountHandler}
//                     wrongMatch={wrongMatch}
//                 />
//             </div>
//         )}
//     </div>
// )}  
// <footer>
//     <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// </footer>