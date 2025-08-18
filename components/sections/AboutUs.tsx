import { getTranslation } from '@/lib/translations';
import { Locale } from '@/types';

interface AboutUsProps {
    locale: Locale;
}

export default function AboutUs({ locale }: AboutUsProps) {
    return (
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
    );
} 