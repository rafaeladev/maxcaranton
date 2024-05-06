import React from 'react';
import Card from './Card';

type CardData = {
    title: string;
    image: string;
    description: string;
};

type CardListProps = {
    cards: CardData[];
};

const CardList: React.FC<CardListProps> = ({ cards }) => {
    return (
        <div className='card-list'>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default CardList;
