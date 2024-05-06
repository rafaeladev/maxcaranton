import { useState } from 'react';
import NavLinks from './NavLinks';

const BurgerMenu = () => {
    const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);

    const toggleMenu = () => {
        setIsBurgerMenuOpened(!isBurgerMenuOpened);
    };
    return (
        <>
            <div className='navbar__hamburger'>
                {/* Bouton du menu burger */}
                <button
                    className='hamburger'
                    onClick={toggleMenu}
                    aria-label={`button--burgerMenu`}
                >
                    <div
                        className={isBurgerMenuOpened ? `bar bar--open-1` : 'bar bar--closed-1`'}
                    ></div>
                    <div
                        className={isBurgerMenuOpened ? `bar bar--open-2` : 'bar bar--closed-2`'}
                    ></div>
                    <div
                        className={isBurgerMenuOpened ? `bar bar--open-3` : 'bar bar--closed-3`'}
                    ></div>
                </button>
            </div>
            {/* Contenu du menu, affiché si isBurgerMenuOpened est vrai */}
            <div className={`hamburger__menu  ${isBurgerMenuOpened && 'hamburger--open'}`}>
                {/* ${isBurgerMenuOpened && 'hamburger--open'} */}
                <div className='hamburger__menu__list'>
                    <NavLinks />
                </div>
            </div>
        </>
    );
};

export default BurgerMenu;
