import React, { useState } from 'react';
import './faq.css';

export default function Faq() {
  const [indexOuvert, setIndexOuvert] = useState(0); // La 3ème question est ouverte par défaut comme sur l'image

  const questions = [
    { q: "Comment prendre rendez-vous en ligne ?", a: "Vous pouvez utiliser notre formulaire de contact ci-dessous ou nous appeler directement." },
    { q: "Quelles sont vos mesures de confidentialité ?", a: "Nous respectons strictement le secret médical et la protection de vos données personnelles." },
    { q: "Quels documents apporter pour ma première visite ?", a: "Veuillez vous munir de votre carte vitale, de votre carte de mutuelle ainsi que de vos derniers examens biologiques ou d'imagerie si vous en possédiez." },
    { q: "Proposez-vous des téléconsultations ?", a: "Oui, certaines spécialités permettent un suivi à distance via notre plateforme sécurisée." }
  ];

  return (
    <section id='faq' className="section-faq">
      <div className="conteneur-faq">
        <h2 className="titre-faq">Questions Fréquentes</h2>
        <p className="sous-titre-faq">Tout ce que vous devez savoir pour préparer votre visite.</p>

        <div className="liste-accordeon">
          {questions.map((item, index) => (
            <div key={index} className={`item-faq ${indexOuvert === index ? 'actif' : ''}`}>
              <button className="bouton-question" onClick={() => setIndexOuvert(indexOuvert === index ? null : index)}>
                <span>{item.q}</span>
                <span className="icone-chevron">{indexOuvert === index ? '▲' : '▼'}</span>
              </button>
              {indexOuvert === index && (
                <div className="reponse-faq">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}