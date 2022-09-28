import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, image, required_time
    } = props.card;

    return (
        <div className='card'>
            <img src={image} alt="" className='card-img' />
            <h4>{name}</h4>
            <p>Time Required :{required_time}</p>
            <button className='add-btn'>Add to list</button>
        </div>
    );
};

export default Card;