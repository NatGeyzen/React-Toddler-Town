import React from 'react';
import './MemoryGamePage.css';

const MemoryGamePage = props => {

    const twelfCards = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];

    return (
        <div className="MemoryGameBoard">
            {twelfCards.map(row => 
                <div key={Math.random() * 3} className="MemoryRow">
                    {row.map(cell => 
                        <div key={Math.random() * 4} className="MemoryCell">{cell}</div>
                    )}
                </div> )
            }
        </div>
    )
}

export default MemoryGamePage;