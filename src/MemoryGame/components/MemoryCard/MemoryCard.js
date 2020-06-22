import React from 'react';

import './MemoryCard.css';

import dog from '../../../assets/images/basic/dog.png';
import cat from '../../../assets/images/basic/cat.png';
import cow from '../../../assets/images/basic/cow.png';
import pig from '../../../assets/images/basic/pig.png';
import chicken from '../../../assets/images/basic/chicken.png';
import sheep from '../../../assets/images/basic/sheep.png';

const MemoryCard = props => {

    const { number } = props;

    let cardImg;
    let cardAlt;
    let cardColor;

    if ( number === 1) {
        cardImg = dog;
        cardAlt = 'dog';
        cardColor = 'lightblue';
    } else if ( number === 2) {
        cardImg = cat;
        cardAlt = 'cat';
        cardColor = 'lightgreen';
    } else if ( number === 3 ) {
        cardImg = cow;
        cardAlt = 'cow';
        cardColor = 'yellow';
    } else if ( number === 4 ) {
        cardImg = pig;
        cardAlt = 'pig';
        cardColor = 'purple';
    } else if ( number === 5 ) {
        cardImg = chicken;
        cardAlt = 'chicken';
        cardColor = 'red';
    } else if ( number === 6 ) {
        cardImg = sheep;
        cardAlt = 'sheep';
        cardColor = 'orange';
    } 

    return (
        <div className="FlipContainer" onClick={() => props.cardHandler(props.id, props.number)}>
            <div id={props.id} className={props.className} >
                <div className="CardFront">
                    <span className="CardTheme">ANIMALS</span>
                </div>
                <div className="CardBack" style={{backgroundColor: cardColor}}>
                    <img 
                        src={cardImg} 
                        alt={cardAlt} 
                        className="CardImage"
                        />
                </div>
            </div>
        </div>
    )
};

export default MemoryCard;