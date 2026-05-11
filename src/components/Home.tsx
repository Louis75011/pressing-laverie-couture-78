import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, MapPin, Phone, Scissors, Shirt, Sparkles, Star } from 'lucide-react';

export default function Home() {
  return (
    <main id="main-content" className="flex-1 w-full relative z-0">
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-pink-bg text-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border border-navy/20 font-medium text-sm mb-8 uppercase tracking-widest text-teal">
              Pressing & Retouches
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Prenez soin de vos vêtements avec <span className="text-teal italic font-light">La Clé Saint-Pierre</span>.
            </h1>
            <p className="text-lg opacity-80 mb-10 max-w-xl leading-relaxed font-sans">
              Le savoir-faire d'un artisan pressing à Élancourt. Nettoyage à sec, retouches sur mesure et repassage professionnel par Stéphane Fialip et son équipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="focus-ring inline-flex justify-center items-center gap-2 bg-navy text-white px-8 py-4 rounded-none font-medium hover:bg-navy-dark transition-colors tracking-wide">
                Découvrir nos services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="focus-ring inline-flex justify-center items-center gap-2 bg-transparent text-navy px-8 py-4 rounded-none font-medium border border-navy hover:bg-navy/5 transition-colors tracking-wide">
                Nous contacter
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
          >
            {/* Geometric representation of a pressing shop */}
            <div className="relative w-full max-w-md aspect-square bg-teal-light border border-teal/20 p-8 flex flex-col items-center justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 rounded-bl-full"></div>
               <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy/5 rounded-tr-full"></div>
               
               <div className="relative z-10 w-48 h-64 border-2 border-navy flex flex-col">
                  <div className="h-12 border-b-2 border-navy flex items-center justify-center">
                    <div className="w-16 h-2 bg-navy rounded-full"></div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-around py-4">
                     <div className="w-24 h-16 border border-navy rounded-t-3xl border-b-0 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 border border-navy rounded-full"></div>
                     </div>
                     <div className="w-32 h-16 border-t-2 border-dashed border-teal flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-teal" />
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Shirt className="w-8 h-8 text-teal" />,
      title: "Nettoyage à sec",
      description: "Un nettoyage professionnel et minutieux pour vos costumes, robes, manteaux et textiles délicats."
    },
    {
      icon: <Scissors className="w-8 h-8 text-teal" />,
      title: "Retouches",
      description: "Ourlets, fermetures éclair, ajustements sur mesure. Nous redonnons vie à vos vêtements préférés."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-teal" />,
      title: "Blanchisserie",
      description: "Traitement du linge de maison (couettes, draps, nappes) avec des produits respectueux des fibres."
    }
  ];

  return (
    <section id="services" className="py-24 bg-off-white text-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              L'artisanat du propre
            </h2>
            <p className="text-lg opacity-80 font-sans">
              Nous combinons techniques traditionnelles et équipements modernes pour vous garantir un résultat irréprochable.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 border border-teal/20 flex flex-col group hover:border-teal transition-colors"
            >
              <div className="mb-8 p-4 bg-teal-light inline-flex rounded-none group-hover:bg-teal group-hover:text-white transition-colors">
                {React.cloneElement(service.icon, { className: 'w-8 h-8 transition-colors' })}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="opacity-70 leading-relaxed font-sans text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const items = [
    { name: "Costume 2 pièces", price: "À partir de 15€" },
    { name: "Chemise (repassage seul)", price: "À partir de 4€" },
    { name: "Robe simple", price: "À partir de 12€" },
    { name: "Manteau", price: "À partir de 18€" },
    { name: "Ourlet pantalon", price: "À partir de 10€" },
    { name: "Changement fermeture", price: "Sur devis" },
  ];

  return (
    <section id="tarifs" className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Nos tarifs indicatifs
            </h2>
            <p className="text-lg text-teal-light mb-10 leading-relaxed max-w-md font-sans">
              La qualité artisanale à des prix justes. Pour toute demande spécifique (robe de mariée, cuir, tapis), n'hésitez pas à nous consulter pour un devis précis.
            </p>
            <div className="hidden lg:block w-32 h-1 bg-teal"></div>
          </div>
          
          <div className="bg-navy-dark border border-teal/20 p-8 sm:p-12 relative">
             <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-teal -mt-2 -mr-2"></div>
             <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-teal -mb-2 -ml-2"></div>
             
             <ul className="space-y-6">
                {items.map((item, index) => (
                   <li key={index} className="flex justify-between items-center border-b border-white/10 pb-4 font-sans last:border-0 last:pb-0">
                      <span className="text-lg">{item.name}</span>
                      <span className="font-semibold text-teal-light">{item.price}</span>
                   </li>
                ))}
             </ul>
             
             <div className="mt-10 pt-6 border-t border-white/10 text-sm font-sans opacity-70 text-center">
                * Les prix peuvent varier selon la complexité et la matière du vêtement.
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-off-white text-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 text-center">
          La confiance de nos clients
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-10 border border-teal/20">
            <div className="flex gap-1 mb-6 text-teal">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-lg mb-6 leading-relaxed font-sans italic">
              "Client depuis des années, Stéphane est très pro et sympathique. Les costumes reviennent toujours impeccables et les prix sont très corrects."
            </p>
            <div className="font-bold text-sm tracking-wider uppercase">— Jean M.</div>
          </div>
          
          <div className="bg-white p-10 border border-teal/20 relative top-0 md:top-8">
            <div className="flex gap-1 mb-6 text-teal">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-lg mb-6 leading-relaxed font-sans italic">
              "Le meilleur pressing d'Élancourt ! Les retouches sont parfaites, même sur des pièces compliquées. L'équipe est toujours accueillante."
            </p>
            <div className="font-bold text-sm tracking-wider uppercase">— Sylvie P.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-pink-bg text-navy border-t border-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white border border-teal/30 p-8 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-16 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-light/50 rounded-bl-[100px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Rendez-nous visite
            </h2>
            <p className="opacity-80 text-lg mb-10 leading-relaxed font-sans">
              Situé au cœur d'Élancourt, La Clé Saint-Pierre vous accueille toute la semaine. Stationnement facile à proximité.
            </p>
            
            <div className="space-y-8 font-sans">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <div className="font-bold mb-1 font-display tracking-wide">Adresse</div>
                  <address className="not-italic opacity-80">
                    Centre Commercial Près de C.C La Clef Saint Pierre<br/>
                    78990 Élancourt
                  </address>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <div className="font-bold mb-1 font-display tracking-wide">Téléphone</div>
                  <a href="tel:+3313066XXXX" className="opacity-80 hover:text-teal transition-colors focus-ring">01 30 66 XX XX</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Clock className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <div className="font-bold mb-1 font-display tracking-wide">Horaires (À titre indicatif)</div>
                  <ul className="opacity-80 space-y-1">
                    <li>Mardi - Vendredi : 9h00 - 19h00</li>
                    <li>Samedi : 9h00 - 18h00</li>
                    <li>Dimanche & Lundi : Fermé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 lg:pl-10 lg:border-l border-navy/10 flex flex-col justify-center">
            <div className="w-full aspect-square bg-off-white border border-navy/20 flex flex-col items-center justify-center p-8 text-center geometric-pattern relative">
               {/* Pattern overlay */}
               <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#1a2b6d 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
               <div className="w-16 h-16 bg-navy rounded-full mb-6 flex items-center justify-center relative z-10">
                  <Shirt className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-2xl font-bold mb-4 relative z-10">Une question ?</h3>
               <p className="font-sans opacity-80 mb-6 relative z-10">Passez directement en boutique pour nous montrer vos vêtements, nous vous conseillerons sur la meilleure méthode de nettoyage ou retouche.</p>
               <a href="tel:+33130660000" className="focus-ring bg-teal text-white px-6 py-3 font-medium font-sans hover:bg-teal/90 transition-colors relative z-10">
                  Nous appeler
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
