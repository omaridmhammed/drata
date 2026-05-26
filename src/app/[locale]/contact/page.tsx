'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Phone, MapPin, Mail, Clock, Printer, Send, ShieldAlert, CheckCircle2, AlertCircle, Map } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactPage() {
  const activeLocale = useLocale();
  const t = useTranslations('Contact');
  const navT = useTranslations('Navigation');

  // Contact Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // UI Flow States
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSending(true);

    // Form Client Validation
    if (!name || !email || !subject || !message) {
      setErrorMsg(t('form.error'));
      setSending(false);
      return;
    }

    // Simulate Transmission
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="py-12 md:py-20 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-clinic-navy text-clinic-cream border border-clinic-gold rounded-3xl p-8 sm:p-16 relative overflow-hidden shadow-premium">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_120%_-20%,rgba(212,175,55,0.1),rgba(255,255,255,0))]" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <AnimatedSection direction="down">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-clinic-gold bg-clinic-gold/15 border border-clinic-gold/25 px-3 py-1 rounded-full">
                {navT('contact')}
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {t('title')}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed max-w-2xl">
                {t('subtitle')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Core split: Contact Info & Secure Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Coordinates & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <AnimatedSection direction="right" className="bg-white border border-clinic-navy/5 p-8 rounded-2xl shadow-premium space-y-6">
              <h2 className="font-serif text-lg md:text-xl font-bold text-clinic-navy border-b border-gray-100 pb-3">
                {t('info.title')}
              </h2>
              
              <ul className="space-y-6">
                {/* Address */}
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-clinic-gold/15 border border-clinic-gold text-clinic-gold-dark flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-clinic-navy">{t('info.address')}</div>
                    <div className="text-xs sm:text-sm text-clinic-slate mt-1 leading-relaxed">
                      {t('info.addressVal')}
                    </div>
                  </div>
                </li>

                {/* Telephone */}
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-clinic-gold/15 border border-clinic-gold text-clinic-gold-dark flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-clinic-navy">{t('info.phone')}</div>
                    <div className="text-xs sm:text-sm text-clinic-slate mt-1 leading-relaxed font-semibold">
                      {t('info.phoneVal')}
                    </div>
                  </div>
                </li>

                {/* Fax */}
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-clinic-gold/15 border border-clinic-gold text-clinic-gold-dark flex items-center justify-center shrink-0">
                    <Printer className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-clinic-navy">{t('info.fax')}</div>
                    <div className="text-xs sm:text-sm text-clinic-slate mt-1 leading-relaxed font-semibold">
                      {t('info.faxVal')}
                    </div>
                  </div>
                </li>

                {/* Email Address */}
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-clinic-gold/15 border border-clinic-gold text-clinic-gold-dark flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-clinic-navy">{t('info.email')}</div>
                    <a
                      href={`mailto:${t('info.emailVal')}`}
                      className="text-xs sm:text-sm text-clinic-slate mt-1 leading-relaxed hover:text-clinic-gold font-semibold transition-colors block"
                    >
                      {t('info.emailVal')}
                    </a>
                  </div>
                </li>
              </ul>
            </AnimatedSection>

            {/* Operating Hours card */}
            <AnimatedSection direction="right" delay={0.1} className="bg-clinic-navy text-clinic-cream border border-clinic-gold/20 p-8 rounded-2xl shadow-premium space-y-4">
              <h3 className="font-serif text-lg font-bold text-clinic-gold border-b border-clinic-gold/15 pb-3 flex items-center space-x-2">
                <Clock className="w-5 h-5 shrink-0" />
                <span>{t('info.hours')}</span>
              </h3>
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex justify-between">
                  <span className="font-medium">Monday - Thursday:</span>
                  <span className="font-semibold text-clinic-gold-light">8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Friday:</span>
                  <span className="font-semibold text-clinic-gold-light">8:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between border-t border-clinic-gold/10 pt-2.5">
                  <span className="font-medium">Saturday - Sunday:</span>
                  <span className="font-bold text-red-400">Closed</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>

          {/* Right Column: Secure Form validation */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="left" className="bg-white border border-clinic-navy/5 p-8 rounded-2xl shadow-premium space-y-6">
              <div className="space-y-2">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-clinic-navy">
                  {t('form.title')}
                </h2>
                <div className="flex items-center space-x-2 text-red-500 bg-red-50/50 border border-red-100 p-3 rounded-xl text-xs font-semibold leading-relaxed">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{t('form.subtitle')}</span>
                </div>
              </div>

              {success ? (
                /* Success Animated block */
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl space-y-3 animate-fadeIn text-center sm:text-left">
                  <div className="flex items-center space-x-2 justify-center sm:justify-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <span className="font-bold text-sm">{activeLocale === 'fr' ? 'Message envoyé !' : 'Secure Message Sent!'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed font-medium">
                    {t('form.success')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="flex items-center space-x-2 bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl text-xs sm:text-sm font-semibold">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-clinic-navy">{t('form.name')} *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sarah Tremblay"
                        className="w-full bg-clinic-cream border border-clinic-navy/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-clinic-navy font-medium focus:outline-none focus:border-clinic-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-clinic-navy">{t('form.email')} *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@example.com"
                        className="w-full bg-clinic-cream border border-clinic-navy/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-clinic-navy font-medium focus:outline-none focus:border-clinic-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-clinic-navy">{t('form.phone')}</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (613) 555-0100"
                        className="w-full bg-clinic-cream border border-clinic-navy/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-clinic-navy font-medium focus:outline-none focus:border-clinic-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-clinic-navy">{t('form.subject')} *</label>
                      <input
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="..."
                        className="w-full bg-clinic-cream border border-clinic-navy/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-clinic-navy font-medium focus:outline-none focus:border-clinic-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-clinic-navy">{t('form.message')} *</label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="..."
                      className="w-full bg-clinic-cream border border-clinic-navy/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-clinic-navy font-medium focus:outline-none focus:border-clinic-gold resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-gold px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4 shrink-0" />
                      <span>{sending ? t('form.sending') : t('form.submit')}</span>
                    </button>
                  </div>
                </form>
              )}
            </AnimatedSection>
          </div>

        </div>
      </section>

      {/* Styled custom Google Maps visual mockup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="bg-white border border-clinic-navy/5 p-6 rounded-3xl shadow-premium space-y-6 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-gray-100 pb-4 gap-4">
            <h3 className="font-serif text-lg font-bold text-clinic-navy flex items-center space-x-2">
              <Map className="w-5 h-5 text-clinic-gold" />
              <span>{t('map.title')}</span>
            </h3>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-5 py-2.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-center"
            >
              {t('map.directions')}
            </a>
          </div>

          {/* Interactive Styled map frame block */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-[#e5e3df] border border-clinic-gold/15">
            {/* Real Map embed with stylized query centered around Ottawa Laurier Street */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.1!2d-75.6305!3d45.3872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05c9b9fa9e5d%3A0x0!2s2+Lorry+Greenberg+Dr%2C+Ottawa%2C+ON+K1G+5H6!5e0!3m2!1sen!2sca!4v1716500000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(0.95)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

        </AnimatedSection>
      </section>

    </div>
  );
}
