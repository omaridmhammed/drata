'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Heart, Activity, Baby, Sparkles, Syringe, ShieldCheck, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

// 🔗 Replace with your actual booking platform URL
const BOOKING_URL = '#';

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');
  const navT = useTranslations('Navigation');

  const services = [
    {
      key: 'annual',
      icon: Heart,
      color: 'bg-red-50 text-red-600 border-red-100',
    },
    {
      key: 'chronic',
      icon: Activity,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      key: 'pediatric',
      icon: Baby,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      key: 'mental',
      icon: Sparkles,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      key: 'vaccinations',
      icon: Syringe,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      key: 'preventive',
      icon: ShieldCheck,
      color: 'bg-sky-50 text-sky-600 border-sky-100',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-clinic-navy text-clinic-cream border border-clinic-gold rounded-3xl p-8 sm:p-16 relative overflow-hidden shadow-premium">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_120%_-20%,rgba(212,175,55,0.1),rgba(255,255,255,0))]" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <AnimatedSection direction="down">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-clinic-gold bg-clinic-gold/15 border border-clinic-gold/25 px-3 py-1 rounded-full">
                {navT('services')}
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

      {/* Structured Services Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isEven = idx % 2 === 0;

            return (
              <AnimatedSection
                key={service.key}
                delay={0.1}
                className="bg-white border border-clinic-navy/5 p-8 sm:p-12 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual Accent Element */}
                <div className={`absolute top-0 bottom-0 w-[5px] bg-gradient-to-b from-clinic-gold to-clinic-gold-dark ${isEven ? 'left-0' : 'right-0'}`} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column: Icon & Headings */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${service.color} shadow-sm`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-clinic-navy">
                        {t(`${service.key}.title`)}
                      </h2>
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-clinic-gold-dark">
                        Family Practice Specialty
                      </span>
                    </div>
                  </div>

                  {/* Middle Column: Detailed medical description texts */}
                  <div className="lg:col-span-5 space-y-3 text-clinic-slate text-xs sm:text-sm leading-relaxed">
                    <p className="font-semibold text-clinic-navy text-sm">{t(`${service.key}.desc1`)}</p>
                    <p>{t(`${service.key}.desc2`)}</p>
                  </div>

                  {/* Right Column: CTA button container */}
                  <div className="lg:col-span-3 flex lg:justify-end items-center h-full pt-4 lg:pt-0">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 w-full lg:w-auto text-center justify-center shadow-md"
                    >
                      <Calendar className="w-4 h-4 shrink-0" />
                      <span>{t('cta')}</span>
                    </a>
                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

    </div>
  );
}
