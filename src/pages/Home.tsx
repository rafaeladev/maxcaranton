import NewsList from "../components/NewsList";

import Pagination from "../components/Pagination";
import ReviewsList from "../components/ReviewsList";

import { useState, useRef } from "react";
import About from "../components/About";
import Coach from "../components/Coach";
import Contact from "../components/Contact.tsx";

function Home() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const coachSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const temoignagesData = [
    {
      name: "John Prerex",
      content: `Ça fait quelques mois que je suis suivi par Max pour perdre du poids, et franchement, il est top !
            Il est vraiment à l'écoute et il me motive à fond. Grâce à lui, j’ai vraiment vu la différence, pas juste sur la balance, mais je me sens aussi mieux dans ma peau. Je recommande à fond Max si vous voulez vraiment changer et atteindre vos objectifs.
            Merci !`,
    },
    {
      name: "Marion Dumonteil",
      content: `Max est un super coach qui est très à l'écoute. Il apporte de réels conseils pertinents et adaptés à votre condition physique pour permettre aux personnes d'atteindre leur objectif.
            Il m'a toujours motivé à dépasser mes limites et j'ai pu ainsi développé mes performances physiques comme je le souhaitais.
            Je le recommande les yeux fermés !`,
    },
    {
      name: "Valentin Leroy",
      content: `Super coach. Max donne vraiment envie de se remettre au sport et donner le meilleur de soi à chaque séance. En plus de sa motivation, il est extrêmement sympathique !`,
    },
    {
      name: "Julien B",
      content: `Grâce au coaching et l'accompagnement de Max, j'ai enfin pu atteindre mes objectifs et comprendre pourquoi je stagnais pendant tout ce temps. J'applique ses conseils au quotidien et on continue la progression.
            Merci Max 💪`,
    },
    {
      name: "Laura A.",
      content: `Grâce au coaching personnalisé de Max j’ai tonifié et musclé mon corps après une perte de poids. Il m’a même fait passer trois tractions au bout de 3 semaines. Chapeau 🎩.
            Je viens d’accoucher d’une petite fille, il est embauché pour ma nouvelle transfo physique, j’ai hâte ☺️`,
    },
    {
      name: "Oceane Tsar",
      content: `Un grand merci à Max de m'avoir rebooster 🔥. Le sport et moi faisant 2 de base, il a su me motiver et m'aider à me surpasser 🙏🏻 Grâce à son professionnalisme et son suivis vous ne serez pas seul dans ce combat 💪🏻
            PS: merci pour l'accueil incroyable 👏🏻`,
    },
    {
      name: "Nathan G",
      content: `Excellent coaching ! Je stagnais et n'arrivais plus à progresser en musculation. Cela fait maintenant plusieurs semaines que Max me suit. J'ai réussi à progresser et atteindre mes objectifs de prise de muscle grâce à un programme de muscu et un plan nutrition sur-mesure. Au top !`,
    },
    {
      name: "Johanne CIFRE",
      content: `Super coach, à l'écoute, pour ma part, c'était suite à une reprise apres une blessure au genou, pour une reprise du sport. Merci pour ton aide. Au top. Je recommande.`,
    },
    {
      name: "John Prerex",
      content: `Ça fait quelques mois que je suis suivi par Max pour perdre du poids, et franchement, il est top !
            Il est vraiment à l'écoute et il me motive à fond. Grâce à lui, j’ai vraiment vu la différence, pas juste sur la balance, mais je me sens aussi mieux dans ma peau. Je recommande à fond Max si vous voulez vraiment changer et atteindre vos objectifs.
            Merci !`,
    },
  ];

  // Temoignages pagination

  const elementsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastTemoignage = currentPage * elementsPerPage;
  const indexOfFirstTemoignage = indexOfLastTemoignage - elementsPerPage;
  const currentTemoignages = temoignagesData.slice(
    indexOfFirstTemoignage,
    indexOfLastTemoignage
  );

  // Actualités Instagram
  const actualitesData = [
    {
      srcImage: "/insta5.png",
      url: "https://www.instagram.com/p/C6wN7OiM-KU/?hl=fr",
    },
    {
      srcImage: "/insta6.png",
      url: "https://www.instagram.com/p/C6oksQrs52h/?hl=fr",
    },
    {
      srcImage: "/insta7.png",
      url: "https://www.instagram.com/p/C6eNXxrMkDE/?hl=fr",
    },
    {
      srcImage: "/insta8.png",
      url: "https://www.instagram.com/p/C6Y-aw3o42b/?hl=fr",
    },

    {
      srcImage: "/insta1.png",
      url: "https://www.instagram.com/p/C6OuKiUM-Uf/?hl=fr",
    },
    {
      srcImage: "/insta2.png",
      url: "https://www.instagram.com/p/C6HCbDjsvGk/?hl=fr",
    },
    {
      srcImage: "/insta3.png",
      url: "https://www.instagram.com/p/C4vrYAUsylG/?hl=fr",
    },
    {
      srcImage: "/insta4.png",
      url: "https://www.instagram.com/p/C4--pyfMYO6/?hl=fr",
    },
  ];

  const newsElementsPerPage = 4;
  const [newsCurrentPage, setNewsCurrentPage] = useState(1);
  const indexOfLastNews = newsCurrentPage * newsElementsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsElementsPerPage;
  const currentNews = actualitesData.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <>
      <About aboutRef={aboutSectionRef} />

      <Coach coachRef={coachSectionRef} />
      <section className="siteWrapper">
        <h2 id="section-actualites">Actualités</h2>
        <article>
          <NewsList news={currentNews} />
          <Pagination
            elementsPerPage={newsElementsPerPage}
            totalElements={actualitesData.length}
            paginate={setNewsCurrentPage}
            currentPage={newsCurrentPage}
          />
        </article>
      </section>
      <section className="siteWrapper">
        <h2 id="section-temoinages">Témoignages</h2>
        <article>
          <ReviewsList reviews={currentTemoignages} />
          <Pagination
            elementsPerPage={2}
            totalElements={temoignagesData.length}
            paginate={setCurrentPage}
            currentPage={currentPage}
          />
        </article>
      </section>
      <Contact contactRef={contactSectionRef} />
    </>
  );
}

export default Home;
