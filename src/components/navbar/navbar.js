import React, { useState, useEffect } from 'react'
import './navbar.css'

const LIENS_NAV = [
  { nom: 'Accueil',    href: '#hero' },
  { nom: 'Services',   href: '#services' },
  { nom: 'À propos',   href: '#about' },
  { nom: 'Témoignages', href: '#temoignages' },
  { nom: 'Tarifs',     href: '#tarifs' },
  { nom: 'FAQ',        href: '#faq' },
  { nom: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolle, setScrolle] = useState(false)
  const [menuOuvert, setMenuOuvert] = useState(false)
  const [sectionActive, setSectionActive] = useState('hero')

  useEffect(() => {
    const auDefilement = () => {
      // Ombre si on scrolle plus de 20px
      setScrolle(window.scrollY > 20)

      // Détection de la section active (Scroll Spy)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        const distanceHaut = section.offsetTop - 120
        const hauteurSection = section.offsetHeight
        const positionActuelle = window.scrollY

        if (positionActuelle >= distanceHaut && positionActuelle < distanceHaut + hauteurSection) {
          setSectionActive(section.getAttribute('id'))
        }
      })
    }

    window.addEventListener('scroll', auDefilement)
    return () => window.removeEventListener('scroll', auDefilement)
  }, [])

  return (
    <header className={`barre-nav ${scrolle ? 'barre-nav--scrolle' : ''}`}>
      <div className="barre-nav__interieur">
        
        {/* Logo */}
        <a href="#hero" className="barre-nav__logo">
          <span className="logo-point"></span>
          Clinique
        </a>

        {/* Navigation Desktop */}
        <nav className="barre-nav__menu">
          {LIENS_NAV.map((lien) => (
            <a
              key={lien.href}
              href={lien.href}
              className={`barre-nav__lien ${sectionActive === lien.href.replace('#', '') ? 'actif' : ''}`}
            >
              {lien.nom}
            </a>
          ))}
        </nav>

        {/* Actions & Burger */}
        <div className="barre-nav__actions">
          <a href="#contact" className="bouton-rdv-nav">Prendre RDV</a>
          
          <button 
            className={`burger-bouton ${menuOuvert ? 'ouvert' : ''}`}
            onClick={() => setMenuOuvert(!menuOuvert)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {/* Menu Mobile Déroulant */}
      <div className={`menu-mobile ${menuOuvert ? 'menu-mobile--ouvert' : ''}`}>
        {LIENS_NAV.map((lien) => (
          <a
            key={lien.href}
            href={lien.href}
            className={`menu-mobile__lien ${sectionActive === lien.href.replace('#', '') ? 'actif' : ''}`}
            onClick={() => setMenuOuvert(false)} // Ferme le menu au clic
          >
            {lien.nom}
          </a>
        ))}
        <a href="#contact" className="bouton-rdv-mobile" onClick={() => setMenuOuvert(false)}>
          Prendre RDV
        </a>
      </div>
    </header>
  )
}