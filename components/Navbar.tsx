
import React from 'react';
import { Language, Page } from '../types';
import { translations } from '../i18n';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, currentPage, setPage }) => {
  const t = translations[lang];

  const cycleLanguage = () => {
    if (lang === 'zh') setLang('en');
    else if (lang === 'en') setLang('es');
    else setLang('zh');
  };

  const getLangLabel = () => {
    if (lang === 'zh') return 'EN';
    if (lang === 'en') return 'ES';
    return '中文';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer group" onClick={() => setPage('home')}>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              RICOMA<span className="text-red-600">CLOUD</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            <button 
              onClick={() => setPage('home')}
              className={`text-xs uppercase tracking-widest font-extrabold transition-all ${currentPage === 'home' ? 'text-red-600' : 'text-slate-500 hover:text-slate-900'}`}
            >
              {t.nav.home}
            </button>
            <div className="relative group">
              <button className={`text-xs uppercase tracking-widest font-extrabold flex items-center transition-all ${currentPage !== 'home' && currentPage !== 'register' && currentPage !== 'login' ? 'text-red-600' : 'text-slate-500 hover:text-slate-900'}`}>
                {t.nav.products}
                <i className="fas fa-chevron-down ml-1.5 text-[8px] opacity-60"></i>
              </button>
              <div className="absolute top-full -left-4 mt-2 w-64 bg-white shadow-2xl rounded-xl border border-slate-100 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <button onClick={() => setPage('pms')} className="flex items-center w-full text-left px-6 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-red-600 font-bold transition-colors">
                  <i className="fas fa-industry w-5 mr-3 opacity-40"></i> {t.nav.pms}
                </button>
                <button onClick={() => setPage('customization')} className="flex items-center w-full text-left px-6 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-red-600 font-bold transition-colors">
                  <i className="fas fa-store w-5 mr-3 opacity-40"></i> {t.nav.customization}
                </button>
                <button onClick={() => setPage('creative')} className="flex items-center w-full text-left px-6 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-red-600 font-bold transition-colors">
                  <i className="fas fa-palette w-5 mr-3 opacity-40"></i> {t.nav.creative}
                </button>
              </div>
            </div>
            <button className="text-xs uppercase tracking-widest font-extrabold text-slate-500 hover:text-slate-900 transition-all">
              {t.nav.solutions}
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <button 
              onClick={cycleLanguage}
              className="text-[10px] font-black px-2 py-1 border border-slate-200 rounded text-slate-500 hover:border-red-600 hover:text-red-600 transition-all min-w-[40px] text-center"
            >
              {getLangLabel()}
            </button>
            <button 
              onClick={() => setPage('login')}
              className={`text-sm font-bold transition-all ${currentPage === 'login' ? 'text-red-600' : 'text-slate-700 hover:text-red-600'}`}
            >
              {t.nav.login}
            </button>
            <button 
              onClick={() => setPage('register')}
              className="bg-red-600 text-white text-[13px] px-8 py-3.5 rounded font-black uppercase tracking-wider hover:bg-red-700 shadow-xl shadow-red-200 transition-all active:scale-95"
            >
              {t.nav.register}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
