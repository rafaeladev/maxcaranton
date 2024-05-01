import { Link } from 'react-router-dom';
import { useState } from 'react';

import mail from '/mail.svg';
import instagram from '/instagram.svg';

function Nav() {
    const [activeId, setActiveId] = useState('');
    // handleScrollToSection
    const handleScrollToSection = (sectionId: string) => {
        setActiveId(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <nav className='navbar'>
            <div className='navbar__content'>
                <Link
                    to='/'
                    className='navbar__title'
                >
                    Max Caranton
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
                <div className='navbar__linksList'>
                    <button
                        onClick={() => handleScrollToSection('section-quisuisje')}
                        className={`navbar__link ${
                            activeId === 'section-quisuisje' ? 'navbar__active' : ''
                        }`}
                    >
                        Qui suis-je
                    </button>
                    <button
                        onClick={() => handleScrollToSection('section-coach')}
                        className={`navbar__link ${
                            activeId === 'section-coach' ? 'navbar__active' : ''
                        }`}
                    >
                        Coach sportif
                    </button>
                    <button
                        onClick={() => handleScrollToSection('section-actualites')}
                        className={`navbar__link ${
                            activeId === 'section-actualites' ? 'navbar__active' : ''
                        }`}
                    >
                        Actualités
                    </button>
                    <button
                        onClick={() => handleScrollToSection('section-temoinages')}
                        className={`navbar__link ${
                            activeId === 'section-temoinages' ? 'navbar__active' : ''
                        }`}
                    >
                        Témoignages
                    </button>
                    <button
                        onClick={() => handleScrollToSection('section-contact')}
                        className={`navbar__link ${
                            activeId === 'section-contact' ? 'navbar__active' : ''
                        }`}
                    >
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
