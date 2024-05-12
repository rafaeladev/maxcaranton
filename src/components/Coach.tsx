import CardList from './CardList';

// Contexte
import { useContentContext } from '../utils/ContentContext';

// Librairies
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

type Props = {
    ref: React.RefObject<HTMLDivElement>;
};

function Coach({ ref }: Props) {
    const { siteData } = useContentContext();

    const images = ['/section1.png', '/section2.png', '/section3.png', '/section4.png'];

    if (!siteData.coach) {
        return null;
    }
    const cardsData = siteData.coach
        .slice(1) // Cela exclut le premier élément (à l'index 0)
        .map((item, index) => ({
            title: item.titre,
            image: images[index],
            description: item.contenu,
        }));

    //  const cardsData = siteData.coach;

    return (
        <section
            id='section-coach'
            className='coach'
            ref={ref}
        >
            <div className='siteWrapper'>
                <h2>{siteData.coach[0] && siteData.coach[0].titre}</h2>
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        p: ({ ...props }) => (
                            <p
                                {...props}
                                className='coach__text'
                            />
                        ),
                    }}
                >
                    {siteData.coach[0] && siteData.coach[0].contenu}
                </ReactMarkdown>
                <article>
                    <CardList cards={cardsData} />
                </article>
            </div>
        </section>
    );
}

export default Coach;
