'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Award, GraduationCap, Heart, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default function AboutPage() {
  const activeLocale = useLocale();
  const t = useTranslations('About');

  const credentials = ['c1', 'c2', 'c3', 'c4'];

  return (
    <div className="py-12 md:py-20 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-clinic-navy text-clinic-cream border border-clinic-gold rounded-3xl p-8 sm:p-16 relative overflow-hidden shadow-premium">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_120%_-20%,rgba(212,175,55,0.1),rgba(255,255,255,0))]" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <AnimatedSection direction="down">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-clinic-gold bg-clinic-gold/15 border border-clinic-gold/25 px-3 py-1 rounded-full">
                {activeLocale === 'fr' ? 'À propos de nous' : 'About Us'}
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

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Portrait & Quick Stats */}
          <div className="lg:col-span-4 space-y-8">
            <AnimatedSection direction="right" className="relative h-[380px] w-full rounded-2xl overflow-hidden shadow-premium">
              <Image
                src="/dr-ata.png"
                alt="Dr. Ata — PrimeCare Family Medicine"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clinic-navy/50 to-transparent" />
            </AnimatedSection>

            {/* Quick credentials card */}
            <AnimatedSection direction="right" delay={0.1} className="bg-white border border-clinic-navy/5 p-6 rounded-2xl shadow-premium space-y-4">
              <div className="flex items-center space-x-2 text-clinic-navy font-serif font-bold text-sm uppercase tracking-wider border-b border-gray-100 pb-3">
                <Award className="w-5 h-5 text-clinic-gold" />
                <span>Quick Facts</span>
              </div>
              <ul className="space-y-3 text-xs text-clinic-slate">
                <li className="flex items-start justify-between">
                  <span className="font-semibold text-clinic-navy">MD:</span>
                  <span className="text-right">McGill University</span>
                </li>
                <li className="flex items-start justify-between">
                  <span className="font-semibold text-clinic-navy">Residency:</span>
                  <span className="text-right">University of Ottawa</span>
                </li>
                <li className="flex items-start justify-between">
                  <span className="font-semibold text-clinic-navy">Credentials:</span>
                  <span className="text-right">CCFP, FCFP</span>
                </li>
                <li className="flex items-start justify-between">
                  <span className="font-semibold text-clinic-navy">Languages:</span>
                  <span className="text-right font-bold text-clinic-gold-dark">English</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>

          {/* Right Column: In-depth Biography details */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Intro Philosophy quote block */}
            <AnimatedSection direction="left" className="border-l-4 border-clinic-gold pl-6 py-2 italic font-serif text-lg md:text-xl text-clinic-navy/90 leading-relaxed bg-clinic-cream-dark/20 pr-4 rounded-r-xl">
              &ldquo;{t('intro')}&rdquo;
            </AnimatedSection>

            {/* Academic Biography */}
            <div className="space-y-4">
              <AnimatedSection direction="left" delay={0.1} className="flex items-center space-x-2 text-clinic-gold-dark">
                <GraduationCap className="w-5 h-5 shrink-0" />
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-clinic-navy">
                  {t('academic.title')}
                </h2>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.2} className="space-y-4 text-clinic-slate text-sm sm:text-base leading-relaxed">
                <p>{t('academic.p1')}</p>
                <p>{t('academic.p2')}</p>
              </AnimatedSection>
            </div>

            {/* Care Philosophy */}
            <div className="space-y-4">
              <AnimatedSection direction="left" delay={0.1} className="flex items-center space-x-2 text-clinic-gold-dark">
                <Heart className="w-5 h-5 shrink-0" />
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-clinic-navy">
                  {t('philosophy.title')}
                </h2>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.2} className="space-y-4 text-clinic-slate text-sm sm:text-base leading-relaxed">
                <p>{t('philosophy.p1')}</p>
                <p>{t('philosophy.p2')}</p>
              </AnimatedSection>
            </div>

            {/* Professional Memberships Checklist */}
            <div className="bg-white border border-clinic-gold/15 p-6 sm:p-8 rounded-2xl shadow-premium space-y-6">
              <AnimatedSection direction="left" className="font-serif text-lg font-bold text-clinic-navy border-b border-gray-100 pb-3">
                {t('credentials.title')}
              </AnimatedSection>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((cKey, idx) => (
                  <AnimatedSection
                    key={cKey}
                    delay={idx * 0.1}
                    className="flex items-start space-x-2 text-xs sm:text-sm font-semibold text-clinic-navy"
                  >
                    <CheckCircle2 className="w-4 h-4 text-clinic-gold shrink-0 mt-0.5" />
                    <span>{t(`credentials.${cKey}`)}</span>
                  </AnimatedSection>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
