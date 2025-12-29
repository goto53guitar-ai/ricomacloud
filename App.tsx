
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ProductCards from './components/ProductCards';
import Benefits from './components/Benefits';
import ProductDetailPage from './components/ProductDetailPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import { Language, Page } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const getTranslated = (zh: string, en: string, es: string) => {
    if (lang === 'zh') return zh;
    if (lang === 'es') return es;
    return en;
  };

  // The Auth pages are full-screen experiences and should not show the standard Nav/Footer
  if (page === 'register') {
    return <RegisterPage lang={lang} setPage={setPage} />;
  }

  if (page === 'login') {
    return <LoginPage lang={lang} setPage={setPage} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} currentPage={page} setPage={setPage} />
      
      <main>
        {page === 'home' ? (
          <>
            <HeroCarousel lang={lang} />
            
            {/* Professional Trust Bar */}
            <div className="py-16 bg-slate-900 border-b border-white/5">
               <div className="max-w-7xl mx-auto px-6 text-center">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em] mb-12">The World's Leading Embroidery Ecosystem</p>
                  <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24">
                    {['CUSTOM DESIGNS', 'GLOBAL LOGISTICS', 'SMART FACTORY', 'CLOUD SYNC', 'O2O RETAIL'].map((brand) => (
                      <span key={brand} className="text-xs font-black text-white/60 tracking-widest hover:text-white transition-colors cursor-default">
                        {brand}
                      </span>
                    ))}
                  </div>
               </div>
            </div>

            <ProductCards lang={lang} setPage={setPage} />
            
            {/* Global Reach Section */}
            <section className="py-32 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
                      className="rounded-2xl shadow-2xl grayscale" 
                      alt="Team" 
                    />
                    <div className="absolute -bottom-10 -right-10 bg-red-600 p-12 rounded-2xl text-white shadow-2xl hidden md:block">
                      <p className="text-6xl font-black mb-1">160+</p>
                      <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Countries Served</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-red-600 font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">{getTranslated('我们的愿景', 'Our Vision', 'Nuestra Visión')}</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                      {getTranslated('连接创意与生产，让刺绣从未如此简单', 'Empowering Millions to Create and Prosper', 'Empoderando a millones para crear y prosperar')}
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                      {getTranslated(
                        'Ricoma Cloud 不仅仅是一个软件平台，它是刺绣行业的数字化基础设施，旨在消除技术壁垒，激发无限可能。',
                        'Ricoma Cloud is more than a platform—it\'s the digital heartbeat of the embroidery industry, built to remove barriers globally.',
                        'Ricoma Cloud es más que una plataforma: es el corazón digital de la industria del bordado, diseñado para eliminar barreras a nivel mundial.'
                      )}
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                       <div>
                         <h4 className="text-2xl font-black text-slate-900 mb-2">2.5M+</h4>
                         <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Designs Managed</p>
                       </div>
                       <div>
                         <h4 className="text-2xl font-black text-slate-900 mb-2">50K+</h4>
                         <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Connected Devices</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* High Impact CTA */}
            <section className="py-32 bg-slate-950 relative overflow-hidden">
               <div className="hero-pattern absolute inset-0 opacity-5"></div>
               <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
                  <div className="max-w-4xl mx-auto">
                      <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-none">
                        {getTranslated('开启您的数字化时代', 'UPGRADE TO THE FUTURE', 'MEJORE HACIA EL FUTURO')}
                      </h2>
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <button 
                          onClick={() => setPage('register')}
                          className="w-full sm:w-auto bg-red-600 text-white px-14 py-6 rounded text-sm font-black uppercase tracking-[0.2em] hover:bg-white hover:text-slate-950 transition-all shadow-2xl shadow-red-600/20"
                        >
                          {getTranslated('立即开始', 'Start Now', 'Comenzar Ahora')}
                        </button>
                        <button className="w-full sm:w-auto border-2 border-white/20 text-white px-14 py-6 rounded text-sm font-black uppercase tracking-[0.2em] hover:border-white transition-all">
                          {getTranslated('预约演示', 'Request Demo', 'Solicitar Demo')}
                        </button>
                      </div>
                  </div>
               </div>
            </section>

            <Benefits lang={lang} />
          </>
        ) : (
          <ProductDetailPage lang={lang} type={page as Exclude<Page, 'home' | 'register' | 'login'>} />
        )}
      </main>

      <Footer lang={lang} />
      
      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-red-600 text-white rounded-lg shadow-2xl flex items-center justify-center text-xl hover:bg-slate-900 transition-all z-40 group">
        <i className="fas fa-headset group-hover:scale-110 transition-transform"></i>
      </button>
    </div>
  );
};

export default App;
