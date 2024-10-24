import locales from '@/locales';

export type Language = {
  key: keyof typeof locales;
  dir?: 'ltr' | 'rtl';
  fontScale?: number;
};

export const DEFAULT_NAMESPACE = 'common';

export const DEFAULT_LANGUAGE_KEY: Language['key'] = 'zh';

export const AVAILABLE_LANGUAGES: Language[] = [
  {
    key: 'zh',
  },
  {
    key: 'en',
  },
  {
    key: 'fr',
  },
  {
    key: 'ar',
    dir: 'rtl',
    fontScale: 1.2,
  },
  {
    key: 'sw',
  },
];
