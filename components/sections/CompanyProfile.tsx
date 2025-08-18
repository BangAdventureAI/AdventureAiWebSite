import { getTranslation } from '@/lib/translations';
import { Locale } from '@/types';

interface CompanyProfileProps {
    locale: Locale;
}

export default function CompanyProfile({ locale }: CompanyProfileProps) {
    return (
        <section className="figma-company-profile" id="company-profile">
            <div className="figma-company-profile-bg"></div>
            <div className="figma-company-profile-title">
                {getTranslation(locale, 'nav.company')}
            </div>
            {locale === 'ja' && (
                <div className="figma-company-profile-en">COMPANY INTRODUCTION</div>
            )}
            <div className="figma-company-profile-bottom-bar">
                <div className="figma-company-profile-philosophy">
                    <div className="figma-company-profile-philosophy-content">
                        <div className="figma-company-profile-philosophy-title">
                            {getTranslation(locale, 'company.philosophy.title')}
                        </div>
                        <div className="figma-company-profile-philosophy-main">
                            {getTranslation(locale, 'company.philosophy.main')}
                        </div>
                        <div className="figma-company-profile-philosophy-desc"
                            dangerouslySetInnerHTML={{ __html: getTranslation(locale, 'company.philosophy.content') }}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 