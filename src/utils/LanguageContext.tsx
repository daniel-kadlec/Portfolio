'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { defaultLocale, type Locale } from '@/i18n-config';
import { getDictionary, type Dictionary } from '@/dictionaries/dictionaries';

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
