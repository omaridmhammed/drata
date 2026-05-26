'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter, Link } from '../navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X, Globe, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 🔗 Replace with your actual booking platform URL
const BOOKING_URL = '#';

export default function Header() {
  const t = useTranslations('Navigation');
  const activeLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/book', label: t('book') },
    { href: '/contact', label: t('contact') },
  ];

  const handleLocaleChange = (newLocale: 'en' | 'fr') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav py-3 shadow-premium'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-clinic-gold to-clinic-gold-dark flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
              <Heart className="w-5 h-5 text-clinic-navy" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-lg font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-clinic-cream' : 'text-clinic-navy'}`}>
                {t('logo')}
              </span>
              <span className={`text-[10px] uppercase tracking-wider font-semibold transition-colors duration-300 ${scrolled ? 'text-clinic-gold-light' : 'text-clinic-gold-dark'}`}>
                {activeLocale === 'fr' ? 'Médecine Familiale' : 'Family Medicine'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 relative py-1 ${
                    scrolled
                      ? isActive
                        ? 'text-clinic-gold-light'
                        : 'text-gray-300 hover:text-clinic-cream'
                      : isActive
                      ? 'text-clinic-navy font-bold'
                      : 'text-clinic-navy/80 hover:text-clinic-navy'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeHeaderTab"
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                        scrolled ? 'bg-clinic-gold' : 'bg-clinic-navy'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Language Toggle & CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="flex items-center bg-clinic-navy-dark/10 p-1 rounded-full border border-clinic-navy/10 relative">
              <div className="flex items-center px-2 py-1 text-xs text-clinic-navy/70">
                <Globe className="w-3.5 h-3.5 mr-1" />
              </div>
              <button
                onClick={() => handleLocaleChange('en')}
                className={`text-xs px-2.5 py-1 rounded-full font-semibold transition-all duration-300 ${
                  activeLocale === 'en'
                    ? scrolled
                      ? 'bg-clinic-gold text-clinic-navy shadow-sm'
                      : 'bg-clinic-navy text-clinic-cream shadow-sm'
                    : scrolled
                    ? 'text-gray-300 hover:text-clinic-cream'
                    : 'text-clinic-navy/70 hover:text-clinic-navy'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLocaleChange('fr')}
                className={`text-xs px-2.5 py-1 rounded-full font-semibold transition-all duration-300 ${
                  activeLocale === 'fr'
                    ? scrolled
                      ? 'bg-clinic-gold text-clinic-navy shadow-sm'
                      : 'bg-clinic-navy text-clinic-cream shadow-sm'
                    : scrolled
                    ? 'text-gray-300 hover:text-clinic-cream'
                    : 'text-clinic-navy/70 hover:text-clinic-navy'
                }`}
              >
                FR
              </button>
            </div>

            {/* Sticky Header CTA Button */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs uppercase font-bold tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'btn-gold'
                  : 'bg-clinic-navy text-clinic-cream hover:bg-clinic-navy-light shadow-md hover:shadow-premium'
              }`}
            >
              {t('cta')}
            </a>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center md:hidden space-x-4">
            {/* Language selector for mobile */}
            <div className="flex items-center bg-clinic-navy-dark/10 rounded-full border border-clinic-navy/5 p-0.5">
              <button
                onClick={() => handleLocaleChange('en')}
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  activeLocale === 'en'
                    ? 'bg-clinic-navy text-clinic-cream'
                    : scrolled ? 'text-gray-300' : 'text-clinic-navy/60'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLocaleChange('fr')}
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  activeLocale === 'fr'
                    ? 'bg-clinic-navy text-clinic-cream'
                    : scrolled ? 'text-gray-300' : 'text-clinic-navy/60'
                }`}
              >
                FR
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1.5 rounded-full border transition-colors ${
                scrolled
                  ? 'text-clinic-cream border-gray-600 hover:bg-gray-800'
                  : 'text-clinic-navy border-clinic-navy/20 hover:bg-clinic-navy/5'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-clinic-navy border-t border-clinic-gold/20 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-clinic-gold bg-clinic-navy-light/40 border-l-2 border-clinic-gold pl-2'
                        : 'text-gray-300 hover:text-clinic-cream hover:bg-clinic-navy-light/20'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-clinic-navy-light/40">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center btn-gold py-3 rounded-full text-sm font-bold uppercase tracking-wider"
                >
                  {t('cta')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
