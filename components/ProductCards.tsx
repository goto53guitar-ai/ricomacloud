
import React from 'react';
import { Language, Page } from '../types';
import { translations } from '../i18n';

interface ProductCardsProps {
  lang: Language;
  setPage: (page: Page) => void;
}

const ProductCards: React.FC<ProductCardsProps> = ({ lang, setPage }) => {
  const t = translations[lang].products;
  const common = translations[lang].common;

  const data = [
    { 
      key: 'pms' as Page,
      icon: 'fa-microchip',
      // Multi-head production (industrial scale)
      img: 'https://images.unsplash.com/photo-1558239027-33a879944062?q=80&w=800&auto=format&fit=crop',
      ...t.pms
    },
    { 
      key: 'customization' as Page,
      icon: 'fa-wand-magic-sparkles',
      // Single-head / boutique shop focus
      img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop',
      ...t.custom
    },
    { 
      key: 'creative' as Page,
      icon: 'fa-palette',
      // Artistic result focus
      img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop',
      ...t.creative
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-baseline justify-between mb-24 border-b border-slate-100 pb-12">
          <div className="max-w-2xl">
            <span className="text-red-600 font-black text-[11px] uppercase tracking-[0.4em] mb-4 block">Product Ecosystem</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
              {lang === 'zh' ? '开启全场景数字化未来' : 'Digitize Your Entire Workflow'}
            </h2>
          </div>
          <p className="text-lg text-slate-500 font-medium max-w-sm leading-relaxed">
            {lang === 'zh' 
              ? '从设备管理到在线设计，Ricoma Cloud 提供全方位的技术支撑。' 
              : 'From machine management to online design, we provide the ultimate tech stack for embroidery.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 overflow-hidden border border-slate-100 rounded-2xl shadow-2xl">
          {data.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-12 transition-all duration-700 ease-out hover:bg-slate-900 hover:text-white relative overflow-hidden transform hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(225,29,72,0.15)]"
            >
              <div className="relative z-10">
                <div className="mb-12 flex items-center justify-between">
                  <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center text-2xl text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-sm">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <span className="text-[10px] font-black text-slate-300 group-hover:text-slate-500 tracking-widest uppercase transition-colors duration-500">{item.key} Solution</span>
                </div>
                
                <h3 className="text-3xl font-black mb-4 tracking-tighter group-hover:text-white transition-all duration-500 group-hover:translate-x-1">{item.name}</h3>
                <p className="text-red-600 text-xs font-black tracking-widest uppercase mb-10 opacity-100 group-hover:text-red-400 transition-all duration-500">{item.tagline}</p>
                
                <ul className="space-y-4 mb-12">
                  {item.features.map((f: string, i: number) => (
                    <li 
                      key={i} 
                      className="flex items-center text-slate-500 font-bold text-sm group-hover:text-slate-300 transition-all duration-500 group-hover:translate-x-2"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <span className="w-1 h-1 bg-red-600 rounded-full mr-3 shrink-0 group-hover:scale-150 transition-transform"></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setPage(item.key)}
                  className="inline-flex items-center space-x-3 text-slate-900 group-hover:text-white font-black text-sm uppercase tracking-widest border-b-2 border-red-600 pb-1 hover:border-white hover:text-red-500 transition-all duration-500 group/btn"
                >
                  <span>{common.learnMore}</span>
                  <i className="fas fa-chevron-right text-[10px] group-hover:translate-x-1 group-hover/btn:translate-x-2 transition-transform"></i>
                </button>
              </div>
              
              {/* Subtle background image with scale animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-1000 ease-out pointer-events-none">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover grayscale scale-125 group-hover:scale-100 transition-transform duration-1000 ease-out" 
                  alt="Card Background" 
                />
                <div className="absolute inset-0 bg-slate-900/40"></div>
              </div>

              {/* Decorative expanding border on hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 group-hover:w-full transition-all duration-700 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
