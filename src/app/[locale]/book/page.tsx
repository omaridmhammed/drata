'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Calendar, CheckCircle2, ExternalLink, Clock, Shield, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

// ─────────────────────────────────────────────────────────────
// 🔗 REPLACE THIS URL WITH YOUR ACTUAL BOOKING PLATFORM LINK
//    (e.g. Jane App, Ocean, Luma Health, Calendly, etc.)
const BOOKING_URL = '#';
// ─────────────────────────────────────────────────────────────

export default function BookPage() {
  const t = useTranslations('Book');
  const navT = useTranslations('Navigation');

  const steps = ['step1', 'step2', 'step3', 'step4'];

  return (
    <div className="py-12 md:py-20 space-y-16">

      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-clinic-navy text-clinic-cream border border-clinic-gold rounded-3xl p-8 sm:p-16 relative overflow-hidden shadow-premium">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_120%_-20%,rgba(212,175,55,0.1),rgba(255,255,255,0))]" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <AnimatedSection direction="down">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-clinic-gold bg-clinic-gold/15 border border-clinic-gold/25 px-3 py-1 rounded-full">
                {navT('book')}
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

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Instructions Column */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection direction="right" className="bg-white border border-clinic-navy/5 p-8 rounded-2xl shadow-premium space-y-6">
              <h2 className="font-serif text-lg md:text-xl font-bold text-clinic-navy border-b border-gray-100 pb-3 flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-clinic-gold" />
                <span>{t('instructions.title')}</span>
              </h2>

              <ol className="space-y-6">
                {steps.map((step, idx) => (
                  <li key={step} className="flex space-x-3 text-xs sm:text-sm text-clinic-slate">
                    <div className="w-6 h-6 rounded-full bg-clinic-gold/15 border border-clinic-gold text-clinic-gold-dark flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="leading-relaxed">{t(`instructions.${step}`)}</span>
                  </li>
                ))}
              </ol>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: 'SSL Secured' },
                  { icon: Clock, label: 'Same-day slots' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-clinic-slate">
                    <Icon className="w-3.5 h-3.5 text-clinic-gold" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Booking Portal Column */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="left" className="bg-white border border-clinic-gold/25 rounded-3xl overflow-hidden shadow-premium">

              {/* Portal Header */}
              <div className="bg-clinic-navy-dark text-clinic-cream px-6 py-4 flex items-center justify-between border-b border-clinic-gold/15">
                <div className="flex items-center space-x-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-clinic-gold animate-pulse" />
                  <span className="font-serif text-xs sm:text-sm font-bold tracking-tight">
                    {t('portalTitle')}
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-widest font-extrabold text-clinic-gold/80 bg-clinic-gold/10 px-2.5 py-1 rounded-full border border-clinic-gold/20">
                  SSL Secured
                </span>
              </div>

              {/* Portal Body */}
              <div className="p-8 sm:p-12 space-y-8 text-center">
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-clinic-gold/10 border-2 border-clinic-gold/30 flex items-center justify-center mx-auto">
                  <Calendar className="w-9 h-9 text-clinic-gold" />
                </div>

                <div className="space-y-3 max-w-md mx-auto">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-clinic-navy">
                    {t('portalTitle')}
                  </h2>
                  <p className="text-sm text-clinic-slate leading-relaxed">
                    {t('portalSubtitle')}
                  </p>
                </div>

                {/* CTA Button — External Link */}
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 btn-gold px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg group"
                >
                  <span>{t('portalCta')}</span>
                  <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                {/* Note */}
                <p className="text-[11px] text-clinic-slate/70 flex items-center justify-center space-x-1.5">
                  <Shield className="w-3 h-3 text-clinic-gold/70 shrink-0" />
                  <span>{t('portalNote')}</span>
                </p>

                {/* Feature checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-100 text-left max-w-sm mx-auto">
                  {[
                    'Choose your service type',
                    'Real-time calendar availability',
                    'Instant email confirmation',
                    'Secure patient data handling',
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-2 text-xs text-clinic-slate">
                      <CheckCircle2 className="w-3.5 h-3.5 text-clinic-gold shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </AnimatedSection>

            {/* Alternative: contact link */}
            <AnimatedSection delay={0.2} className="mt-6 text-center">
              <p className="text-sm text-clinic-slate">
                Prefer to call?{' '}
                <a href="tel:+16135550182" className="text-clinic-gold font-bold hover:text-clinic-gold-dark transition-colors inline-flex items-center space-x-1">
                  <span>+1 (613) 555-0182</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </p>
            </AnimatedSection>
          </div>

        </div>
      </section>

    </div>
  );
}
