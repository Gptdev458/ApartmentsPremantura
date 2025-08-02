import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "../globals.css";
import { isValidLanguage, getTranslations, Language } from '@/lib/translations';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  if (!isValidLanguage(lang)) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  const t = getTranslations(lang as Language);
  
  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      images: ['/images/outside/outside render 1.jpg'],
      locale: lang,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'hr' },
    { lang: 'de' },
    { lang: 'ru' },
  ];
}

export default async function LanguageLayout({ children, params }: Props) {
  const { lang } = await params;
  
  if (!isValidLanguage(lang)) {
    notFound();
  }

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <LanguageProvider lang={lang as Language}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}