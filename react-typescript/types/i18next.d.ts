import ko from '@/locales/ko/common.json';
import en from '@/locales/en/common.json';

const resources = {
  ko,
  en,
} as const;

export const defaultNS = 'ko';
declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: typeof defaultNS;
    resources: typeof resources;
  }
}
