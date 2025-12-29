
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../i18n';

interface HeroCarouselProps {
  lang: Language;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ lang }) => {
  const [active, setActive] = useState(0);
  const t = translations[lang].hero;

  const slides = [
    {
      title: t.title1,
      subtitle: t.sub1,
      // Reflected: Industrial Multi-head Machine (matching user image 1)
      img: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=2018&auto=format&fit=crop'
    },
    {
      title: t.title2,
      subtitle: t.sub2,
      // Reflected: Single-head Professional Machine (matching user image 2 & 4)
      img: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop'
    },
    {
      title: t.title3,
      subtitle: t.sub3,
      // Reflected: High-quality finished product (matching user image 3 - Cap detail)
      img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-slate-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === active ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
        >
          <div className="absolute inset-0 bg-slate-900/60 z-10 backdrop-brightness-75"></div>
          <img src={slide.img} alt="Professional Embroidery Business" className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">
            <div className={`transition-all duration-1000 delay-200 transform ${index === active ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-600 text-white text-[10px] font-black tracking-[0.2em] uppercase rounded mb-8">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                <span>Ricoma Professional Series</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] text-balance">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-100 mb-12 font-medium max-w-3xl leading-relaxed mx-auto opacity-90">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <button className="w-full sm:w-auto bg-red-600 text-white px-12 py-5 rounded text-sm font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-red-600/20 active:scale-95">
                  {translations[lang].common.getStarted}
                </button>
                <button className="w-full sm:w-auto bg-white/10 border border-white/20 text-white px-12 py-5 rounded text-sm font-black uppercase tracking-widest hover:bg-white/20 transition-all backdrop-blur-md">
                  {translations[lang].common.learnMore}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Progress indicators at bottom */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-12">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="group relative py-4"
          >
            <div className={`h-[2px] w-16 transition-all duration-500 ${i === active ? 'bg-red-600' : 'bg-white/30 hover:bg-white/60'}`} />
            <span className={`absolute top-0 left-0 text-[10px] font-bold ${i === active ? 'text-red-600' : 'text-white/40'} tracking-widest`}>0{i+1}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
