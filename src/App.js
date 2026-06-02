import React from 'react'
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Services from './components/services/secvices';
import About from './components/about/about';
import Temoin from './components/temoignages/temoin';
import Footer from './components/footer/footer';
import FAQ from './components/faq/faq';
import Tarifs from './components/tarifs/tarif';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Temoin />
      <Tarifs />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
