import { isValidLanguage } from '@/lib/translations';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HighlightsSection from '@/components/HighlightsSection';
import ConstructionGallery from '@/components/ConstructionGallery';
import RendersSection from '@/components/RendersSection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';


interface Props {
  params: Promise<{ lang: string }>;
}

export default async function LanguagePage({ params }: Props) {
  const { lang } = await params;
  
  if (!isValidLanguage(lang)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <HighlightsSection />
      <ConstructionGallery />
      <RendersSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}