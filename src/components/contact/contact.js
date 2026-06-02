import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Calendar, Clock } from 'lucide-react';
import './contact.css';

export default function Contact() {
  return (
    <section id='contact' className="section-contact">
      <div className="conteneur-contact">
        <div className="bloc-rendez-vous">
          
          {/* Formulaire à Gauche */}
          <div className="formulaire-rdv">
            <h3 className="titre-form">Prendre rendez-vous</h3>
            
            <div className="groupe-input">
              <label>Spécialité</label>
              <select className="select-custom">
                <option>Médecine Générale</option>
                <option>Cardiologie</option>
                <option>Neurologie</option>
                <option>Pédiatrie</option>
                <option>Dermatologie</option>
              </select>
            </div>

            <div className="groupe-input">
              <label>Médecin préféré</label>
              <select className="select-custom">
                <option>Tout médecin disponible</option>
                <option>Dr Wilson</option>
                <option>Dr Sophia</option>
              </select>
            </div>

            <div className="ligne-double">
              <div className="groupe-input">
                <label><Calendar size={14} style={{marginRight: '5px'}}/> Date</label>
                <input type="date" className="input-custom" />
              </div>
              <div className="groupe-input">
                <label><Clock size={14} style={{marginRight: '5px'}}/> Heure</label>
                <input type="time" className="input-custom" />
              </div>
            </div>

            <button className="bouton-bleu">Confirmer la disponibilité</button>
            <p className="note-securite">
              <ShieldCheck size={18} className="icone-note" /> 
              Vos données sont sécurisées et confidentielles.
            </p>
          </div>

          {/* Carte et Infos à Droite */}
          <div className="carte-visuelle">
            <div className="badge-infos">
              <div className="info-ligne">
                <div className="icone-info-cercle">
                  <MapPin size={20} />
                </div>
                <div>
                  <strong>Clinique</strong><br />
                  15 Avenue de la République, Cotonou, Bénin
                </div>
              </div>

              <div className="info-ligne">
                <div className="icone-info-cercle">
                  <Phone size={20} />
                </div>
                <div>
                  <strong>+229 01 63 45 67 89</strong><br />
                  Accueil ouvert 7j/7 - 24h/24
                </div>
              </div>

              <div className="info-ligne">
                <div className="icone-info-cercle">
                  <Mail size={20} />
                </div>
                <div>
                    <strong>contact@clinicalserenity.bj</strong><br />
                    Réponse sous 24h
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}