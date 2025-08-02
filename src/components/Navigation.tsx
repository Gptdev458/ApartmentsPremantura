'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border luxury-shadow">
      <div className="container-luxury">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 ml-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-300 tracking-tight"
            >
              Premantura Apartments
            </button>
          </div>

          {/* Sophisticated Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="luxury-nav-link px-4 py-2 text-sm font-medium text-card-foreground hover:text-primary transition-all duration-300 relative group"
              >
{t.nav.home}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('highlights')}
                className="luxury-nav-link px-4 py-2 text-sm font-medium text-card-foreground hover:text-primary transition-all duration-300 relative group"
              >
{t.nav.features}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="luxury-nav-link px-4 py-2 text-sm font-medium text-card-foreground hover:text-primary transition-all duration-300 relative group"
              >
{t.nav.gallery}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="luxury-nav-link px-4 py-2 text-sm font-medium text-card-foreground hover:text-primary transition-all duration-300 relative group"
              >
{t.nav.location}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <div className="ml-6 pl-6 border-l border-border flex items-center space-x-4">
                <LanguageSwitcher />
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-luxury-primary text-sm px-6 py-2.5"
                >
                  {t.nav.contact}
                </button>
              </div>
            </div>
          </div>

          {/* Elegant Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-card-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300 group"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-6 pt-4 pb-6 space-y-2 bg-white/98 backdrop-blur-md border-t border-border luxury-shadow">
            <button
              onClick={() => scrollToSection('hero')}
              className="luxury-nav-link block px-4 py-3 text-base font-medium w-full text-left rounded-xl hover:bg-muted/50 transition-all duration-300"
            >
{t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('highlights')}
              className="luxury-nav-link block px-4 py-3 text-base font-medium w-full text-left rounded-xl hover:bg-muted/50 transition-all duration-300"
            >
              {t.nav.features}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="luxury-nav-link block px-4 py-3 text-base font-medium w-full text-left rounded-xl hover:bg-muted/50 transition-all duration-300"
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="luxury-nav-link block px-4 py-3 text-base font-medium w-full text-left rounded-xl hover:bg-muted/50 transition-all duration-300"
            >
              {t.nav.location}
            </button>
            <div className="pt-4 mt-4 border-t border-border space-y-4">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-luxury-primary w-full text-base py-3"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}