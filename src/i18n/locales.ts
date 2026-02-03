/**
 * 静态导入所有语言文件
 * 这是 Astro 5 的最佳实践，确保所有语言文件在构建时被正确打包
 */
import enLocale from '../data/locales/en.json';
import zhCNLocale from '../data/locales/zh-CN.json';
import type { Locale } from '../types/locale';

/**
 * 支持的语言列表
 */
export const supportedLocales = ['en', 'zh-CN'] as const;
export type SupportedLocale = typeof supportedLocales[number];

/**
 * 默认语言
 */
export const defaultLocale: SupportedLocale = 'en';

/**
 * 所有语言数据映射
 */
export const locales: Record<SupportedLocale, Locale> = {
  'en': enLocale as Locale,
  'zh-CN': zhCNLocale as Locale,
};

/**
 * 获取指定语言的 locale 数据
 */
export function getLocale(locale: SupportedLocale): Locale {
  return locales[locale] || locales[defaultLocale];
}

/**
 * 验证语言代码是否支持
 */
export function isValidLocale(locale: string): locale is SupportedLocale {
  return supportedLocales.includes(locale as SupportedLocale);
}
