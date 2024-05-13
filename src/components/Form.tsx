import React, { useState, FormEvent } from "react";

interface FormFields {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
}

const ContactForm = () => {
  const [fields, setFields] = useState<FormFields>({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Vérifiez ici si tous les champs requis sont remplis
    if (
      !fields.prenom ||
      !fields.nom ||
      !fields.email ||
      !fields.sujet ||
      !fields.message
    ) {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }
    // Soumettez les données à une API ou quelque chose
    console.log("Form Submitted", fields);
    alert("Formulaire soumis avec succès!");
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <div className="contactForm__line">
        <input
          type="text"
          name="prenom"
          className="contactForm__textArea contactForm--lineElement"
          value={fields.prenom}
          onChange={handleChange}
          placeholder="Prénom"
          required
        />
        <input
          type="text"
          name="nom"
          className="contactForm__textArea contactForm--lineElement"
          value={fields.nom}
          onChange={handleChange}
          placeholder="Nom"
          required
        />
      </div>

      <div className="contactForm__line">
        <input
          type="email"
          name="email"
          className="contactForm__textArea contactForm--70element"
          value={fields.email}
          placeholder="E-mail"
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="telephone"
          className="contactForm__textArea"
          placeholder="Téléphone"
          value={fields.telephone}
          onChange={handleChange}
        />
      </div>
      <div className="contactForm__line">
        <input
          type="text"
          name="sujet"
          className="contactForm__textArea contactForm--allLine"
          placeholder="Sujet du mail"
          value={fields.sujet}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contactForm__line contactForm__message">
        <textarea
          name="message"
          value={fields.message}
          className="contactForm__textArea contactForm--allLine"
          placeholder="Détaille-moi ton objectif"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn">
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
