import React from 'react';

type CardProps = {
    title: string;
    image: string;
    description: string;
};

const Card: React.FC<CardProps> = ({ title, image, description }) => {
    return (
        <div className='card__content'>
            <h3 className='card__title'>{title}</h3>
            <img
                src={image}
                alt={title}
            />
            <p>{description}</p>
        </div>
    );
};

export default Card;
