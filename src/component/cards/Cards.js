import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import './Cards.css'

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className='all-cards'>
            {
                cards.map(card => <Card card={card} key={card.id}></Card>)
            }

        </div>
    );
};

export default Cards;