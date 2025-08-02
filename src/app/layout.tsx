import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Premantura Apartments - Modern Living in Croatia',
  description: 'Exclusive apartments in the center of Premantura. 80m² living space, private gardens, secured parking. Perfect for families or investment.',
  keywords: 'apartments, Premantura, Croatia, real estate, investment, vacation home',
  openGraph: {
    title: 'Premantura Apartments - Modern Living in Croatia',
    description: 'Exclusive apartments in the center of Premantura. 80m² living space, private gardens, secured parking.',
    images: ['/images/outside/outside render 1.jpg'],
    locale: 'en',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
