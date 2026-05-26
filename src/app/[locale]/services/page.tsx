'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import {
  Clock, FileText, Globe, RefreshCw, ShieldCheck, DollarSign, Star,
  CheckCircle2, Calendar, AlertTriangle, Info
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

// 🔗 Replace with your actual booking platform URL
const BOOKING_URL = '#';

const services = [
  {
    key: 'urgent',
    icon: Clock,
    color: 'bg-red-50 text-red-600 border-red-100',
    accentColor: 'from-red-500 to-red-600',
    items: [],
    hasNote: false,
    hasBilling: false,
  },
  {
    key: 'thirdparty',
    icon: FileText,
    color: 'bg-amber-50 text-amber-600 border-amber-100',
    accentColor: 'from-amber-500 to-amber-600',
    items: ['i1', 'i2', 'i3', 'i4', 'i5'],
    hasNote: true,
    hasBilling: false,
  },
  {
    key: 'outofprovince',
    icon: Globe,
    color: 'bg-sky-50 text-sky-600 border-sky-100',
    accentColor: 'from-sky-500 to-sky-600',
    items: [],
    hasNote: false,
    hasBilling: true,
  },
  {
    key: 'followup',
    icon: RefreshCw,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    accentColor: 'from-emerald-500 to-emerald-600',
    items: ['i1', 'i2', 'i3', 'i4'],
    hasNote: false,
    hasBilling: false,
  },
  {
    key: 'preventive',
    icon: ShieldCheck,
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    accentColor: 'from-blue-500 to-blue-600',
    items: ['i1', 'i2', 'i3', 'i4'],
    hasNote: false,
    hasBilling: false,
  },
  {
    key: 'uninsured',
    icon: DollarSign,
    color: 'bg-purple-50 text-purple-600 border-purple-100',
    accentColor: 'from-purple-500 to-purple-600',
    items: ['i1', 'i2', 'i3', 'i4'],
    hasNote: true,
    hasBilling: false,
  },
];

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');
  const navT = useTranslations('Navigation');

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
                {t('welcome')}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isEven = idx % 2 === 0;

            return (
              <AnimatedSection
                key={service.key}
                delay={0.1}
                className="bg-white border border-clinic-navy/5 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all duration-300 relative overflow-hidden"
              >
                {/* Gold accent bar */}
                <div className={`absolute top-0 bottom-0 w-[5px] bg-gradient-to-b from-clinic-gold to-clinic-gold-dark ${isEven ? 'left-0' : 'right-0'}`} />

                <div className="p-8 sm:p-10 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left: Icon + Title + Badge */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${service.color} shadow-sm`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div className="space-y-1">
                        <h2 className="font-serif text-xl sm:text-2xl font-bold text-clinic-navy">
                          {t(`${service.key}.title`)}
                        </h2>
                        <span className="inline-block text-[10px] uppercase tracking-wider font-extrabold text-clinic-gold-dark bg-clinic-gold/10 px-2 py-0.5 rounded-full">
                          {t(`${service.key}.badge`)}
                        </span>
                      </div>
                    </div>

                    {/* Right: Description + Checklist + Notes */}
                    <div className="lg:col-span-8 space-y-5">
                      <p className="text-sm sm:text-base text-clinic-slate leading-relaxed">
                        {t(`${service.key}.desc`)}
                      </p>

                      {/* Checklist items */}
                      {service.items.length > 0 && (
                        <ul className="space-y-2.5">
                          {service.items.map((itemKey) => (
                            <li key={itemKey} className="flex items-start space-x-3">
                              <CheckCircle2 className="w-4 h-4 text-clinic-gold shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-clinic-slate leading-relaxed">
                                {t(`${service.key}.${itemKey}`)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Billing info (out-of-province) */}
                      {service.hasBilling && (
                        <div className="flex items-start space-x-3 bg-sky-50 border border-sky-100 p-4 rounded-xl">
                          <Info className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-sky-700 font-semibold leading-relaxed">
                            {t(`${service.key}.billing`)}
                          </p>
                        </div>
                      )}

                      {/* Fee note */}
                      {service.hasNote && (
                        <div className="flex items-start space-x-3 bg-amber-50 border border-amber-100 p-4 rounded-xl">
                          <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-amber-700 font-semibold leading-relaxed italic">
                            {t(`${service.key}.note`)}
                          </p>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="pt-2">
                        <a
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-gold px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center space-x-2 shadow-md"
                        >
                          <Calendar className="w-4 h-4 shrink-0" />
                          <span>{t('cta')}</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Military Family Registration — Special Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0.1}>
          <div className="bg-clinic-navy border-2 border-clinic-gold rounded-3xl p-8 sm:p-12 shadow-premium relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_50%,rgba(212,175,55,0.07),rgba(255,255,255,0))]" />
            <div className="relative z-10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-clinic-gold/20 border border-clinic-gold flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6 text-clinic-gold" fill="currentColor" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-clinic-gold bg-clinic-gold/15 border border-clinic-gold/30 px-3 py-1 rounded-full">
                    {t('military.badge')}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-clinic-cream mt-3">
                    {t('military.title')}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Notice */}
                <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-5 flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-red-200 font-semibold leading-relaxed">
                    {t('military.desc')}
                  </p>
                </div>

                {/* Who qualifies */}
                <div className="bg-white/5 border border-clinic-gold/20 rounded-2xl p-5 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-clinic-gold shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {t('military.detail')}
                  </p>
                </div>

                {/* Meet & greet */}
                <div className="bg-white/5 border border-clinic-gold/20 rounded-2xl p-5 flex items-start space-x-3">
                  <Info className="w-5 h-5 text-clinic-gold shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {t('military.meetgreet')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
