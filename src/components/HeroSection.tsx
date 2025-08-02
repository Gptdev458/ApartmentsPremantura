'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/outside/outside render 1.jpg"
          alt="Premantura Apartments Exterior"
          fill
          className="object-cover"
          priority
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-black/60"></div>
        {/* Subtle texture overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.3)_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="luxury-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 leading-tight">
            {t.hero.title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-300">
              {t.hero.subtitle}
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="luxury-text text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 mb-4 max-w-4xl mx-auto font-light">
            {t.hero.description}
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="font-medium">{t.hero.livingSpace}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="font-medium">{t.hero.privateGardens}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="font-medium">{t.hero.parking}</span>
            </div>
          </div>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-luxury-primary text-lg"
            >
{t.hero.contactUs}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="btn-luxury-secondary text-lg"
            >
              {t.hero.viewPlans}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}