'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LocationSection() {
  const { t } = useLanguage();
  const locationFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: t.locationSection.features.address.title,
      description: t.locationSection.features.address.description
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5m-9-6h.008v.008H12V12z" />
        </svg>
      ),
      title: t.locationSection.features.beaches.title,
      description: t.locationSection.features.beaches.description
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 003.75-2.836M3.75 9.349a3.001 3.001 0 004.356-1.177M3.75 9.349v-.349a2.5 2.5 0 015 0v.349m0 0a3.001 3.001 0 004.356 1.177M19.25 9.349a3.001 3.001 0 003.75 2.836m0 0H19.25m0 0V21M19.25 9.349v-.349a2.5 2.5 0 00-5 0v.349" />
        </svg>
      ),
      title: t.locationSection.features.heritage.title,
      description: t.locationSection.features.heritage.description
    }
  ];



  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="lg:pr-8">
            {/* Section Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-luxury-teal/10 backdrop-blur-sm border border-luxury-teal/20 mb-6">
              <span className="text-luxury-teal font-semibold tracking-wide uppercase text-sm">{t.locationSection.badge}</span>
            </div>

            {/* Headline */}
            <h2 className="luxury-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              {t.locationSection.title}
              <span className="block text-luxury-teal">
                {t.locationSection.subtitle}
              </span>
            </h2>
            
            {/* Elegant Description */}
            <p className="luxury-text text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
              {t.locationSection.description}
            </p>
            
            {/* Premium Features List */}
            <div className="space-y-6">
              {locationFeatures.map((feature, index) => (
                <div key={index} className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-luxury-teal/20 to-cyan-500/20 text-luxury-teal rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-luxury-teal group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="luxury-subheading text-lg text-card-foreground mb-2 group-hover:text-luxury-teal transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="luxury-text text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="relative lg:pl-8">
            {/* Map Container */}
            <div className="relative luxury-shadow rounded-2xl overflow-hidden h-96 group hover:shadow-xl transition-all duration-500">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22831.02623347!2d13.9298!3d44.7962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd5c7b8b6b5a9%3A0x4030588329db1e0!2sPremantura%2C%20Croatia!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Premantura Location Map"
                className="rounded-2xl"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}