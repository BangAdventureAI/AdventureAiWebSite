'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { getTranslation } from '@/lib/translations';
import { Locale } from '@/types';

export default function CasesPage() {
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
        router.push(`/cases?${params.toString()}`);
    };

    const services = [
        {
            key: 'services.ai-development',
            title: getTranslation(locale, 'services.ai-development'),
            description: getTranslation(locale, 'services.ai-development.description'),
            image: '/images/shibuya.png',
            alt: locale === 'ja' ? 'AIソフトウェア開発' : 'AI Software Development'
        },
        {
            key: 'services.ai-consulting',
            title: getTranslation(locale, 'services.ai-consulting'),
            description: getTranslation(locale, 'services.ai-consulting.description'),
            image: '/images/consulting.png',
            alt: locale === 'ja' ? 'AIコンサルティング' : 'AI Consulting'
        },
        {
            key: 'services.export-support',
            title: getTranslation(locale, 'services.export-support'),
            description: getTranslation(locale, 'services.export-support.description'),
            image: '/images/map.png',
            alt: locale === 'ja' ? '輸出・海外ビジネス支援' : 'Export & Global Business Support'
        }
    ];

    return (
        <PageLayout locale={locale} onLanguageChange={handleLanguageChange}>
            <section className="cases-hero" style={{ position: 'relative' }}>
                <div className="cases-hero-banner">
                    <div className="cases-hero-title">
                        {getTranslation(locale, 'cases.hero.title')}
                        {locale === 'ja' && (
                            <>
                                <br />
                                {getTranslation(locale, 'cases.hero.subtitle')}
                            </>
                        )}
                    </div>
                </div>
                <img
                    className="cases-hero-img"
                    src="/images/chip.png"
                    alt={locale === 'ja' ? '事業内容イメージ' : 'Services Image'}
                />
            </section>

            <section className="cases-services" id="services">
                <div className="cases-services-inner">
                    {services.map((service) => (
                        <div key={service.key} className="cases-service-card" id={service.key}>
                            <img
                                className="cases-service-img"
                                src={service.image}
                                alt={service.alt}
                            />
                            <div className="cases-service-content">
                                <div className="cases-service-titles">
                                    <div className="cases-service-title">
                                        {service.title}
                                    </div>
                                    {locale === 'ja' && (
                                        <div className="cases-service-en">
                                            {getTranslation('en', service.key)}
                                        </div>
                                    )}
                                </div>
                                <div className="cases-service-desc"
                                    dangerouslySetInnerHTML={{
                                        __html: service.description
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </PageLayout>
    );
} 