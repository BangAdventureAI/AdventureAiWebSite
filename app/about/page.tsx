'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { getTranslation } from '@/lib/translations';
import { Locale } from '@/types';

export default function AboutPage() {
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
        router.push(`/about?${params.toString()}`);
    };

    const teams = [
        {
            key: 'development',
            title: getTranslation(locale, 'about.team.development.title'),
            description: getTranslation(locale, 'about.team.development.description'),
            image: '/images/road.png',
            alt: locale === 'ja' ? '開発チーム' : 'Development Team'
        },
        {
            key: 'consulting',
            title: getTranslation(locale, 'about.team.consulting.title'),
            description: getTranslation(locale, 'about.team.consulting.description'),
            image: '/images/pc.png',
            alt: locale === 'ja' ? 'コンサルティングチーム' : 'Consulting Team'
        },
        {
            key: 'marketing',
            title: getTranslation(locale, 'about.team.marketing.title'),
            description: getTranslation(locale, 'about.team.marketing.description'),
            image: '/images/clock.png',
            alt: locale === 'ja' ? 'マーケティングチーム' : 'Marketing Team'
        }
    ];

    return (
        <PageLayout locale={locale} onLanguageChange={handleLanguageChange}>
            <section className="figma-aboutus" id="about">
                <div className="figma-aboutus-bg"></div>
                <div className="figma-aboutus-bar">
                    <div className="figma-aboutus-content">
                        <div className="figma-aboutus-title">
                            {getTranslation(locale, 'about.title')}
                        </div>
                        {locale === 'ja' && (
                            <div className="figma-aboutus-en">
                                {getTranslation(locale, 'about.subtitle')}
                            </div>
                        )}
                        <div className="figma-aboutus-team-title">
                            {getTranslation(locale, 'about.team.title')}
                        </div>
                        <div className="figma-aboutus-team-main">
                            {getTranslation(locale, 'about.team.description')}
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-team">
                <div className="about-team-inner">
                    {teams.map((team) => (
                        <div key={team.key} className="about-team-card">
                            <img
                                className="about-team-img"
                                src={team.image}
                                alt={team.alt}
                            />
                            <div className="about-team-content">
                                <div className="about-team-titles">
                                    <div className="about-team-title">
                                        {team.title}
                                    </div>
                                    {locale === 'ja' && (
                                        <div className="about-team-en">
                                            {getTranslation('en', team.key === 'development' ? 'about.team.development.title' : team.key === 'consulting' ? 'about.team.consulting.title' : 'about.team.marketing.title')}
                                        </div>
                                    )}
                                </div>
                                <div className="about-team-desc"
                                    dangerouslySetInnerHTML={{
                                        __html: team.description
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