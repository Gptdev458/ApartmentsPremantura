'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-primary text-white relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-luxury-navy-light"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(219,168,0,0.1)_0%,rgba(0,0,0,0.2)_100%)]"></div>
      
      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="luxury-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            {t.contact.title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-300">
              {t.contact.subtitle}
            </span>
          </h2>
          <p className="luxury-text text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-luxury bg-white/95 backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="luxury-subheading text-2xl text-primary mb-2">{t.contact.form.title}</h3>
              <p className="luxury-text text-muted-foreground">{t.contact.form.subtitle}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block luxury-subheading text-sm text-card-foreground mb-3">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-border rounded-xl focus:border-accent focus:ring-0 transition-all duration-300 luxury-text bg-white/50 backdrop-blur-sm group-hover:border-accent/50"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block luxury-subheading text-sm text-card-foreground mb-3">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-border rounded-xl focus:border-accent focus:ring-0 transition-all duration-300 luxury-text bg-white/50 backdrop-blur-sm group-hover:border-accent/50"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block luxury-subheading text-sm text-card-foreground mb-3">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-6 py-4 border-2 border-border rounded-xl focus:border-accent focus:ring-0 transition-all duration-300 luxury-text bg-white/50 backdrop-blur-sm group-hover:border-accent/50 resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-luxury-gold text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
{isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{t.contact.form.sending}</span>
                  </span>
                ) : t.contact.form.sendMessage}
              </button>

              {submitStatus === 'success' && (
                <div className="text-center p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="text-green-700 font-medium mb-1">{t.contact.form.successTitle}</div>
                  <div className="text-green-600 text-sm">{t.contact.form.successMessage}</div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-center p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="text-red-700 font-medium">{t.contact.form.errorTitle}</div>
                  <div className="text-red-600 text-sm">{t.contact.form.errorMessage}</div>
                </div>
              )}
            </form>
          </div>

          {/* Premium Contact Information */}
          <div className="space-y-8">
            {/* Contact Details Card */}
            <div className="card-luxury bg-white/95 backdrop-blur-sm">
              <h3 className="luxury-subheading text-2xl text-primary mb-8">{t.contact.info.title}</h3>
              
              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent/20 to-yellow-300/20 text-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="luxury-subheading text-lg text-card-foreground mb-2">{t.contact.info.phone}</h4>
                    <div className="space-y-1">
                      <div className="luxury-text text-muted-foreground">+385 91 234 5678</div>
                      <div className="luxury-text text-muted-foreground">+49 30 1234 5678</div>
                    </div>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-luxury-teal/20 to-cyan-500/20 text-luxury-teal rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="luxury-subheading text-lg text-card-foreground mb-2">{t.contact.info.email}</h4>
                    <div className="luxury-text text-muted-foreground">info.kuhne.service@gmail.com</div>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400/20 to-red-500/20 text-orange-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="luxury-subheading text-lg text-card-foreground mb-2">{t.contact.info.location}</h4>
                    <div className="luxury-text text-muted-foreground">Premantura, Croatia</div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}