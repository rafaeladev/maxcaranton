import { Outlet } from 'react-router-dom';
import Nav from './Nav.tsx';
import Footer from './Footer';
import Banner from './Banner';

import { useState, useEffect } from 'react';

import { getContent } from '../api/apiGoogle';

import { useContentContext } from '../utils/ContentContext';

function LoadingBar() {
    return (
        <div
            className='loading-bar'
            style={{ textAlign: 'center', padding: '20px' }}
        >
            Chargement...
        </div>
    );
}

function Layout() {
    const [isLoading, setIsLoading] = useState(false);

    const { setSiteData } = useContentContext();

    useEffect(() => {
        setIsLoading(true); // Début du chargement
        const getpageContent = async () => {
            try {
                const content = await getContent('AllData');
                setSiteData(content);
                setIsLoading(false); // Fin du chargement
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        getpageContent(), [];
    }, []);

    return (
        <main>
            {isLoading && <LoadingBar />}
            {!isLoading && (
                <>
                    <Nav />
                    <div className='banner'>
                        <Banner />
                    </div>
                    <Outlet />
                    <Footer />
                </>
            )}
        </main>
    );
}

export default Layout;
