
import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n';

interface BenefitsProps { lang: Language; }

const Benefits: React.FC<BenefitsProps> = ({ lang }) => {
  const t = translations[lang].personas;
  const common = translations[lang].common;

  const personas = [
    { type: 'factory', icon: 'fa-industry', ...t.factory },
    { type: 'brand', icon: 'fa-layer-group', ...t.brand },
    { type: 'designer', icon: 'fa-compass', ...t.designer },
    { type: 'retailer', icon: 'fa-shop', ...t.retailer },
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent"></div>
      <div className="hero-pattern absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mb-24">
          <span className="text-red-600 font-black text-[11px] uppercase tracking-[0.4em] mb-4 block">Tailored for Success</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1px bg-slate-200">
          {personas.map((card, idx) => (
            <div key={idx} className="bg-white p-12 hover:bg-slate-50 transition-colors group">
              <div className="flex items-center mb-10">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white mr-6 group-hover:bg-red-600 transition-colors">
                  <i className={`fas ${card.icon}`}></i>
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{card.name}</h3>
              </div>
              
              <ul className="space-y-6 mb-12">
                {card.points.map((point: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <i className="fas fa-check text-red-600 text-xs mt-1.5 mr-4"></i>
                    <p className="text-slate-600 leading-relaxed font-bold text-[15px]">{point}</p>
                  </li>
                ))}
              </ul>
              
              <div className="pt-8 border-t border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">{common.solveProblems}</p>
                <div className="flex items-center text-slate-900 font-extrabold text-sm">
                   <span className="w-8 h-px bg-red-600 mr-3"></span>
                   {card.solves}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
