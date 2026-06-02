import React from 'react'
import {
  Stethoscope,
  HeartPulse,
  Brain,
  Microscope,
  Baby, // Remplaçant de FaChild pour rester sur Lucide
  Sparkles,
  Siren
} from 'lucide-react';
import './services.css'

export default function Services() {
  const services = [
    { icon: Stethoscope, title: 'Médecine Générale', desc: 'Suivi complet, bilans de santé et gestion des soins primaires pour toute la famille.' },
    { icon: HeartPulse, title: 'Cardiologie', desc: 'Dépistage, ECG et soins des pathologies cardiovasculaires.', tag: 'ÉQUIPEMENT HD' },
    { icon: Brain, title: 'Neurologie', desc: 'Exploration du système nerveux et troubles de la mémoire.', tag: 'EXPERTISE SENIOR' },
    { icon: Microscope, title: 'Analyses', desc: 'Analyses biologiques et prélèvements rapides avec résultats sécurisés.', tag: 'LABO 24h/7' },
    { icon: Baby, title: 'Pédiatrie', desc: 'Soins attentionnés pour la croissance et le bien-être de vos enfants.' },
    { icon: Sparkles, title: 'Dermatologie', desc: 'Santé de la peau et interventions laser de dernière génération.' },
  ]

  return (
    <section id='services' className="services">
      <div className="container">
        <div className="services__header">
          <h2 className="services__main-title">Nos différents services</h2>
          <p className="services__subtitle">
            Une équipe pluridisciplinaire dédiée à votre santé globale, utilisant des équipements de pointe.
          </p>
        </div>

        <div className="services__grid">
          {/* Carte 1 */}
          <ServiceCard data={services[0]} colorClass="icon-blue" />

          {/* Carte 2 */}
          <ServiceCard data={services[1]} colorClass="icon-orange" showTag />

          {/* Carte 3 */}
          <ServiceCard data={services[2]} colorClass="icon-purple" showTag />

          {/* Carte 4 */}
          <ServiceCard data={services[3]} colorClass="icon-darkblue" showTag />

          {/* Carte 5 */}
          <ServiceCard data={services[4]} colorClass="icon-green" />

          {/* CARDE SPÉCIALE : URGENCE */}
          <div className="service-card service-card--featured">
            <div className="featured__content">
              <div className="featured__icon-box">
                <Siren size={40} color="#fff" />
              </div>
              <h3 className="featured__title">Urgence Sans RDV</h3>
              <p className="featured__desc">
                Une équipe dédiée aux soins non programmés pour les petites urgences du quotidien.
              </p>
              <button className="featured__btn">Voir les temps d'attente</button>
            </div>
          </div>

          {/* Carte 6 */}
          <ServiceCard data={services[5]} colorClass="icon-softorange" />
        </div>
      </div>
    </section>
  )
}

// Petit composant interne pour éviter la répétition de code
function ServiceCard({ data, colorClass, showTag }) {
  const IconComponent = data.icon; // On récupère le composant d'icône
  return (
    <div className="service-card">
      <div className={`service-card__icon ${colorClass}`}>
        <IconComponent size={28} />
      </div>
      <h3 className="service-card__title">{data.title}</h3>
      <p className="service-card__desc">{data.desc}</p>
      {showTag && <span className="service-card__tag">{data.tag}</span>}
    </div>
  );
}