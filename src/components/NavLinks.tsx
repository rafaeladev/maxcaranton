import { useState } from 'react';

interface NavLinksProps {
    toggleMenu?: () => void; // Déclare toggleMenu comme une fonction facultative
}

function NavLinks({ toggleMenu }: NavLinksProps) {
    const [activeId, setActiveId] = useState('');

    const handleScrollToSection = (sectionId: string) => {
        setActiveId(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        if (toggleMenu) {
            toggleMenu(); // Appelle toggleMenu si elle est fournie
        }
    };

    return (
        <div className='navbar__linksList'>
            <button
                onClick={() => handleScrollToSection('section-quisuisje')}
                className={`text-nav navbar__link ${
                    activeId === 'section-quisuisje' ? 'navbar__active' : ''
                }`}
            >
                Qui suis-je
            </button>
            <button
                onClick={() => handleScrollToSection('section-coach')}
                className={`text-nav navbar__link ${
                    activeId === 'section-coach' ? 'navbar__active' : ''
                }`}
            >
                Coach sportif
            </button>
            <button
                onClick={() => handleScrollToSection('section-actualites')}
                className={`text-nav navbar__link ${
                    activeId === 'section-actualites' ? 'navbar__active' : ''
                }`}
            >
                Actualités
            </button>
            <button
                onClick={() => handleScrollToSection('section-temoinages')}
                className={`text-nav navbar__link ${
                    activeId === 'section-temoinages' ? 'navbar__active' : ''
                }`}
            >
                Témoignages
            </button>
            <button
                onClick={() => handleScrollToSection('section-contact')}
                className={`text-nav navbar__link ${
                    activeId === 'section-contact' ? 'navbar__active' : ''
                }`}
            >
                Contact
            </button>
        </div>
    );
}

export default NavLinks;
