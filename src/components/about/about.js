import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id='about' className="section-apropos">
      <div className="conteneur-apropos">
        
        {/* GRILLE D'IMAGES DÉCALÉES (Style Scolaro) */}
        <div className="grille-images-apropos">
          <div className="cadre-image lateral">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800" 
              alt="Expert médical" 
            />
          </div>
          <div className="cadre-image centre">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800" 
              alt="Plateau technique" 
            />
          </div>
          <div className="cadre-image lateral">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" 
              alt="Clinique apaisante" 
            />
          </div>
        </div>

        {/* ENTÊTE DE TEXTE */}
        <div className="entete-apropos">
          <h2 className="titre-principal-apropos">Plus qu'une clinique, un sanctuaire de santé.</h2>
          <p className="description-generale">
            Fondée avec la vision de transformer l'expérience médicale, Clinique... 
            combine l'excellence clinique avec un environnement conçu pour réduire le stress 
            et favoriser la guérison.
          </p>
        </div>

        {/* GRILLE DES ENGAGEMENTS EN ESCALIER (Sur une même ligne décalée) */}
        <div className="grille-engagements-escalier">
          
          <div className="carte-engagement">
            <h3 className="titre-engagement">Équipement Next-Gen</h3>
            <p className="description-engagement">
              Accès aux plateaux techniques les plus performants pour des diagnostics d'une précision inégalée.
            </p>
          </div>

          <div className="carte-engagement">
            <h3 className="titre-engagement">Approche Humaine</h3>
            <p className="description-engagement">
              Un temps de consultation allongé pour une écoute véritable. Nous plaçons la bienveillance au cœur de chaque consultation.
            </p>
          </div>

          <div className="carte-engagement">
            <h3 className="titre-engagement">Environnement Apaisant</h3>
            <p className="description-engagement">
              Design acoustique et lumière naturelle pour votre confort et votre sérénité au quotidien.
            </p>
          </div>

          <div className="carte-engagement">
            <h3 className="titre-engagement">Médecins experts</h3>
            <p className="description-engagement">
              Une équipe de spécialistes reconnus formés aux dernières avancées de la recherche médicale.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;