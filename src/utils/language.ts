// 统一的语言管理工具
export function initLanguage() {
  // 获取当前语言
  function getCurrentLang(): string {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const langParam = url.searchParams.get('lang');
      if (langParam && ['zh-CN', 'en'].includes(langParam)) {
        return langParam;
      }
    }
    return 'zh-CN';
  }

  // 切换语言
  function switchLanguage(newLang: string) {
    if (!['zh-CN', 'en'].includes(newLang)) {
      return false;
    }

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.location.href = url.toString();
      return true;
    }
    return false;
  }

  return { getCurrentLang, switchLanguage };
}
