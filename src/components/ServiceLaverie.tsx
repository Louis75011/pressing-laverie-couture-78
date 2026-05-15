import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowLeft, Droplets, Zap, ShieldCheck } from 'lucide-react';

export default function ServiceLaverie() {
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
              Puissance & Propreté
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-display">
              Laverie <br /> <span className="text-teal font-light italic">Haute Performance</span>
            </h1>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              Pour votre linge de maison volumineux ou vos lessives hebdomadaires, disposez de machines modernes allant jusqu'à 19 kg. Un séchage rapide et respectueux de vos textiles.
            </p>
            <div className="space-y-4">
               {[
                 { icon: <Droplets className="w-5 h-5" />, title: "Lavage Intensif", desc: "Élimine taches et bactéries en douceur." },
                 { icon: <Zap className="w-5 h-5" />, title: "Séchage Rapide", desc: "Des vêtements prêts en un temps record." },
                 { icon: <ShieldCheck className="w-5 h-5" />, title: "Hygiène Garantie", desc: "Désinfection systématique des cuves." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-off-white border border-navy/5">
                   <div className="text-teal mt-1">{item.icon}</div>
                   <div>
                     <h4 className="font-bold text-base mb-1">{item.title}</h4>
                     <p className="text-sm opacity-70">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] bg-teal-light relative overflow-hidden"
          >
             <img 
               src="https://i.ibb.co/608Sqvf3/portfolio-02.jpg" 
               alt="Laverie automatique Élancourt" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               referrerPolicy="no-referrer"
             />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-pink-bg p-12 border border-navy/5">
            <h2 className="text-2xl font-bold mb-6 font-display">Linge de maison</h2>
            <p className="mb-8 opacity-80">Gagnez du temps et de l'énergie en nous confiant vos pièces les plus encombrantes :</p>
            <ul className="grid grid-cols-2 gap-4">
              <li className="flex items-center gap-2 text-sm font-medium"><Check className="w-4 h-4 text-teal" /> Couettes & Édredons</li>
              <li className="flex items-center gap-2 text-sm font-medium"><Check className="w-4 h-4 text-teal" /> Housses de canapé</li>
              <li className="flex items-center gap-2 text-sm font-medium"><Check className="w-4 h-4 text-teal" /> Draps & Nappes</li>
              <li className="flex items-center gap-2 text-sm font-medium"><Check className="w-4 h-4 text-teal" /> Rideaux & Tentures</li>
            </ul>
          </div>
          <div className="bg-navy p-12 text-white relative">
             <div className="relative z-10">
               <h2 className="text-2xl font-bold mb-6 font-display text-teal">Libre-service assisté</h2>
               <p className="opacity-80 mb-6 leading-relaxed">
                 Stéphane et son équipe sont présents pour vous conseiller sur le programme idéal ou pour prendre en charge votre linge si vous ne pouvez pas attendre sur place.
               </p>
               <div className="p-4 border border-teal/30 bg-white/5 inline-flex flex-col gap-1">
                 <span className="text-teal text-xs font-bold uppercase tracking-widest">Ouverture jusqu'à 22h</span>
                 <span className="text-sm">Consultez nos horaires pour le service assisté.</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
