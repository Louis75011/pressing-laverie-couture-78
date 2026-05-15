import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowLeft, Shirt, Sparkles, Wind } from 'lucide-react';

export default function ServicePressing() {
  return (
    <main id="main-content" className="flex-1 w-full relative z-0 pt-32 pb-24 bg-white text-navy font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <a href="#" className="inline-flex items-center gap-2 text-teal font-medium mb-12 hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </a>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-light border border-teal/20 text-teal font-medium text-sm mb-6 uppercase tracking-widest">
              Soin du vêtement
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-display">
              Nettoyage Pressing <br /> <span className="text-teal font-light italic">Artisanal</span>
            </h1>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              Nous traitons chaque vêtement comme une pièce unique. Notre expertise en nettoyage à sec permet de préserver les fibres les plus délicates tout en éliminant les taches les plus tenaces.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
               {[
                 { icon: <Shirt className="w-5 h-5" />, text: "Costumes & Chemises" },
                 { icon: <Sparkles className="w-5 h-5" />, text: "Soie & Dentelle" },
                 { icon: <Wind className="w-5 h-5" />, text: "Manteaux & Cuirs" },
                 { icon: <Check className="w-5 h-5" />, text: "Finiton à la main" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-off-white border border-navy/5">
                   <div className="text-teal">{item.icon}</div>
                   <span className="font-medium text-sm">{item.text}</span>
                 </div>
               ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-teal-light relative overflow-hidden"
          >
             <img 
               src="https://i.ibb.co/Q7QFHbLY/portfolio-01.jpg" 
               alt="Pressing professionnel" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               referrerPolicy="no-referrer"
             />
          </motion.div>
        </div>

        <div className="bg-navy rounded-none p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 font-display text-center">Ce que nous traitons avec soin</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-teal font-bold mb-4 uppercase tracking-widest text-sm">Garde-robe classique</h3>
                <ul className="space-y-3 opacity-80 font-sans">
                  <li>— Pantalons & Jupes</li>
                  <li>— Vestes de tailleur</li>
                  <li>— Imperméables (Trench)</li>
                  <li>— Pulls en cachemire</li>
                </ul>
              </div>
              <div>
                <h3 className="text-teal font-bold mb-4 uppercase tracking-widest text-sm">Cérémonie & Soirée</h3>
                <ul className="space-y-3 opacity-80 font-sans">
                  <li>— Robes de mariée</li>
                  <li>— Smokings & Queues-de-pie</li>
                  <li>— Robes de cocktail</li>
                  <li>— Étoffes précieuses (Velours, Satin)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-teal font-bold mb-4 uppercase tracking-widest text-sm">Saison & Spécifique</h3>
                <ul className="space-y-3 opacity-80 font-sans">
                  <li>— Doudounes (Plumes & Synthétique)</li>
                  <li>— Manteaux en laine</li>
                  <li>— Vêtements de ski</li>
                  <li>— Accessoires (Écharpes, Cravates)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
