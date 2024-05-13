import React, { useEffect, useState } from "react";
import maxprofile from "/max-profile.png";
import { useContentContext } from "../utils/ContentContext";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface Props {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const About = React.forwardRef<HTMLDivElement, Props>(({}, ref) => {
  const { siteData } = useContentContext();

  // États pour titre et contenu, initialisés à des chaînes vides.
  const [titre, setTitre] = useState("");
  const [content, setContent] = useState("");

  // Utilisation de useEffect pour réagir aux changements de siteData.about
  useEffect(() => {
    if (siteData.about.length > 0) {
      setTitre(siteData.about[0].titre);
      setContent(siteData.about[0].contenu);
    }
  }, [siteData.about]); // Dépendance à siteData.about pour la réactivité

  // Condition de retour précoce si les données about ne sont pas disponibles
  if (titre === "" || content === "") {
    return null;
  }

  return (
    <section className="quisuisje siteWrapper" id="section-quisuisje" ref={ref}>
      <div className="quisuisje__imagediv">
        <img
          src={maxprofile}
          alt="max profile image"
          className="quisuisje__image"
        />
      </div>
      <div className="quisuisje__text">
        <h1>{titre}</h1>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            p: ({ ...props }) => <p {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
});

export default About;
