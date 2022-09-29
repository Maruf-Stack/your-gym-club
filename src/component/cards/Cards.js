import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import './Cards.css';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Profile from '../profile/Profile';

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [count, setCount] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);
    // useEffect(() => {
    //     const storedCart = getStoredCart();
    //     const saveCart = [];
    //     for (const id in storedCart) {
    //         const addedProduct = cards.find(card => card.id === id);
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             saveCart.push(addedProduct)
    //         }
    //     }
    //     setCount(saveCart)
    // }, []);
    const handleClick = (card) => {
        const newCount = [...count, card];
        setCount(newCount)

    }
    return (
        <div className='all-cards'>
            <div className="cards">
                {
                    cards.map(card => <Card card={card} key={card.id} handleClick={handleClick}></Card>)
                }
            </div>
            <div className='profile-container'>
                <Profile count={count}></Profile>
            </div>

        </div>
    );
};

export default Cards;