'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '../../navigation';

// 🔗 Replace with your actual booking platform URL
const BOOKING_URL = '#';
import { Heart, Activity, Baby, Sparkles, Syringe, ShieldCheck, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import FAQAccordion from '@/components/FAQAccordion';
import Image from 'next/image';

export default function HomePage() {
  const activeLocale = useLocale();
  const t = useTranslations('Home');
  const navT = useTranslations('Navigation');

  // Map service translation keys to icons
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

  const stats = [
    { key: 'years', valKey: 'yearsVal' },
    { key: 'patients', valKey: 'patientsVal' },
    { key: 'languages', valKey: 'languagesVal' },
    { key: 'satisfaction', valKey: 'satisfactionVal' },
  ];

  const testimonials = ['t1', 't2', 't3'];
  const faqs = [
    { question: t('FAQ.q1'), answer: t('FAQ.a1') },
    { question: t('FAQ.q2'), answer: t('FAQ.a2') },
    { question: t('FAQ.q3'), answer: t('FAQ.a3') },
    { question: t('FAQ.q4'), answer: t('FAQ.a4') },
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#070F1E] text-clinic-cream overflow-hidden">
        {/* Unsplash warm family medicine photo overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
            alt="Family Doctor Consultation"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-clinic-navy-dark via-clinic-navy to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl space-y-6">
            <AnimatedSection direction="down" delay={0.1}>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-clinic-gold/15 text-clinic-gold border border-clinic-gold/30">
                {t('Hero.badge')}
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-clinic-cream">
                {t('Hero.title')}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                {t('Hero.subtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 rounded-full text-center text-sm font-bold uppercase tracking-wider shadow-lg">
                {t('Hero.ctaBook')}
              </a>
              <Link href="/services" className="bg-clinic-navy-light/60 hover:bg-clinic-navy-light text-clinic-cream border border-clinic-gold/20 hover:border-clinic-gold/40 px-8 py-4 rounded-full text-center text-sm font-bold uppercase tracking-wider transition-all duration-300">
                {t('Hero.ctaServices')}
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="flex items-center space-x-2 pt-6 border-t border-clinic-cream/10 mt-6 max-w-max">
              <div className="flex text-clinic-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                {t('Hero.rating')}
              </span>
            </AnimatedSection>
          </div>
        </div>

        {/* Decorative gold vector line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-clinic-gold/40 to-transparent" />
      </section>

      {/* 2. Animated Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="bg-clinic-navy border border-clinic-gold/20 p-8 sm:p-12 rounded-3xl shadow-premium relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.08),rgba(255,255,255,0))]" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 relative z-10 text-center">
            {stats.map((stat) => (
              <div key={stat.key} className="space-y-2 border-r last:border-0 border-clinic-gold/15 last:border-r-0">
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text">
                  {t(`Stats.${stat.valKey}`)}
                </div>
                <div className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-gray-400">
                  {t(`Stats.${stat.key}`)}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* 3. Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <AnimatedSection direction="down">
            <span className="text-xs font-extrabold uppercase tracking-wider text-clinic-gold bg-clinic-gold/10 px-3 py-1 rounded-full">
              {navT('services')}
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-clinic-navy">
              {t('Services.title')}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-sm sm:text-base text-clinic-slate leading-relaxed">
              {t('Services.subtitle')}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <AnimatedSection
                key={service.key}
                delay={idx * 0.1}
                className="bg-white border border-clinic-navy/5 hover:border-clinic-gold/30 p-8 rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${service.color} transition-transform duration-500 group-hover:scale-110`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-clinic-navy group-hover:text-clinic-gold transition-colors duration-200">
                    {t(`Services.${service.key}.title`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-clinic-slate leading-relaxed">
                    {t(`Services.${service.key}.desc`)}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-100 flex justify-end">
                  <Link
                    href="/services"
                    className="flex items-center text-xs font-bold uppercase tracking-wider text-clinic-gold group-hover:text-clinic-gold-dark transition-colors duration-200"
                  >
                    <span>{activeLocale === 'fr' ? 'Détails' : 'Learn More'}</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <AnimatedSection delay={0.3}>
            <Link href="/services" className="bg-clinic-navy text-clinic-cream hover:bg-clinic-navy-light px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md">
              {t('Services.viewAll')}
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Doctor Bio Teaser Section */}
      <section className="bg-clinic-cream-dark/40 border-y border-clinic-gold/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Portrait Column */}
            <div className="lg:col-span-5">
              <AnimatedSection direction="right" className="relative h-[480px] w-full rounded-2xl overflow-hidden shadow-premium group">
                <Image
                  src="/dr-ata.png"
                  alt="Dr. Ata — PrimeCare Family Medicine"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-clinic-cream space-y-1">
                  <h4 className="font-serif text-xl font-bold">Dr. Ata</h4>
                  <p className="text-xs text-clinic-gold-light uppercase tracking-wider font-semibold">MD, CCFP</p>
                </div>
              </AnimatedSection>
            </div>

            {/* Text details column */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection direction="left" delay={0.1}>
                <span className="text-xs font-extrabold uppercase tracking-wider text-clinic-gold bg-clinic-gold/10 px-3 py-1 rounded-full">
                  {t('Bio.badge')}
                </span>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.2}>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-clinic-navy">
                  {t('Bio.title')}
                </h2>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.3} className="space-y-4 text-clinic-slate text-sm sm:text-base leading-relaxed">
                <p>{t('Bio.p1')}</p>
                <p>{t('Bio.p2')}</p>
              </AnimatedSection>

              {/* Specialties checklist */}
              <AnimatedSection direction="left" delay={0.4} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {['s1', 's2', 's3', 's4'].map((sKey) => (
                  <div key={sKey} className="flex items-center space-x-2 text-xs font-semibold text-clinic-navy">
                    <CheckCircle2 className="w-4 h-4 text-clinic-gold shrink-0" />
                    <span>{t(`Bio.${sKey}`)}</span>
                  </div>
                ))}
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.5} className="pt-6 border-t border-clinic-gold/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <div className="font-serif text-sm font-extrabold text-clinic-navy">{t('Bio.signature')}</div>
                  <div className="text-[10px] text-clinic-gold-dark uppercase tracking-wider font-bold">
                    Lead Family Physician
                  </div>
                </div>
                <Link href="/about" className="btn-gold px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider">
                  {t('Bio.cta')}
                </Link>
              </AnimatedSection>

            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <AnimatedSection direction="down">
            <span className="text-xs font-extrabold uppercase tracking-wider text-clinic-gold bg-clinic-gold/10 px-3 py-1 rounded-full">
              {activeLocale === 'fr' ? 'Témoignages' : 'Testimonials'}
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-clinic-navy">
              {t('Testimonials.title')}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-sm sm:text-base text-clinic-slate leading-relaxed">
              {t('Testimonials.subtitle')}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((itemKey, idx) => (
            <AnimatedSection
              key={itemKey}
              delay={idx * 0.15}
              className="bg-white border border-clinic-navy/5 hover:border-clinic-gold/20 p-8 rounded-2xl shadow-premium relative flex flex-col justify-between"
            >
              {/* Premium gold stars */}
              <div className="flex text-clinic-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xs sm:text-sm text-clinic-slate leading-relaxed italic mb-8 relative">
                &ldquo;{t(`Testimonials.${itemKey}.quote`)}&rdquo;
              </blockquote>

              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-clinic-navy/5 border border-clinic-gold flex items-center justify-center font-serif text-xs font-bold text-clinic-navy">
                  {t(`Testimonials.${itemKey}.author`)[0]}
                </div>
                <div>
                  <div className="text-xs font-bold text-clinic-navy">{t(`Testimonials.${itemKey}.author`)}</div>
                  <div className="text-[10px] text-clinic-gold-dark font-semibold uppercase tracking-wider">
                    {t(`Testimonials.${itemKey}.role`)}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <AnimatedSection direction="down">
            <span className="text-xs font-extrabold uppercase tracking-wider text-clinic-gold bg-clinic-gold/10 px-3 py-1 rounded-full">
              FAQ
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-clinic-navy">
              {t('FAQ.title')}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-sm sm:text-base text-clinic-slate leading-relaxed">
              {t('FAQ.subtitle')}
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <FAQAccordion items={faqs} />
        </AnimatedSection>
      </section>

      {/* 7. Pre-footer CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="bg-clinic-navy border border-clinic-gold p-8 sm:p-16 rounded-3xl text-center text-clinic-cream relative overflow-hidden shadow-premium">
          <div className="absolute inset-0 bg-gradient-to-br from-clinic-navy-dark via-clinic-navy to-clinic-navy-light" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_120%,rgba(212,175,55,0.1),rgba(255,255,255,0))]" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-clinic-gold bg-clinic-gold/15 border border-clinic-gold/25 px-3 py-1 rounded-full">
              {t('Hero.badge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {t('CTA.title')}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t('CTA.subtitle')}
            </p>
            <div className="pt-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-gold px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                {t('CTA.cta')}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
