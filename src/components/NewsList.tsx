import React from 'react';

import NewsCard from './NewsCard';

type NewsData = {
    srcImage: string;
    url: string;
};

type NewslistProps = {
    news: NewsData[];
};

const NewsList: React.FC<NewslistProps> = ({ news }) => {
    return (
        <ul className='news-list'>
            {news.map((newsItem, index) => (
                <NewsCard
                    key={index}
                    srcImage={newsItem.srcImage}
                    url={newsItem.url}
                />
            ))}
        </ul>
    );
};

export default NewsList;
