import {I18n} from 'i18n-js';

export const translations: TranslationsUnion = {
  fallback: 'he',
  he: {
    appName: 'ItWorks_StructureTask',
    profile: {
      logout: 'התנתקות',
      heyUser: 'היי, ',
    },
  },
  en: {
    appName: 'ItWorks_StructureTask',
    profile: {
      logout: 'Logout',
      heyUser: 'Hey, ',
    },
  },
};

const i18n = new I18n(translations);
i18n.locale = HE;
i18n.enableFallback = true;
export default i18n;
