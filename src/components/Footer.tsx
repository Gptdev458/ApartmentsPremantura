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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">Premantura Apartments</h3>
            <p className="text-gray-200 text-sm max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-8">
            {[
              { label: t.nav.home, section: 'hero' },
              { label: t.nav.features, section: 'highlights' },
              { label: t.nav.gallery, section: 'gallery' },
              { label: t.nav.location, section: 'location' },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.section)}
                className="text-gray-200 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="flex-1 text-right">
            <div className="space-y-1">
              <p className="text-gray-200 text-sm font-medium">+385 99 685 9649</p>
              <p className="text-gray-200 text-sm font-medium">+49 176 144 33333</p>
              <p className="text-gray-200 text-sm">info.kuhne.service@gmail.com</p>
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