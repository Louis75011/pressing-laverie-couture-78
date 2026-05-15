import { useEffect, useState } from 'react';
import Home from './components/Home';
import EntreprisesPliPro from './components/EntreprisesPliPro';
import ServicePressing from './components/ServicePressing';
import ServiceLaverie from './components/ServiceLaverie';
import ServiceCouture from './components/ServiceCouture';

function App() {
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // scroll to top on page change
      if (['#mentions-legales', '#confidentialite', '#pli-pro', '#service-pressing', '#service-laverie', '#service-couture'].includes(window.location.hash)) {
         window.scrollTo(0, 0);
      }
    };
    
    // Set initial
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentHash) {
      case '#mentions-legales':
        return <LegalMentions />;
      case '#confidentialite':
        return <PrivacyPolicy />;
      case '#pli-pro':
        return <EntreprisesPliPro />;
      case '#service-pressing':
        return <ServicePressing />;
      case '#service-laverie':
        return <ServiceLaverie />;
      case '#service-couture':
        return <ServiceCouture />;
      default:
        // By default it's home, scrolling to anchors will work natively
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-900 font-sans selection:bg-accent-500 selection:text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-900 text-white px-4 py-2 z-50 rounded-md font-medium">Aller au contenu principal</a>
      <Navigation currentHash={currentHash} />
      {renderContent()}
      <Footer />
    </div>
  );
}

function Navigation({ currentHash }: { currentHash: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkHero = currentHash === '#pli-pro' && !scrolled;
  const textColor = isDarkHero ? 'text-white' : 'text-navy';

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group focus-ring p-1" onClick={() => { if(window.location.hash) window.location.hash = ''; window.scrollTo(0, 0); }}>
          <span className={`font-display font-semibold italic text-2xl tracking-tight ${textColor} group-hover:text-teal transition-colors flex flex-col leading-tight`}>
            <span>La Clé</span>
            <span className="text-sm not-italic opacity-70 tracking-widest uppercase">Saint-Pierre</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className={`text-sm font-medium tracking-wide border-b border-transparent ${textColor} hover:text-teal hover:border-teal transition-colors focus-ring`}>Pressing & Retouches</a>
          <a href="#tarifs" className={`text-sm font-medium tracking-wide border-b border-transparent ${textColor} hover:text-teal hover:border-teal transition-colors focus-ring`}>Tarifs</a>
          <a href="#pli-pro" className="text-sm font-medium tracking-wide border border-teal text-teal hover:bg-teal hover:text-white px-3 py-1 rounded-full transition-colors focus-ring flex items-center gap-2">Pli Pro <span className="opacity-70 text-xs">Entreprises</span></a>
          <a href="#contact" className={`text-sm font-medium tracking-wide px-6 py-2 border transition-colors focus-ring rounded ${
            isDarkHero 
              ? 'bg-white text-navy border-white hover:bg-transparent hover:text-white' 
              : 'bg-navy text-white border-navy hover:bg-white hover:text-navy'
          }`}>
            Nous trouver
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className={`md:hidden p-2 focus-ring ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
             ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
             )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-navy/10 shadow-lg md:hidden">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-base font-medium text-navy py-2 border-b border-off-white">Nos Services</a>
            <a href="#tarifs" onClick={() => setMenuOpen(false)} className="text-base font-medium text-navy py-2 border-b border-off-white">Tarifs</a>
            <a href="#pli-pro" onClick={() => setMenuOpen(false)} className="text-base font-medium text-teal py-2 border-b border-off-white">Offre Entreprises (Pli Pro)</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-base font-medium text-navy py-2">Nous contacter</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-[80px]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <span className="font-display font-semibold italic text-3xl tracking-tight text-white flex flex-col leading-tight">
                <span>La Clé</span>
                <span className="text-sm not-italic opacity-70 tracking-widest uppercase">Saint-Pierre</span>
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-sm mb-6 leading-relaxed font-sans">
              Votre artisan pressing à Élancourt. Un soin minutieux pour vos vêtements : nettoyage, retouches, et blanchisserie par Stéphane Fialip.
            </p>
          </div>
          <div>
            <h4 className="font-sans font-medium uppercase tracking-widest text-teal mb-6 text-sm">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/80 font-sans">
              <li><a href="#" className="hover:text-white transition-colors focus-ring">Accueil</a></li>
              <li><a href="#services" className="hover:text-white transition-colors focus-ring">Services</a></li>
              <li><a href="#tarifs" className="hover:text-white transition-colors focus-ring">Tarifs</a></li>
              <li><a href="#pli-pro" className="hover:text-white transition-colors focus-ring text-teal-light">Offre Entreprises</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors focus-ring">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-medium uppercase tracking-widest text-teal mb-6 text-sm">Légal</h4>
            <ul className="space-y-4 text-sm text-white/80 font-sans">
              <li><a href="#mentions-legales" className="hover:text-white transition-colors focus-ring">Mentions légales</a></li>
              <li><a href="#confidentialite" className="hover:text-white transition-colors focus-ring">Politique de confidentialité</a></li>
              <li><a href="#rgpa" className="hover:text-white transition-colors focus-ring">Accessibilité : conforme partiellement</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/20 text-sm text-white/60 flex flex-col sm:flex-row justify-between items-center gap-4 font-sans">
          <p>© {new Date().getFullYear()} La Clé Saint-Pierre. Tous droits réservés.</p>
          <p>Un site internet créé par <a href="https://arxsystema.fr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal transition-colors font-medium">Arx Systema</a></p>
        </div>
      </div>
    </footer>
  );
}

function LegalMentions() {
  return (
    <main id="main-content" className="flex-1 w-full relative z-0 pt-32 pb-24 bg-off-white text-navy font-sans">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 font-display">Mentions Légales</h1>
        <div className="prose prose-brand opacity-80 space-y-6">
          <section>
             <h2 className="text-2xl font-bold mt-8 mb-4 font-display">1. Éditeur du site</h2>
             <p>Le présent site est édité par : <strong>Stéphane Fialip (La Clé Saint-Pierre)</strong></p>
             <p>Adresse : Centre commercial La Clé Saint-Pierre, 78990 Élancourt</p>
             <p>Téléphone : 07 60 31 24 24</p>
          </section>
          
          <section>
             <h2 className="text-2xl font-bold mt-8 mb-4 font-display">2. Directeur de la publication</h2>
             <p>M. Stéphane Fialip.</p>
          </section>
          
          <section>
             <h2 className="text-2xl font-bold mt-8 mb-4 font-display">3. Création du site et Hébergement</h2>
             <p>Conception et développement : <strong><a href="https://arxsystema.fr" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Arx Systema (Louis Rouanet)</a></strong>, agence web dans les Yvelines.</p>
             <p>Hébergement : Google Cloud (via Google AI Studio).</p>
          </section>

          <section>
             <h2 className="text-2xl font-bold mt-8 mb-4 font-display">4. Propriété intellectuelle</h2>
             <p>L'ensemble du contenu (textes, images, code, logos) présent sur ce site est la propriété exclusive de La Clé Saint-Pierre ou de ses éventuels partenaires avec leur autorisation. Toute reproduction est interdite sans accord écrit préalable.</p>
          </section>

          <section>
            <p className="mt-8 text-sm italic opacity-70">Dernière mise à jour : Mai 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}

function PrivacyPolicy() {
  return (
    <main id="main-content" className="flex-1 w-full relative z-0 pt-32 pb-24 bg-off-white text-navy font-sans">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 font-display">Politique de Confidentialité</h1>
        <div className="prose prose-brand opacity-80 space-y-6">
          <p>Le site vitrine de La Clé Saint-Pierre a pour objectif premier de présenter les services du pressing. Il ne collecte aucune donnée personnelle d'utilisateurs en ligne, dans la mesure où aucun formulaire n'est présent sur le site.</p>
          
          <section>
             <h2 className="text-2xl font-bold mt-8 mb-4 font-display">1. Cookies</h2>
             <p>Ce site utilise uniquement des cookies techniques strictement nécessaires à son bon fonctionnement et à sa sécurisation. Il n'utilise aucun cookie de ciblage publicitaire ni d'analyse intrusif nécessitant un consentement préalable.</p>
          </section>

          <section>
            <p className="mt-8 text-sm italic opacity-70">Dernière mise à jour : Mai 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
