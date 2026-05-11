import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Building2, Check, Lock, Package, Smartphone } from 'lucide-react';

export default function EntreprisesPliPro() {
  return (
    <main id="main-content" className="flex-1 w-full relative z-0">
      <Hero />
      <HowItWorks />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-navy text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-[100px]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/10 border border-teal text-teal font-medium text-sm mb-8 tracking-wide">
            <Building2 className="w-4 h-4" />
            OFFRE ENTREPRISES
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 font-display">
            Votre pressing en entreprise,
          </h1>
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal mb-8 font-display">
            sans aucune contrainte
          </div>
          <p className="text-lg opacity-80 mb-10 leading-relaxed font-sans max-w-2xl text-white/80">
            La conciergerie linge des PME d'Élancourt — casier intelligent dans vos locaux, prise en charge sous 24 h, facturation mensuelle simplifiée.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-sans">
              <Check className="w-4 h-4 text-teal" />
              Zéro contrainte RH
            </div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-sans">
              <Package className="w-4 h-4 text-teal" />
              Installation offerte
            </div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-sans">
              <Check className="w-4 h-4 text-teal" />
              Facturation mensuelle
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="focus-ring inline-flex justify-center items-center gap-2 bg-transparent text-white px-8 py-4 rounded border border-white hover:bg-white hover:text-navy transition-colors tracking-wide font-medium">
              Demander une installation
            </a>
            <a href="#" className="focus-ring inline-flex justify-center items-center gap-2 bg-transparent text-white/70 px-8 py-4 rounded hover:text-white transition-colors tracking-wide font-medium">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: <Lock className="w-8 h-8 text-teal" />,
      title: "Je dépose",
      description: "Accédez au casier avec votre code personnel, déposez votre linge en toute sécurité."
    },
    {
      icon: <Package className="w-8 h-8 text-teal" />,
      title: "On traite",
      description: "Prise en charge sous 24 h. Pressing, lavage, couture : tout est traité avec soin."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-teal" />,
      title: "Je récupère",
      description: "Vous recevez un SMS dès que votre linge est prêt. Récupérez-le quand vous voulez."
    }
  ];

  const services = [
    "Pressing chemises",
    "Costumes & vestes",
    "Manteaux & doudounes",
    "Repassage",
    "Couture & retouches",
    "Vêtements de travail"
  ];

  return (
    <section className="py-24 bg-white text-navy border-t border-navy/10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 font-display">
            Comment ça marche ?
          </h2>
          <p className="text-lg opacity-80 font-sans">
            Trois étapes, zéro effort de votre côté.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-teal-light rounded-full flex items-center justify-center mb-6 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold font-sans shadow-md">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 font-display">{step.title}</h3>
              <p className="opacity-80 font-sans">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-off-white rounded-2xl p-8 sm:p-12 border border-navy/5">
          <h3 className="text-2xl font-bold mb-8 font-display text-center">Services couverts</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-navy/10 font-sans shadow-sm">
                <Check className="w-4 h-4 text-teal" />
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
