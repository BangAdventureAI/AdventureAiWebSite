'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import CompanyProfile from '@/components/sections/CompanyProfile';
import { getTranslation } from '@/lib/translations';
import { Locale } from '@/types';

// Generate Google Maps URL
function getGoogleMapsUrl(address: string): string {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
}

export default function CompanyPage() {
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
        router.push(`/company?${params.toString()}`);
    };

    return (
        <PageLayout locale={locale} onLanguageChange={handleLanguageChange}>
            <CompanyProfile locale={locale} />
            <section className="figma-company-info figma-company-info-mcp">
                <div className="company-info-title-mcp">
                    {getTranslation(locale, 'company.profile.title')}
                </div>
                <div className="company-info-table-mcp">
                    <div className="company-info-row-mcp">
                        <div className="company-info-label-mcp">
                            {getTranslation(locale, 'company.profile.name')}
                        </div>
                        <div className="company-info-value-mcp">
                            {getTranslation(locale, 'company.name')}
                        </div>
                    </div>
                    <div className="company-info-row-mcp">
                        <div className="company-info-label-mcp">
                            {getTranslation(locale, 'company.profile.established')}
                        </div>
                        <div className="company-info-value-mcp">
                            {getTranslation(locale, 'company.established')}
                        </div>
                    </div>
                    <div className="company-info-row-mcp">
                        <div className="company-info-label-mcp">
                            {getTranslation(locale, 'company.profile.representative')}
                        </div>
                        <div className="company-info-value-mcp">
                            {getTranslation(locale, 'company.representative')}
                        </div>
                    </div>
                    <div className="company-info-row-mcp">
                        <div className="company-info-label-mcp">
                            {getTranslation(locale, 'company.profile.address')}
                        </div>
                        <div className="company-info-value-mcp">
                            <a
                                href={getGoogleMapsUrl(getTranslation(locale, 'contact.address'))}
                                className="address-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {getTranslation(locale, 'contact.address')}
                            </a>
                        </div>
                    </div>
                    <div className="company-info-row-mcp">
                        <div className="company-info-label-mcp">
                            {getTranslation(locale, 'company.profile.capital')}
                        </div>
                        <div className="company-info-value-mcp">
                            {getTranslation(locale, 'company.capital')}
                        </div>
                    </div>
                    <div className="company-info-row-mcp company-info-row-bg-mcp">
                        <div className="company-info-label-mcp">
                            {getTranslation(locale, 'company.profile.business')}
                        </div>
                        <div className="company-info-value-mcp">
                            {getTranslation(locale, 'company.business')}
                        </div>
                    </div>
                    <div className="company-info-row-mcp">
                        <div className="company-info-label-mcp">
                            {getTranslation(locale, 'company.profile.number')}
                        </div>
                        <div className="company-info-value-mcp">
                            0110‐01‐170238
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
} 