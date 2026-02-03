/**
 * 客户端国际化管理器
 * 处理URL参数变化并更新页面内容
 */

import type { SupportedLocale } from '../i18n';
import { locales, defaultLocale, getLocale } from '../i18n';

// 语言数据（从服务端注入）
declare global {
  interface Window {
    __i18nData?: {
      locales: Record<SupportedLocale, any>;
      defaultLocale: SupportedLocale;
      supportedLocales: SupportedLocale[];
      currentLang: SupportedLocale;
    };
  }
}

/**
 * 获取当前语言（从URL参数）
 */
export function getCurrentLang(): SupportedLocale {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }
  
  const url = new URL(window.location.href);
  const langParam = url.searchParams.get('lang');
  
  if (langParam && ['zh-CN', 'en'].includes(langParam)) {
    return langParam as SupportedLocale;
  }
  
  // 从localStorage获取
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('lang');
    if (stored && ['zh-CN', 'en'].includes(stored)) {
      return stored as SupportedLocale;
    }
  }
  
  // 默认语言
  return defaultLocale;
}

/**
 * 切换语言
 */
export function switchLanguage(newLang: SupportedLocale): void {
  if (!['zh-CN', 'en'].includes(newLang)) {
    return;
  }
  
  if (typeof window === 'undefined') {
    return;
  }
  
  // 保存到localStorage
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('lang', newLang);
  }
  
  // 更新URL参数
  const url = new URL(window.location.href);
  url.searchParams.set('lang', newLang);
  
  // 使用replace避免历史记录堆积
  window.history.replaceState({}, '', url.toString());
  
  // 触发语言变化事件
  window.dispatchEvent(new CustomEvent('languagechange', {
    detail: { lang: newLang }
  }));
  
  // 重新加载页面以应用新语言（SSG模式需要）
  window.location.reload();
}

/**
 * 初始化客户端i18n
 */
export function initI18nClient(): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  // 监听popstate事件（浏览器前进/后退）
  window.addEventListener('popstate', () => {
    const newLang = getCurrentLang();
    window.dispatchEvent(new CustomEvent('languagechange', {
      detail: { lang: newLang }
    }));
  });
}
