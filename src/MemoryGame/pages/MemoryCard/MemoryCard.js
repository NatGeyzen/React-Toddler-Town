import React, { useState, useEffect } from 'react';
// , { useState, useEffect } 

import './MemoryCard.css';

import dog from '../../assets/images/basic/dog.png';
import cat from '../../assets/images/basic/cat.png';
import cow from '../../assets/images/basic/cow.png';
import pig from '../../assets/images/basic/pig.png';
import chicken from '../../assets/images/basic/chicken.png';
import sheep from '../../assets/images/basic/sheep.png';

const MemoryCard = props => {

    let cardImg;
    let cardAlt;
    let cardColor;

    if ( props.id === 1) {
        cardImg = dog;
        cardAlt = 'dog';
        cardColor = 'lightblue';
    } else if ( props.id === 32) {
        cardImg = cat;
        cardAlt = 'cat';
        cardColor = 'lightgreen';
    } else if ( props.id === 3) {
        cardImg = cow;
        cardAlt = 'cow';
        cardColor = 'yellow';
    } else if ( props.id === 4) {
        cardImg = pig;
        cardAlt = 'pig';
        cardColor = 'purple';
    } else if ( props.id === 5) {
        cardImg = chicken;
        cardAlt = 'chicken';
        cardColor = 'red';
    } else if ( props.id === 6) {
        cardImg = sheep;
        cardAlt = 'sheep';
        cardColor = 'orange';
    }    

    const [ cardFaceDown, setCardFaceDown] = useState(true);
    const { wrongMatch } = props;

    const flipCardHandler = (id) => {
        setCardFaceDown(false);
        props.count(id);
    }   

    useEffect(() => {
        if (wrongMatch) {
            setCardFaceDown(true);
        }
    })

    return (
        <div className="FlipContainer" onClick={() => flipCardHandler(props.id)}>
            <div className={cardFaceDown ? "Flipper" : "FlipperClicked"}>
                <div className="CardFront">
                    <h1>ANIMALS</h1>
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



// const { props.id } = props;



// return (
//     <div className="FlipContainer" onClick={() => clickHandler(props.props.id)}>
//         <div className={cardClass}>
//             <div className="CardFront">
//                 <h1>ANIMALS</h1>
//             </div>
//             <div className="CardBack" style={{backgroundColor: cardColor}}>
//                 <img 
//                     src={cardImg} 
//                     alt={cardAlt} 
//                     className="CardImage"
//                     />
//             </div>
//         </div>
//     </div>
// )