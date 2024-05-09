import CardList from '../components/CardList';
import InstagramFeed from '../components/InstagramFeed';
import maxprofile from '/max-profile.png';

import { useRef } from 'react';

// Librairies
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Home() {
    const sectionRef = useRef(null);

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     const section = sectionRef.current;

    //     ScrollTrigger.create({
    //         trigger: section,
    //         start: `top 10%`, // Commencer à 10% de la hauteur de la fenêtre
    //         end: `bottom 10%`, // Finir à 10% de la hauteur de la fenêtre
    //         scrub: true,
    //         markers: true,
    //         toggleClass: { targets: 'navbar', className: 'navbar--scrolled' },
    //     });
    // }, []);

    const cardsData = [
        {
            title: 'Transformation physique',
            image: '/section1.png',
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        },
        {
            title: 'Suivi en ligne',
            image: '/section2.png',
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis
            mi dapibus, aliquet lectus eget, maximus lacus.`,
        },
        {
            title: 'Programme personnalisé',
            image: '/section3.png',
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis
            mi dapibus, aliquet lectus eget, maximus lacus.`,
        },
        {
            title: 'Perte de poids',
            image: '/section4.png',
            description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis
            mi dapibus, aliquet lectus eget, maximus lacus.`,
        },
    ];
    return (
        <>
            <section
                className='quisuisje siteWrapper'
                id='section-quisuisje'
                ref={sectionRef}
            >
                <div className='quisuisje__imagediv'>
                    <img
                        src={maxprofile}
                        alt='max profile image'
                        className='quisuisje__image'
                    />
                </div>
                <div className='quisuisje__text'>
                    <h1>Qui suis je?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis
                        mi dapibus, aliquet lectus eget, maximus lacus. Duis dignissim, leo non
                        consequat dictum, ipsum tortor posuere lacus, eget maximus mi felis ut
                        lectus. Vivamus ac tempus odio. Duis vel lorem tempor, scelerisque nibh at,
                        elementum ligula. Curabitur vitae mauris ac turpis sagittis rutrum. Integer
                        sed porttitor diam, quis maximus velit. Etiam congue, mi eu rutrum tempus,
                        mi ante tempus velit, sit amet mattis enim tortor efficitur elit. Praesent
                        at nunc posuere, posuere augue non, interdum nunc. Suspendisse et massa at
                        magna auctor sagittis eget id lectus. Sed in risus est. Aliquam erat
                        volutpat.
                    </p>
                </div>
            </section>
            <section
                id='section-coach'
                className='coach'
            >
                <div className='siteWrapper'>
                    <h2>Coach sportif</h2>
                    <p className='coach__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis
                        mi dapibus, aliquet lectus eget, maximus lacus.
                    </p>
                    <article>
                        <CardList cards={cardsData} />
                    </article>
                </div>
            </section>
            <section>
                <h2 id='section-actualites'>Actualités</h2>
                {/* <InstagramFeed /> */}
            </section>
            <section>
                <h2 id='section-temoinages'>Témoignages</h2>
            </section>
            <section>
                <h2 id='section-contact'>Contact</h2>
            </section>
        </>
    );
}

export default Home;
