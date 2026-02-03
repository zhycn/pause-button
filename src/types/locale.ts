// Locale data types
export interface Locale {
  ui: {
    buttonText: string;
    defaultHeroTexts: string[];
    fallbackMessage: string;
    logo: string;
    github: string;
    language: string;
    theme: string;
  };
  culture: {
    title: string;
    sections: Array<{
      title: string;
      description: string;
    }>;
  };
  footer: {
    version: string;
    links: {
      github: string;
      docs: string;
      about: string;
    };
    copyright: string;
  };
  suggestions: string[];
}
