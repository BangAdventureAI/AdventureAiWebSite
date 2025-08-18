// Language type
export type Locale = 'ja' | 'en';

// Navigation item type
export interface NavItem {
    href: string;
    label: string;
    labelEn: string;
}

// Company information type
export interface CompanyInfo {
    name: string;
    nameEn: string;
    established: string;
    establishedEn: string;
    representative: string;
    representativeEn: string;
    address: string;
    addressEn: string;
    capital: string;
    capitalEn: string;
    businessActivities: string[];
    businessActivitiesEn: string[];
}

// Service item type
export interface ServiceItem {
    id: string;
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    image: string;
}

// Team member type
export interface TeamMember {
    name: string;
    nameEn: string;
    role: string;
    roleEn: string;
    image: string;
}

// Translation key type
export type TranslationKey =
    | 'nav.home'
    | 'nav.company'
    | 'nav.cases'
    | 'nav.about'
    | 'hero.title'
    | 'hero.subtitle'
    | 'company.philosophy.title'
    | 'company.philosophy.content'
    | 'about.title'
    | 'about.description'
    | 'contact.email'
    | 'contact.address'; 