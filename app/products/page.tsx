'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import { getTranslation } from '@/lib/translations';
import { Locale } from '@/types';

export default function ProductsPage() {
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
        router.push(`/products?${params.toString()}`);
    };

    const products = [
        {
            key: 'products.fastreply',
            name: getTranslation(locale, 'products.fastreply.name'),
            tagline: getTranslation(locale, 'products.fastreply.tagline'),
            description: getTranslation(locale, 'products.fastreply.description'),
            link: 'https://fastreply.jp/',
            image: '/images/fastreply.png',
            alt: locale === 'ja' ? 'FastReply - AI搭載の面接支援ツール' : 'FastReply - AI-Powered Interview Assistant'
        }
    ];

    return (
        <PageLayout locale={locale} onLanguageChange={handleLanguageChange}>
            <section className="cases-services" id="products" style={{ marginTop: '3rem' }}>
                <div className="cases-services-inner">
                    {products.map((product) => (
                        <div key={product.key} className="cases-service-card" id={product.key}>
                            <img
                                className="cases-service-img"
                                src={product.image}
                                alt={product.alt}
                            />
                            <div className="cases-service-content">
                                <div className="cases-service-titles">
                                    <div className="cases-service-title">
                                        {product.name}
                                    </div>
                                    <div className="cases-service-en">
                                        {product.tagline}
                                    </div>
                                </div>
                                <div className="cases-service-desc"
                                    dangerouslySetInnerHTML={{
                                        __html: product.description
                                    }}
                                />
                                <a
                                    href={product.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="product-link-button"
                                >
                                    {getTranslation(locale, 'products.fastreply.link')}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </PageLayout>
    );
}
