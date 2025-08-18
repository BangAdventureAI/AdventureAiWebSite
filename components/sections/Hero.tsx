'use client';

import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getTranslation } from '@/lib/translations';
import { Locale } from '@/types';

interface HeroProps {
    locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const bg1Ref = useRef<HTMLDivElement>(null);
    const bg2Ref = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    const heroImages = [
        '/images/city.png',
        '/images/pedestrians.png',
    ];

    // Set titles based on language
    const titles = locale === 'ja' ? [
        'AIで未来を探求し、新たな価値を創造する',
        'TECHで自然と調和し、困難な課題に挑戦する'
    ] : [
        'Exploring the Future with AI, Creating New Value',
        'Harmonizing Technology with Nature, Challenging Difficult Problems'
    ];

    // Reset title when language changes
    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.textContent = titles[0];
        }
    }, [locale, titles]);

    useEffect(() => {
        // Follow the original HTML project logic completely
        const bg1 = bg1Ref.current;
        const bg2 = bg2Ref.current;
        const title = titleRef.current;

        if (!bg1 || !bg2 || !title) return;

        bg1.style.backgroundImage = `url(${heroImages[0]})`;
        bg2.style.backgroundImage = `url(${heroImages[1]})`;
        bg1.style.zIndex = '2';
        bg2.style.zIndex = '1';

        let showing = 0;
        let idx = 0;

        const interval = setInterval(() => {
            const next = (showing + 1) % 2;
            const currDiv = showing === 0 ? bg1 : bg2;
            const nextDiv = showing === 0 ? bg2 : bg1;

            nextDiv.style.backgroundImage = `url(${heroImages[(idx + 1) % heroImages.length]})`;
            nextDiv.style.transition = 'none';
            nextDiv.style.transform = 'translateX(100%)';
            nextDiv.style.zIndex = '3';

            setTimeout(() => {
                console.log('Title switch - idx:', idx, 'condition:', (idx + 1) % titles.length === 1);
                if ((idx + 1) % titles.length === 1) {
                    title.innerHTML = `<span style="color:#fff">${titles[1]}</span>`;
                    console.log('Switching to title 1:', titles[1]);
                } else {
                    title.textContent = titles[0];
                    console.log('Switching to title 0:', titles[0]);
                }
                // Force React re-render
                title.style.display = 'none';
                title.offsetHeight; // Trigger reflow
                title.style.display = '';
            }, 300);

            setTimeout(() => {
                nextDiv.style.transition = 'transform 0.7s cubic-bezier(0.4,0,0.2,1)';
                currDiv.style.transition = 'transform 0.7s cubic-bezier(0.4,0,0.2,1)';
                currDiv.style.transform = 'translateX(-100%)';
                nextDiv.style.transform = 'translateX(0)';
                nextDiv.style.zIndex = '4';
                currDiv.style.zIndex = '3';
            }, 20);

            setTimeout(() => {
                currDiv.style.transition = 'none';
                currDiv.style.transform = 'translateX(0)';
                currDiv.style.zIndex = '1';
                showing = next;
                idx = (idx + 1) % heroImages.length;
            }, 800);
        }, 5000);

        return () => clearInterval(interval);
    }, [locale, titles]);

    const services = [
        {
            key: 'services.ai-development',
            title: getTranslation(locale, 'services.ai-development'),
            anchor: 'services.ai-development',
        },
        {
            key: 'services.ai-consulting',
            title: getTranslation(locale, 'services.ai-consulting'),
            anchor: 'services.ai-consulting',
        },
        {
            key: 'services.export-support',
            title: getTranslation(locale, 'services.export-support'),
            anchor: 'services.export-support',
        },
    ];

    // Build links with language parameters
    const getLinkWithLang = (href: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (locale === 'en') {
            params.set('lang', 'en');
        }
        const queryString = params.toString();

        // Handle URLs with anchors
        if (href.includes('#')) {
            const [basePath, anchor] = href.split('#');
            return queryString ? `${basePath}?${queryString}#${anchor}` : href;
        }

        return queryString ? `${href}?${queryString}` : href;
    };

    return (
        <section className="figma-hero" id="home">
            <div className="figma-hero-bg" id="figma-hero-bg">
                <div
                    ref={bg1Ref}
                    className="figma-hero-bg-img"
                    id="figma-hero-bg-img-1"
                />
                <div
                    ref={bg2Ref}
                    className="figma-hero-bg-img"
                    id="figma-hero-bg-img-2"
                />
            </div>
            <div className="figma-hero-content">
                <div className="figma-hero-title" id="figma-hero-title" ref={titleRef}>
                    {titles[0]}
                </div>
            </div>
            <div className="figma-hero-bottom-bar">
                {services.map((service) => (
                    <div
                        key={service.key}
                        className="figma-hero-feature"
                        onClick={() => router.push(getLinkWithLang(`/cases#${service.anchor}`))}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="feature-title">
                            {service.title}
                            <span className="feature-arrow"></span>
                        </div>
                        <div className="feature-lines">
                            <div className="feature-line-gray"></div>
                            <div className="feature-line-blue"></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 