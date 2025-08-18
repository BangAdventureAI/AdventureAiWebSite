'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { getTranslation } from '@/lib/translations';
import { Locale } from '@/types';

interface LogoProps {
    locale: Locale;
    variant?: 'header' | 'footer';
    className?: string;
    showLink?: boolean;
    linkHref?: string;
}

export default function Logo({
    locale,
    variant = 'header',
    className = '',
    showLink = true,
    linkHref
}: LogoProps) {
    const searchParams = useSearchParams();

    // Build home link with current language parameter
    const getHomeLink = () => {
        if (linkHref) return linkHref;

        const params = new URLSearchParams(searchParams.toString());
        if (locale === 'en') {
            params.set('lang', 'en');
        } else {
            params.delete('lang');
        }
        const queryString = params.toString();
        return queryString ? `/?${queryString}` : '/';
    };

    const logoContent = (
        <div className={`figma-logo-block ${variant === 'footer' ? 'footer-logo-block' : 'header-logo-block'} ${className}`}>
            <Image
                className="figma-logo-img"
                src="/images/logo.png"
                alt="logo"
                width={48}
                height={48}
            />
            <div className={variant === 'footer' ? 'footer-logo-info' : ''}>
                <div className="figma-logo-texts">
                    <div className="figma-logo-sub">
                        アドベンチャーエーアイ
                    </div>
                    <div className="figma-logo-main">
                        {getTranslation(locale, 'company.name')}
                    </div>
                    <div className="figma-logo-slogan">Exploring the Future with AI</div>
                </div>
            </div>
        </div>
    );

    if (showLink) {
        return (
            <Link href={getHomeLink()} id="logo-link">
                {logoContent}
            </Link>
        );
    }

    return logoContent;
} 