import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowLeft, Scissors, Ruler, Pen } from 'lucide-react';

export default function ServiceCouture() {
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
              L'art de l'aiguille
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-display">
              Couture & <br /> <span className="text-teal font-light italic">Retouches</span>
            </h1>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              Ne jetez plus vos vêtements abîmés. Notre atelier de couture à Élancourt redonne vie à votre garde-robe grâce à des ajustements précis et des réparations invisibles.
            </p>
            <div className="grid gap-6">
               {[
                 { icon: <Scissors className="w-6 h-6" />, title: "Ajustements", text: "Ourlets, cintrage de vestes, bas de manches." },
                 { icon: <Pen className="w-6 h-6" />, title: "Réparations", text: "Changements de fermetures éclair, accrocs, boutons." },
                 { icon: <Ruler className="w-6 h-6" />, title: "Confection", text: "Création et adaptation sur mesure de vos textiles." }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-6 group">
                   <div className="w-12 h-12 rounded-full border border-teal flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-colors flex-shrink-0">
                     {item.icon}
                   </div>
                   <div>
                     <h4 className="font-bold text-lg">{item.title}</h4>
                     <p className="text-sm opacity-70 underline decoration-teal/20">{item.text}</p>
                   </div>
                 </div>
               ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
             <div className="aspect-[3/4] bg-off-white overflow-hidden shadow-lg transform translate-y-8">
               <img src="https://i.ibb.co/B5rb2Zyj/3-logo-aiguille-couture.png" alt="Outils de couture" className="w-full h-full object-contain p-8" />
             </div>
             <div className="aspect-[3/4] bg-teal-light overflow-hidden shadow-lg">
               <img src="https://i.ibb.co/dwkYX8rV/portfolio-03.jpg" alt="Travail de couture" className="w-full h-full object-cover grayscale" />
             </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto border-y border-navy/10 py-16">
          <h2 className="text-3xl font-bold mb-12 font-display text-center">Nos prestations courantes</h2>
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-4">
            {[
              "Ourlet pantalon (simple ou piqué)",
              "Ourlet jean original",
              "Changement fermeture éclair manteau",
              "Reprise de taille (pantalon/jupe)",
              "Cintrage de chemise",
              "Changement de doublure",
              "Pose de pièces (coudières, genouillères)",
              "Réparation de déchirures (stoppage)"
            ].map((service, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-navy/5 last:border-0">
                <span className="font-medium text-sm">{service}</span>
                <Check className="w-4 h-4 text-teal" />
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-teal-light/30 text-center font-medium italic text-navy/70">
            "Pour les projets de confection ou les pièces de haute couture, nous vous conseillons de venir directement en boutique pour une prise de mesure."
          </div>
        </div>
      </div>
    </main>
  );
}
