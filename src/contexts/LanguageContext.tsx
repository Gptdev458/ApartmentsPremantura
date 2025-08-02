'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { Language, Translations, getTranslations } from '@/lib/translations';

interface LanguageContextType {
  lang: Language;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  lang: Language;
}

export function LanguageProvider({ children, lang }: LanguageProviderProps) {
  const t = getTranslations(lang);

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}