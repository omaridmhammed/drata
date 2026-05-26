import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  };
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Navigation' });
  const homeT = await getTranslations({ locale, namespace: 'Home.Hero' });

  return {
    title: {
      default: `${t('logo')} | ${homeT('badge')}`,
      template: `%s | ${t('logo')}`
    },
    description: homeT('subtitle'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        fr: '/fr'
      }
    },
    metadataBase: new URL('https://tremblayclinic.ca'),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
