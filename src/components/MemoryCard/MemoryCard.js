import React, { useState } from 'react';

import './MemoryCard.css';

import dog from '../../assets/images/basic/dog.png';
import cat from '../../assets/images/basic/cat.png';
import cow from '../../assets/images/basic/cow.png';
import pig from '../../assets/images/basic/pig.png';
import chicken from '../../assets/images/basic/chicken.png';
import sheep from '../../assets/images/basic/sheep.png';

const MemoryCard = props => {


    const { id } = props;

    const [ cardClass, setCardClass ] = useState("Flipper");
    let cardImg;
    let cardAlt;
    let cardColor;

    if ( id === 1) {
        cardImg = dog;
        cardAlt = 'dog';
        cardColor = 'lightblue';
    } else if ( id === 2) {
        cardImg = cat;
        cardAlt = 'cat';
        cardColor = 'lightgreen';
    } else if ( id === 3 ) {
        cardImg = cow;
        cardAlt = 'cow';
        cardColor = 'yellow';
    } else if ( id === 4 ) {
        cardImg = pig;
        cardAlt = 'pig';
        cardColor = 'purple';
    } else if ( id === 5 ) {
        cardImg = chicken;
        cardAlt = 'chicken';
        cardColor = 'red';
    } else if ( id === 6 ) {
        cardImg = sheep;
        cardAlt = 'sheep';
        cardColor = 'orange';
    } 

    const clickHandler = (id) => {
        setCardClass("FlipperClicked");
        props.count(id);
    }

    return (
        <div className="FlipContainer" onClick={() => clickHandler(props.id)}>
            <div className={cardClass}>
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