import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, image, required_time, for_age
    } = props.card;
    const { card, handleClick } = props;


    return (
        <div className='card'>
            <img src={image} alt="" className='card-img' />
            <h4 className='name'>{name}</h4>
            <p>Age needed :{for_age}y</p>
            <p><span className='time-req'>Time Required :</span>{required_time}s</p>
            <button className='add-btn' onClick={() => handleClick(card)}>Add to list</button>
        </div>
    );
};

export default Card;