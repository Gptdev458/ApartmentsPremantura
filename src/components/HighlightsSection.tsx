'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function HighlightsSection() {
  const { t } = useLanguage();
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7zm0 0V5a2 2 0 012-2h14a2 2 0 012 2v2M3 7h18" />
        </svg>
      ),
      title: t.highlights.features.spaces.title,
      description: t.highlights.features.spaces.description,
      accent: "luxury-teal"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M4.5 12H2.25m4.227-4.773L5.386 6.136" />
        </svg>
      ),
      title: t.highlights.features.gardens.title,
      description: t.highlights.features.gardens.description,
      accent: "accent"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5zM12 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5zM15.75 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5zM19.5 10.5h-15A1.5 1.5 0 003 12v5.25A1.5 1.5 0 004.5 18.75H6a1.5 1.5 0 001.5-1.5v-1.5" />
        </svg>
      ),
      title: t.highlights.features.parking.title,
      description: t.highlights.features.parking.description,
      accent: "luxury-navy-light"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: t.highlights.features.location.title,
      description: t.highlights.features.location.description,
      accent: "luxury-bronze"
    },
  ];

  return (
    <section id="highlights" className="section-padding bg-luxury-section">
      <div className="container-luxury">
        {/* Elegant Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">{t.highlights.badge}</span>
          </div>
          <h2 className="luxury-heading text-4xl sm:text-5xl lg:text-6xl text-primary mb-6">
            {t.highlights.title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
              {t.highlights.subtitle}
            </span>
          </h2>
          <p className="luxury-text text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.highlights.description}
          </p>
        </div>

        {/* Luxury Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Luxury Card */}
              <div className="card-luxury text-center h-full relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary to-accent"></div>
                
                {/* Premium Icon Container */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    feature.accent === 'luxury-teal' ? 'bg-gradient-to-br from-cyan-500/20 to-teal-600/20 text-cyan-600 group-hover:from-cyan-500 group-hover:to-teal-600 group-hover:text-white' :
                    feature.accent === 'accent' ? 'bg-gradient-to-br from-yellow-400/20 to-orange-500/20 text-yellow-600 group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:text-white' :
                    feature.accent === 'luxury-navy-light' ? 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-600 group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white' :
                    'bg-gradient-to-br from-orange-400/20 to-red-500/20 text-orange-600 group-hover:from-orange-400 group-hover:to-red-500 group-hover:text-white'
                  }`}>
                    {feature.icon}
                  </div>
                  
                  {/* Luxury Typography */}
                  <h3 className="luxury-subheading text-xl lg:text-2xl text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="luxury-text text-muted-foreground leading-relaxed group-hover:text-card-foreground transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle Hover Border Effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <p className="luxury-text text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.highlights.cta.description}
          </p>
          <button className="btn-luxury-gold">
            {t.highlights.cta.button}
          </button>
        </div>
      </div>
    </section>
  );
}