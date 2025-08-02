'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { lang } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'hr', label: 'HR' },
    { code: 'de', label: 'DE' },
    { code: 'ru', label: 'RU' }
  ];

  return (
    <div id="language-switcher" className="flex items-center bg-white/95 backdrop-blur-sm rounded-lg border border-border px-2 py-1">
      {languages.map((language, index) => (
        <React.Fragment key={language.code}>
          <Link
            href={`/${language.code}/`}
            className={`px-2 py-1 text-sm font-medium rounded transition-all duration-300 ${
              lang === language.code
                ? 'bg-primary text-white'
                : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
            }`}
          >
            {language.label}
          </Link>
          {index < languages.length - 1 && (
            <span className="text-muted-foreground self-center px-1 text-xs">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}