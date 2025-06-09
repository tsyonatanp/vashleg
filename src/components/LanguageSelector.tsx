import React from 'react';
import { motion } from 'framer-motion';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export default function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const languages = [
    { code: 'he', name: 'עברית' },
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' }
  ];

  return (
    <div className="flex space-x-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-3 py-1 rounded-lg text-sm font-medium ${
            currentLanguage === lang.code
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {lang.name}
        </motion.button>
      ))}
    </div>
  );
} 