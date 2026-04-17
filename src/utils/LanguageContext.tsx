'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getDictionary, type Dictionary } from '@/dictionaries/dictionaries';

export const locales = ['en', 'cz'] as const;
export type Locale = (typeof locales)[number];
const defaultLocale: Locale = 'cz';


type LanguageContextType = {
    lang: Locale;
    dict: Dictionary;
    setLang: (l: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLangState] = useState<Locale>(defaultLocale);

    useEffect(() => {
        const stored = localStorage.getItem('locale');
        if (stored === 'cz' || stored === 'en') {
            setLangState(stored);
            return;
        }
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('cs') || browserLang.startsWith('cz')) {
            setLangState('cz');
        } else if (browserLang.startsWith('en')) {
            setLangState('en');
        }
    }, []);

    const dict = getDictionary(lang);

    const setLang = (newLang: Locale) => {
        setLangState(newLang);
        localStorage.setItem('locale', newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, dict, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
};
