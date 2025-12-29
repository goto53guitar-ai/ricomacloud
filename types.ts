
export type Language = 'zh' | 'en' | 'es';

export interface Translation {
  nav: {
    home: string;
    products: string;
    solutions: string;
    pms: string;
    customization: string;
    creative: string;
    login: string;
    register: string;
  };
  hero: {
    title1: string;
    sub1: string;
    desc1: string;
    title2: string;
    sub2: string;
    title3: string;
    sub3: string;
  };
  common: {
    learnMore: string;
    getStarted: string;
    contactUs: string;
    solveProblems: string;
  };
}

export type Page = 'home' | 'pms' | 'customization' | 'creative' | 'register' | 'login';
