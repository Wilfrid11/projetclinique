import React from 'react';
import './hero.css';
 

export default function Hero() {
  return (
    <section id='hero' className="hero-section">
      {/* L'image est gérée en background via le CSS */}
      <div className="hero-overlay"></div>
      
      <div className="hero-conteneur">
        <div className="hero-interieur">
          
          {/* COLONNE GAUCHE : TEXTE ET ACTIONS */}
          <div className="hero-contenu">
            <h1 className="hero-titre">
              L'Excellence Médicale au Service de Votre 
              <span className="hero-titre-bleu"> Sérénité.</span>
            </h1>
            <p className="hero-description">
              Découvrez une approche de soin unique où la précision clinique rencontre le confort absolu. 
              Une expertise de pointe dans un cadre apaisant conçu pour votre bien-être.
            </p>
            <div className="hero-boutons">
              <a href="#formulaire" className="bouton-rdv">Prendre rendez-vous</a>
            </div>
          </div>

          {/* COLONNE DROITE : LE BADGE (toujours présent) */}
          <div className="hero-visuel">
            <div className="badge-flotte">
              <div className="badge-icone">🛡️</div>
              <div className="badge-texte">
                <span className="badge-label">TECHNOLOGIE</span>
                <p className="badge-titre">Diagnostic IA de précision</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}