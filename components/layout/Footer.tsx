import Contact from '@/components/sections/Contact';
import Logo from '@/components/ui/Logo';
import { getTranslation } from '@/lib/translations';
import { Locale } from '@/types';

interface FooterProps {
    locale: Locale;
}

// Convert email addresses in text to clickable links
function renderTextWithEmailLinks(text: string): JSX.Element {
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const parts = text.split(emailRegex);

    return (
        <>
            {parts.map((part, index) => {
                if (emailRegex.test(part)) {
                    return (
                        <a
                            key={index}
                            href={`mailto:${part}`}
                            className="email-link"
                        >
                            {part}
                        </a>
                    );
                }
                return part;
            })}
        </>
    );
}

export default function Footer({ locale }: FooterProps) {
    return (
        <footer className="site-footer" id="contact">
            <div className="figma-contact-wrapper">
                <div className="figma-contact-inner">
                    <Logo
                        locale={locale}
                        variant="footer"
                        showLink={false}
                    />
                    <Contact locale={locale} />
                </div>
            </div>
            <div className="figma-contact-divider"></div>
            <div className="figma-contact-copyright">
                {getTranslation(locale, 'footer.copyright')}<br />
                {renderTextWithEmailLinks(getTranslation(locale, 'footer.contact.message'))}
            </div>
        </footer>
    );
} 