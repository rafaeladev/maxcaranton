import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import mail from '/mail.svg';
import instagram from '/instagram.svg';

import maxNavLogo from '/max-nav-logo.svg';
import NavLinks from './NavLinks';
import BurgerMenu from './BurgerMenu';

function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        console.log('je suis la');
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            console.log(scrollPosition);
            if (scrollPosition > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={scrolled ? 'navbar navbar--scrolled' : 'navbar'}>
            <div className='navbar__content'>
                <Link
                    to='/'
                    className='navbar__title'
                >
                    <img
                        src={maxNavLogo}
                        alt='maxNavLogo'
                    />
                </Link>
                <div className='navbar__icons'>
                    <img
                        src={mail}
                        alt='mail'
                    />
                    <img
                        src={instagram}
                        alt='instagram'
                    />
                </div>
                <div className='navbar__desktop'>
                    <NavLinks />
                </div>
            </div>
            <BurgerMenu />
        </nav>
    );
}

export default Nav;
