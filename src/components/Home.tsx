import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Facebook, Instagram, Mail, MapPin, Phone, Scissors, Shirt, Sparkles, Star } from 'lucide-react';

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
            <p className="font-display text-xl sm:text-2xl font-medium text-navy/90 mb-4">
              On fait notre travail, et on le fait bien.
            </p>
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
      img: "https://i.ibb.co/twQZJM6N/1-logo-cintres-pressing.png",
      title: "Pressing",
      description: "Chemises, costumes, pantalons, vestes, manteaux, doudounes"
    },
    {
      img: "https://i.ibb.co/gMtbVSQ3/2-logo-machine-laverie.png",
      title: "Laverie",
      description: "Lavage et séchage professionnels, toutes charges"
    },
    {
      img: "https://i.ibb.co/B5rb2Zyj/3-logo-aiguille-couture.png",
      title: "Couture",
      description: "Retouches, réparations et confection sur mesure"
    }
  ];

  return (
    <section id="services" className="py-24 bg-off-white text-navy border-t border-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-navy/5 flex flex-col items-center text-center group hover:shadow-md transition-shadow"
            >
              <div className="w-32 h-32 mb-6">
                <img src={service.img} alt={service.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="opacity-70 leading-relaxed font-sans text-base">
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
  const reviews = [
    {
      author: "Nathalie ROUX",
      text: "Une laverie qui porte bien son nom ! Propreté irréprochable, machines modernes et de grande capacité (jusqu'à 19 kg, on vrai plus !), facilité d'organisation..."
    },
    {
      author: "Bouechir Stéphane",
      text: "Je recommande vivement cette laverie. Stéphane et son personnel sont remarquables : très professionnels, à l'écoute et de très bon conseil."
    },
    {
      author: "Corinne FISCHER",
      text: "Ouvert jusqu'à 22h, ce qui m'a permis de passer tranquillement tardivement. Utilisation du sèche-linge uniquement."
    },
    {
      author: "Jean-Marc V.",
      text: "Service pressing de qualité, vêtements rendus impeccables. Je reviendrai sans hésiter."
    },
    {
      author: "Sophie L.",
      text: "Accueil chaleureux, tarifs raisonnables, délais respectés. Tout ce qu'on demande à un bon pressing de quartier."
    },
    {
      author: "Pierre D.",
      text: "L'offre entreprise Pli Pro est exactement ce dont notre équipe avait besoin. Installation rapide, facturation claire."
    }
  ];

  return (
    <section className="py-24 bg-off-white text-navy border-t border-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 text-center">
          La confiance de nos clients
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 border border-navy/10 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4 text-teal">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-base mb-6 leading-relaxed font-sans opacity-80">
                  "{review.text}"
                </p>
              </div>
              <div className="font-bold text-sm tracking-wider uppercase">— {review.author}</div>
            </div>
          ))}
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
                  <address className="not-italic opacity-80 leading-relaxed">
                    Centre commercial La Clé Saint-Pierre<br/>
                    78990 Élancourt
                  </address>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Phone className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 font-display tracking-wide">Téléphone</div>
                    <a href="tel:+33760312424" className="text-teal font-medium hover:text-teal/80 transition-colors focus-ring">07 60 31 24 24</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Mail className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 font-display tracking-wide">Email</div>
                    <a href="mailto:pp.fialip@gmail.com" className="text-teal font-medium hover:text-teal/80 transition-colors focus-ring">pp.fialip@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Clock className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <div className="font-bold mb-1 font-display tracking-wide">Horaires</div>
                  <ul className="opacity-80 space-y-1 text-sm">
                    <li><span className="inline-block w-20 font-medium">Lundi</span> 09:00 – 18:00</li>
                    <li><span className="inline-block w-20 font-medium">Mardi</span> 09:00 – 19:00</li>
                    <li><span className="inline-block w-20 font-medium">Mercredi</span> 09:00 – 19:00</li>
                    <li><span className="inline-block w-20 font-medium">Jeudi</span> 09:00 – 19:00</li>
                    <li><span className="inline-block w-20 font-medium">Vendredi</span> 09:00 – 19:00</li>
                    <li><span className="inline-block w-20 font-medium">Samedi</span> 09:00 – 13:00, 14:00 – 18:00</li>
                    <li><span className="inline-block w-20 font-medium">Dimanche</span> Fermé</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-navy border border-teal text-white flex items-center justify-center hover:bg-teal transition-colors focus-ring" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-navy border border-teal text-white flex items-center justify-center hover:bg-teal transition-colors focus-ring" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
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
               <a href="tel:+33760312424" className="focus-ring bg-teal text-white px-6 py-3 font-medium font-sans hover:bg-teal/90 transition-colors relative z-10">
                  Nous appeler
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
