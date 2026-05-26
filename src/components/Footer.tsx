'use client';

import React from 'react';
import { Link } from '../navigation';
import { useTranslations } from 'next-intl';
import { Heart, Phone, MapPin, Mail, Clock, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');
  const navT = useTranslations('Navigation');
  const contactT = useTranslations('Contact');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-clinic-navy text-clinic-cream border-t-2 border-clinic-gold/30">
      {/* Top Banner: Emergency Notice */}
      <div className="bg-clinic-navy-dark/60 border-b border-clinic-gold/10 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center space-x-2 text-center text-xs text-red-400 font-semibold tracking-wide uppercase px-2">
          <ShieldAlert className="w-4.5 h-4.5 animate-pulse shrink-0" />
          <span>{t('emergencyNotice')}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-clinic-gold flex items-center justify-center">
                <Heart className="w-4 h-4 text-clinic-navy" fill="currentColor" />
              </div>
              <span className="font-serif text-lg font-bold text-clinic-cream">
                {t('clinic')}
              </span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed">
              {t('tagline')}
            </p>
            <div className="flex space-x-3 pt-2">
              {['facebook', 'twitter', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-clinic-navy-light hover:bg-clinic-gold hover:text-clinic-navy flex items-center justify-center text-gray-400 transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <span className="text-xs uppercase font-bold tracking-tighter">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-clinic-gold">
              {t('links')}
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {[
                { href: '/', label: navT('home') },
                { href: '/about', label: navT('about') },
                { href: '/services', label: navT('services') },
                { href: '/book', label: navT('book') },
                { href: '/contact', label: navT('contact') },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-clinic-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-clinic-gold">
              {t('contact')}
            </h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-clinic-gold mt-0.5 shrink-0" />
                <span>{contactT('info.addressVal')}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-clinic-gold shrink-0" />
                <span>{contactT('info.phoneVal')}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-clinic-gold shrink-0" />
                <a href={`mailto:${contactT('info.emailVal')}`} className="hover:text-clinic-gold transition-colors">
                  {contactT('info.emailVal')}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours of Operation */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-clinic-gold">
              {t('hours')}
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-clinic-gold shrink-0" />
                <span>{contactT('info.h1')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-clinic-gold shrink-0" />
                <span>{contactT('info.h2')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-clinic-gold shrink-0" />
                <span>{contactT('info.h3')}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Base */}
        <div className="mt-12 pt-8 border-t border-clinic-gold/15 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>{t('copyright', { year: currentYear })}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-clinic-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-clinic-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
