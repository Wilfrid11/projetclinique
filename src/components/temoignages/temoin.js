import React, { useState } from 'react';
import './temoin.css';

const TEMOINGNAGES = [
  { id: 1, nom: 'Sophie Morel', texte: "Une expérience radicalement différente. On ne se sent pas comme un numéro de dossier. L'accueil est chaleureux et les explications du Dr. Bernard étaient limpides." },
  { id: 2, nom: 'Jean-Marc Lefebvre', texte: "Le service de cardiologie est exceptionnel. J'ai pu obtenir un rendez-vous rapidement et l'équipement semble vraiment être à la pointe du progrès technologique." },
  { id: 3, nom: 'Lucie Durand', texte: "Propreté impeccable, personnel aux petits soins. C'est la première fois que je repars d'une clinique médicale en me sentant aussi détendue et écoutée." },
  { id: 4, nom: 'Kofi Mensah', texte: "J'ai emmené mes enfants en pédiatrie. Le médecin a pris son temps. Un vrai soulagement pour des parents anxieux." },
];

const VISIBLE = 3;

export default function Temoignages() {
  const [debut, setDebut] = useState(0);

  const precedent = () => setDebut(s => Math.max(0, s - 1));
  const suivant = () => setDebut(s => Math.min(TEMOINGNAGES.length - VISIBLE, s + 1));

  return (
    <section id='temoignages' className="section-temoignages">
      <div className="conteneur-global">
        
        <div className="entete-temoignages">
          <div className="entete-texte">
            <h2 className="titre-temoignages">La voix de nos patients</h2>
            <p className="sous-titre-temoignages">
              Chaque jour, nous nous efforçons de mériter la confiance de ceux qui nous choisissent pour leur santé.
            </p>
          </div>
          <div className="navigation-temoignages">
            <button 
              className="bouton-nav" 
              onClick={precedent} 
              disabled={debut === 0}
            >
              ‹
            </button>
            <button 
              className="bouton-nav" 
              onClick={suivant} 
              disabled={debut >= TEMOINGNAGES.length - VISIBLE}
            >
              ›
            </button>
          </div>
        </div>

        <div className="grille-temoignages">
          {TEMOINGNAGES.slice(debut, debut + VISIBLE).map((t) => (
            <article key={t.id} className="carte-temoignage">
              <div className="utilisateur-temoignage">
                {/* Remplace par une vraie balise img si tu as les photos */}
                <div className="avatar-placeholder"></div>
                <span className="nom-utilisateur">{t.nom}</span>
              </div>
              <p className="texte-temoignage">"{t.texte}"</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}