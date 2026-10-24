'use client';
import { useLanguage } from '@/utils/LanguageContext';

export default function LanguageSwitcher() {
    const { lang, setLang } = useLanguage();

    const toggleLang = () => {
        setLang(lang === 'cz' ? 'en' : 'cz');
    };

    return (
        <button
            onClick={toggleLang}
            className="font-secondary font-bold text-offblack dark:text-offwhite transition-colors duration-300 cursor-pointer text-[18px]"
        >
            {lang === 'cz' ? 'EN' : 'CZ'}
        </button>
    );
}
