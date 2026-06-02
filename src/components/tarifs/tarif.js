import React from 'react';
import './tarif.css';

export default function SectionTarifs() {
  return (
    <section id="tarifs" className="section-tarifs">
      <div className="conteneur-tarifs">
        <h2 className="titre-principal-tarifs">Transparence des Tarifs</h2>
        <p className="sous-titre-tarifs">
          Nous croyons en une communication claire. Voici nos tarifs pour les consultations les plus courantes.
        </p>

        <div className="grille-cartes-tarifs">
          
          {/* Carte 1 : Médecine Générale */}
          <div className="carte-tarif-blanche">
            <h3 className="nom-consultation">Médecine Générale</h3>
            <div className="bloc-prix">
              <span className="montant">30 000F CFA</span>
              <span className="unite">/consultation</span>
            </div>
            <ul className="liste-services-tarifs">
              <li><span className="coche">✔️</span> Bilan de santé complet</li>
              <li><span className="coche">✔️</span> Renouvellement ordonnance</li>
              <li><span className="coche">✔️</span> Accès portail patient</li>
            </ul>
            {/* Lien ajouté ici */}
            <a href="#contact" className="bouton-action-tarif">Prendre RDV</a>
          </div>

          {/* Carte 2 : Spécialistes (La carte bleue centrale) */}
          <div className="carte-tarif-bleue">
            <div className="badge-populaire">LE PLUS DEMANDÉ</div>
            <h3 className="nom-consultation-blanche">Spécialistes</h3>
            <div className="bloc-prix-blanc">
              <span className="montant-blanc">50 000F CFA</span>
              <span className="unite-blanche">/consultation</span>
            </div>
            <p className="precision-specialites">Cardio, Derma, Pédiatrie</p>
            <ul className="liste-services-tarifs-blanche">
              <li><span className="coche-blanche">✔️</span> Examen diagnostique inclus</li>
              <li><span className="coche-blanche">✔️</span> Compte-rendu immédiat</li>
              <li><span className="coche-blanche">✔️</span> Suivi post-consultation</li>
            </ul>
            {/* Lien ajouté ici */}
            <a href="#contact" className="bouton-action-tarif-blanc">Prendre RDV Spécialiste</a>
          </div>

          {/* Carte 3 : Check-up Complet */}
          <div className="carte-tarif-blanche">
            <h3 className="nom-consultation">Check-up Complet</h3>
            <div className="bloc-prix">
              <span className="montant">190 000F CFA</span>
              <span className="unite">/forfait</span>
            </div>
            <ul className="liste-services-tarifs">
              <li><span className="coche">✔️</span> Bilan biologique complet</li>
              <li><span className="coche">✔️</span> Électrocardiogramme</li>
              <li><span className="coche">✔️</span> Consultation diététique</li>
            </ul>
            {/* Lien ajouté ici */}
            <a href="#contact" className="bouton-action-tarif">Réserver Bilan</a>
          </div>

        </div>
      </div>
    </section>
  );
}