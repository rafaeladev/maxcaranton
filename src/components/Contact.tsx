import React, { useState, useEffect } from "react";

// Components
import ContactForm from "./Form";

// Contexte
import { useContentContext } from "../utils/ContentContext";

// Librairies
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {
  contactRef: React.RefObject<HTMLDivElement>;
};

const Contact = React.forwardRef<HTMLDivElement, Props>(({}, ref) => {
  const { siteData } = useContentContext();

  const [titre, setTitre] = useState("");
  const [content, setContent] = useState("");

  const [adresse, setAdresse] = useState("");
  const [mail, setMail] = useState("");

  useEffect(() => {
    if (siteData.contact.length > 0) {
      setTitre(siteData.contact[0].titre);
      setContent(siteData.contact[0].contenu);

      siteData.contact.forEach((item) => {
        if (item.titre === "adresse") {
          setAdresse(item.contenu);
        } else if (item.titre === "mail") {
          setMail(item.contenu);
        }
      });
    }
  }, [siteData.contact]); // Dépendance à siteData.about pour la réactivité

  return (
    <section className="siteWrapper contact" ref={ref}>
      <article className="contact">
        <div className="contact__text">
          <h2 id="section-contact">{titre}</h2>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              p: ({ ...props }) => <p {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
          <p>Adresse : {adresse}</p>
          <p>
            Contact : <a href={`mailto:${mail}`}>{mail}</a>
          </p>
        </div>
        <ContactForm />
      </article>
    </section>
  );
});

export default Contact;
