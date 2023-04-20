export interface TranslationsUnion {
  fallback: 'he';
  he: Translation;
  en: Translation;
}

export interface Translation {
  appName: string;
  profile: {
    logout: string;
    heyUser: string;
    personalText: string;
    numberOfRecipes: string;
    avatarModal: {
      chooseType: string;
      chooseAvatar: string;
      preview: string;
      save: string;
    };
  };
}

export const HE = 'he';
export const EN = 'en';
