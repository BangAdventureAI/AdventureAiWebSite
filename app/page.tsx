'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/sections/Hero';
import CompanyProfile from '@/components/sections/CompanyProfile';
import AboutUs from '@/components/sections/AboutUs';
import { Locale } from '@/types';

export default function HomePage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [locale, setLocale] = useState<Locale>('ja');

    // Initialize language setting from URL parameters
    useEffect(() => {
        const lang = searchParams.get('lang') as Locale;
        if (lang === 'en' || lang === 'ja') {
            setLocale(lang);
        }
    }, [searchParams]);

    const handleLanguageChange = (newLocale: Locale) => {
        setLocale(newLocale);
        // Update URL parameters
        const params = new URLSearchParams(searchParams.toString());
        params.set('lang', newLocale);
        router.push(`/?${params.toString()}`);
    };

    return (
        <PageLayout locale={locale} onLanguageChange={handleLanguageChange}>
            <Hero locale={locale} />
            <CompanyProfile locale={locale} />
            <AboutUs locale={locale} />
        </PageLayout>
    );
} 