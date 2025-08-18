import { getTranslation } from '@/lib/translations';
import { Locale } from '@/types';

interface ContactProps {
    locale: Locale;
}

// Generate Google Maps URL
function getGoogleMapsUrl(address: string): string {
    // URL encode the address for Google Maps search
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
}

export default function Contact({ locale }: ContactProps) {
    return (
        <div className="footer-contact-block">
            <div className="figma-contact-title">
                {getTranslation(locale, 'contact.title')}
            </div>
            <div className="figma-contact-email">
                Email: <a
                    href={`mailto:${getTranslation(locale, 'contact.email')}`}
                    className="email-link"
                >
                    {getTranslation(locale, 'contact.email')}
                </a>
            </div>
            <div className="figma-contact-address">
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
    );
} 