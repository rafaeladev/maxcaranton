import React, { useEffect, useState } from 'react';

interface InstagramPost {
    id: string;
    media_url: string;
}

const InstagramFeed: React.FC = () => {
    const [photoUrls, setPhotoUrls] = useState<string[]>([]);
    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                const response = await fetch(
                    `https://graph.instagram.com/me/media?fields=id,media_url&access_token=249e25a06a0f549dad14f7bc5010b8fa`
                );
                if (response.ok) {
                    const data = await response.json();
                    const urls = data.data.map((post: InstagramPost) => post.media_url); // Extraction des URLs des photos
                    setPhotoUrls(urls);
                } else {
                    console.error('Error fetching Instagram posts:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
            }
        };

        fetchInstagramPosts();
    }, []);

    return (
        <div className='instagram-feed'>
            {photoUrls.map((url, index) => (
                <div
                    key={index}
                    className='instagram-post'
                >
                    <img
                        src={url}
                        alt='Instagram Post'
                    />
                </div>
            ))}
        </div>
    );
};

export default InstagramFeed;
