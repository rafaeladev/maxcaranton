import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

type CardProps = {
    title: string;
    image: string;
    description: string;
};

const Card: React.FC<CardProps> = ({ title, image, description }) => {
    return (
        <li
            className='card__content'
            key={`card ${title}`}
        >
            <h3 className='card__title'>{title}</h3>
            <img
                src={image}
                alt={title}
            />
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                    p: ({ ...props }) => <p {...props} />,
                }}
            >
                {description}
            </ReactMarkdown>
        </li>
    );
};

export default Card;
