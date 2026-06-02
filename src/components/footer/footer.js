import React from 'react'
import './footer.css'

export default function PiedDePage() {
  // Année dynamique pour le copyright
  const anneeActuelle = new Date().getFullYear()

  return (
    <footer className="pied-de-page">
      <div className="conteneur-footer">
        
        {/* Colonne 1 : Identité et Localisation */}
        <div className="footer-colonne">
          <div className="footer-logo">
            <span className="point-logo" />
            Clinique
          </div>
          <p className="footer-adresse">
            15 Avenue de la République, <br />
            75011 Cotonou, Bénin
          </p>
          <p className="footer-contact-info">
            +229 01 63 45 67 89 <br />
            contact@clinicalserenity.fr
          </p>
        </div>

        {/* Colonne 2 : Navigation Rapide */}
        <div className="footer-colonne">
          <h4 className="footer-titre">Navigation</h4>
          <nav className="footer-liens">
            <a href="#accueil">Accueil</a>
            <a href="#services">Services</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        {/* Colonne 3 : Support & Horaires */}
        <div className="footer-colonne">
          <h4 className="footer-titre">Horaires</h4>
          <p className="footer-texte">
            Lundi - Vendredi : 08h - 20h <br />
            Samedi : 09h - 18h <br />
            <span className="urgence-texte">Urgences : 24j/7 - 24h/24</span>
          </p>
        </div>

      </div>

      {/* Barre de copyright et mentions légales (Bas du footer) */}
      <div className="footer-bas">
        <div className="conteneur-footer-bas">
          <p className="copyright-texte">
            © {anneeActuelle} Clinical Serenity. L'excellence au service de votre bien-être.
          </p>
          <div className="liens-legaux">
            <a href="#mentions">Mentions Légales</a>
            <a href="#confidentialite">Confidentialité</a>
            <a href="#plan">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  )
}