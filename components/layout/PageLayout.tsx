import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Locale } from '@/types';

interface PageLayoutProps {
    locale: Locale;
    onLanguageChange: (locale: Locale) => void;
    children: React.ReactNode;
    className?: string;
}

export default function PageLayout({
    locale,
    onLanguageChange,
    children,
    className = ''
}: PageLayoutProps) {
    return (
        <div className={`page-container ${className}`}>
            <Header locale={locale} onLanguageChange={onLanguageChange} />
            <main className="main-content">
                {children}
            </main>
            <Footer locale={locale} />
        </div>
    );
}
