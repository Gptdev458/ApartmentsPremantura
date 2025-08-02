'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-800"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0">
          {/* Brand */}
          <div className="flex-1 max-w-sm">
            <h3 className="text-lg font-bold text-white mb-2">Premantura Apartments</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 lg:gap-8 lg:justify-center">
            {[
              { label: t.nav.home, section: 'hero' },
              { label: t.nav.features, section: 'highlights' },
              { label: t.nav.gallery, section: 'gallery' },
              { label: t.nav.location, section: 'location' },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.section)}
                className="text-gray-200 hover:text-white transition-colors duration-200 text-sm font-medium whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="flex-1 max-w-sm lg:text-right">
            <div className="space-y-2">
              <p className="text-gray-200 text-sm font-medium">+385 99 685 9649</p>
              <p className="text-gray-200 text-sm font-medium">+49 176 144 33333</p>
              <p className="text-gray-200 text-sm word-break">info.kuhne.service@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-center">
          <p className="text-gray-300 text-xs">
            © {currentYear} Premantura Apartments. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}