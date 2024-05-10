import React from 'react';

type ReviewProps = {
    name: string;
    content: string;
};

const Review: React.FC<ReviewProps> = ({ name, content }) => {
    return (
        <li
            key={`Avis google de ${name}`}
            className='review review__content'
        >
            <p>{content}</p>
            <h4>{name}</h4>
        </li>
    );
};

export default Review;
