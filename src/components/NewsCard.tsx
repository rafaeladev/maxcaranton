import React from 'react';
import { Link } from 'react-router-dom';

type NewsCardProps = {
    srcImage: string;
    url: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ srcImage, url }) => {
    return (
        <Link
            to={url}
            target='_blank'
            className='newsCard__link'
        >
            <li
                key={`News Instagram ${srcImage}`}
                className='newsCard'
            >
                <img
                    src={srcImage}
                    alt={`image insta ${srcImage}`}
                />
            </li>
        </Link>
    );
};

export default NewsCard;
