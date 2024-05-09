import { Link } from 'react-router-dom';
import { useEffect, useRef, useLayoutEffect, useState } from 'react';

import mail from '/mail.svg';
import instagram from '/instagram.svg';

import maxNavLogo from '/max-nav-logo.svg';
import NavLinks from './NavLinks';
import BurgerMenu from './BurgerMenu';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Nav = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const div1 = useRef<HTMLDivElement>(null);

    // window.addEventListener('scroll', () => console.log(window.scrollY));

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const triggerElement = div1.current;
        const navbar = navRef.current;

        if (triggerElement && navbar) {
            ScrollTrigger.create({
                trigger: triggerElement,
                start: 'top 5.8%', // Quand le haut de div1 atteint le centre du viewport
                end: 'bottom bottom', // Vous pourriez ne pas avoir besoin de cette ligne si vous voulez que l'effet persiste
                toggleClass: { targets: navbar, className: 'scrolled' },
                markers: true,
                onEnter: () => navbar.classList.add('scrolled'), // Assure que la classe reste
                onLeaveBack: ({ progress, direction, isActive }) => {
                    // Supprime la classe si vous revenez en arrière
                    if (direction === -1) {
                        navbar.classList.remove('scrolled');
                    }
                },
            });
        }
    }, []);

    return (
        <>
            <nav
                className={'navbar '}
                ref={navRef}
            >
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
            <div
                className='div1'
                ref={div1}
            ></div>
        </>
    );
};

export default Nav;
