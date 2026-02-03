import { defaultLocale, supportedLocales, type SupportedLocale, isValidLocale } from './locales';

/**
 * 从 URL 参数中检测语言
 */
export function detectLanguageFromURL(url: URL): SupportedLocale {
  const langParam = url.searchParams.get('lang');
  
  if (langParam && isValidLocale(langParam)) {
    return langParam;
  }
  
  return defaultLocale;
}

/**
 * 从 HTTP Accept-Language header 检测语言
 */
export function detectLanguageFromHeaders(headers: Headers | null | undefined): SupportedLocale {
  if (!headers) {
    return defaultLocale;
  }
  
  const acceptLanguage = headers.get('accept-language');
  
  if (!acceptLanguage) {
    return defaultLocale;
  }
  
  // 解析 Accept-Language header
  // 格式: "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7"
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [locale, q = '1'] = lang.trim().split(';');
      const quality = parseFloat(q.replace('q=', '') || '1');
      return { locale: locale.toLowerCase(), quality };
    })
    .sort((a, b) => b.quality - a.quality);
  
  // 尝试精确匹配
  for (const { locale } of languages) {
    // 精确匹配 (zh-CN, en)
    if (isValidLocale(locale)) {
      return locale;
    }
    
    // 前缀匹配 (zh -> zh-CN, en-US -> en)
    const prefix = locale.split('-')[0];
    const matched = supportedLocales.find(loc => loc.startsWith(prefix));
    if (matched) {
      return matched;
    }
  }
  
  return defaultLocale;
}

/**
 * 综合检测语言（优先级：URL 参数 > Accept-Language header > 默认语言）
 */
export function detectLanguage(url: URL, headers?: Headers | null): SupportedLocale {
  // 1. 优先使用 URL 参数
  const urlLang = detectLanguageFromURL(url);
  if (urlLang !== defaultLocale || url.searchParams.has('lang')) {
    return urlLang;
  }
  
  // 2. 如果没有 URL 参数且 headers 存在，使用 Accept-Language header
  if (headers) {
    return detectLanguageFromHeaders(headers);
  }
  
  // 3. 如果 headers 不存在，返回默认语言
  return defaultLocale;
}

/**
 * 生成语言切换 URL
 */
export function getLanguageURL(currentURL: URL, newLocale: SupportedLocale): string {
  const url = new URL(currentURL);
  url.searchParams.set('lang', newLocale);
  return url.toString();
}

/**
 * 生成 hreflang URL（用于 SEO）
 */
export function getHreflangURLs(baseURL: URL): Record<SupportedLocale, string> {
  const urls: Partial<Record<SupportedLocale, string>> = {};
  
  for (const locale of supportedLocales) {
    const url = new URL(baseURL);
    url.searchParams.set('lang', locale);
    urls[locale] = url.toString();
  }
  
  return urls as Record<SupportedLocale, string>;
}
