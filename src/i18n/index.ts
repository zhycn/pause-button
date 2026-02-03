/**
 * i18n 工具函数主入口
 * 提供统一的国际化功能接口
 */

export {
  supportedLocales,
  defaultLocale,
  locales,
  getLocale,
  isValidLocale,
  type SupportedLocale,
} from './locales';

export {
  detectLanguage,
  detectLanguageFromURL,
  detectLanguageFromHeaders,
  getLanguageURL,
  getHreflangURLs,
} from './detector';

export type { Locale } from '../types/locale';
