'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Locale } from '@/types';
import { getTranslation } from '@/lib/translations';
import Logo from '@/components/ui/Logo';

interface HeaderProps {
    locale: Locale;
    onLanguageChange: (locale: Locale) => void;
}

export default function Header({ locale, onLanguageChange }: HeaderProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const navItems = [
        { href: '/', label: getTranslation(locale, 'nav.home') },
        { href: '/company', label: getTranslation(locale, 'nav.company') },
        { href: '/cases', label: getTranslation(locale, 'nav.cases') },
        { href: '/about', label: getTranslation(locale, 'nav.about') },
    ];

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);

        const newUrl = buildUrlWithLocale(href, locale);
        router.push(newUrl);
    };

    const handleLanguageClick = (newLocale: Locale) => {
        onLanguageChange(newLocale);
        setIsMobileMenuOpen(false);
    };

    const buildUrlWithLocale = (href: string, locale: Locale) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('lang', locale);
        const queryString = params.toString();
        return queryString ? `${href}?${queryString}` : href;
    };

    return (
        <header className="figma-header">
            <div className="figma-header-top">
                <Logo
                    locale={locale}
                    variant="header"
                    showLink={true}
                />

                {/* Mobile language selector - displayed on the right of logo */}
                {isMobile && (
                    <div className="header-lang-selector">
                        <span
                            className={`lang-jp ${locale === 'ja' ? 'active' : ''}`}
                            onClick={() => onLanguageChange('ja')}
                        >
                            日本語
                        </span>
                        <span
                            className={`lang-en ${locale === 'en' ? 'active' : ''}`}
                            onClick={() => onLanguageChange('en')}
                        >
                            English
                        </span>
                    </div>
                )}

                {/* Desktop navigation - includes language selector and navigation links */}
                <div className={`figma-header-nav ${isMobile ? 'mobile-hidden' : ''}`}>
                    {/* Desktop and tablet language selector - displayed above navigation */}
                    <div className="header-lang-selector">
                        <span
                            className={`lang-jp ${locale === 'ja' ? 'active' : ''}`}
                            onClick={() => onLanguageChange('ja')}
                        >
                            日本語
                        </span>
                        <span
                            className={`lang-en ${locale === 'en' ? 'active' : ''}`}
                            onClick={() => onLanguageChange('en')}
                        >
                            English
                        </span>
                    </div>

                    {/* Navigation menu */}
                    <nav>
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Mobile hamburger menu button */}
                {isMobile && (
                    <button
                        className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                )}
            </div>

            {/* Mobile menu overlay */}
            {isMobile && (
                <>
                    <div
                        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    ></div>

                    <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <div className="mobile-menu-content">
                            <nav className="mobile-nav">
                                <ul>
                                    {navItems.map((item) => (
                                        <li key={item.href}>
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleNavClick(item.href);
                                                }}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}