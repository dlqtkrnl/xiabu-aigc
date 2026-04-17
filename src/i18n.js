import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationZH from './locales/zh.json';
import translationKO from './locales/ko.json';
import translationEN from './locales/en.json';

const resources = {
  zh: {
    translation: translationZH
  },
  ko: {
    translation: translationKO
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;
