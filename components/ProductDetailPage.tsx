
import React from 'react';
import { Language, Page } from '../types';
import { translations } from '../i18n';

interface ProductDetailPageProps {
  lang: Language;
  type: Exclude<Page, 'home'>;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ lang, type }) => {
  const productData = translations[lang].products[type === 'pms' ? 'pms' : type === 'customization' ? 'custom' : 'creative'];
  const isCustom = type === 'customization';
  
  // Use rich details if they exist in the i18n data
  const hasRichDetails = !!productData.details;

  // Refreshed stable Unsplash IDs for high-end look
  const bannerImages = {
    pms: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=2070&auto=format&fit=crop', 
    customization: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop', 
    creative: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop', 
  };

  const featureImages = {
    pms: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop', 
    customization: 'https://images.unsplash.com/photo-1534452285072-c5cee9e5e951?q=80&w=2070&auto=format&fit=crop', 
    creative: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop', 
  };

  const getTranslated = (zh: string, en: string, es: string) => {
    if (lang === 'zh') return zh;
    if (lang === 'es') return es;
    return en;
  };

  const scenarios = isCustom ? [
    { 
      title: getTranslated('服装连锁品牌', 'Apparel Brands', 'Marcas de Ropa'), 
      desc: getTranslated('提供“定制专区”，提升品牌形象', 'Bespoke zones for brand elevation', 'Zonas personalizadas para elevar la marca'), 
      img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800' 
    },
    { 
      title: getTranslated('运动品牌店', 'Sports Stores', 'Tiendas de Deportes'), 
      desc: getTranslated('球衣、帽子、运动包一站式定制', 'One-stop jerseys & bags customization', 'Personalización de camisetas y bolsos en un solo lugar'), 
      img: 'https://images.unsplash.com/photo-1534452285072-c5cee9e5e951?q=80&w=800' 
    },
    { 
      title: getTranslated('礼品店', 'Gift Shops', 'Tiendas de Regalos'), 
      desc: getTranslated('满足企业定制 & 个性礼物需求', 'Corporate & personalized gift solutions', 'Soluciones de regalos corporativos y personalizados'), 
      img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800' 
    },
    { 
      title: getTranslated('个体定制门店', 'Boutique Shops', 'Tiendas Boutique'), 
      desc: getTranslated('一机多能，小店也能做大生意', 'Big business potential for small shops', 'Gran potencial de negocio para tiendas pequeñas'), 
      img: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800' 
    },
  ] : [];

  return (
    <div className="bg-white">
      {/* High-Impact Full-Screen Banner */}
      <div className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={bannerImages[type]} 
            className="w-full h-full object-cover opacity-60 scale-105 animate-fade-in" 
            alt="Product Banner" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center items-start">
          <div className="max-w-4xl animate-fade-in">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-black tracking-[0.3em] uppercase rounded mb-8">
              {productData.name}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] text-balance">
              {productData.bannerTitle}
            </h1>
            <p className="text-xl md:text-3xl text-slate-200 max-w-3xl font-medium leading-relaxed opacity-90">
              {productData.bannerSub}
            </p>
            <div className="mt-12">
              <button className="bg-white text-slate-900 px-12 py-5 rounded text-sm font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-2xl active:scale-95">
                {getTranslated('开启数字化旅程', 'Start Your Journey', 'Inicie su Viaje Digital')}
              </button>
            </div>
          </div>
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <div className="w-px h-24 bg-gradient-to-b from-white/60 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Alternating image+text showcase */}
      {hasRichDetails ? (
        <section className="bg-white overflow-hidden">
          {productData.details.map((detail: any, index: number) => (
            <div key={index} className={`py-24 md:py-40 ${index % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}>
              <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                    <span className="text-red-600 font-black text-[11px] uppercase tracking-[0.4em] mb-4 block">Design Intelligence 0{index + 1}</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                      {detail.title}
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-xl">
                      {detail.desc}
                    </p>
                    <div className="flex items-center space-x-6">
                      <div className="h-px w-12 bg-red-600"></div>
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">Ricoma Creative Suite</span>
                    </div>
                  </div>
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="absolute -inset-4 bg-slate-200 rounded-[2rem] -rotate-2 z-0 opacity-40"></div>
                    <img 
                      src={detail.img} 
                      className="relative z-10 w-full h-[400px] md:h-[600px] object-cover rounded-[1.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]" 
                      alt={detail.title} 
                    />
                    <div className="absolute -bottom-6 -right-6 bg-red-600 p-8 rounded-2xl text-white shadow-2xl z-20 hidden md:block scale-75 md:scale-100">
                      <i className="fas fa-magic text-2xl mb-2"></i>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Pro Tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tighter">
                  {getTranslated('重新定义刺绣生产', 'Redefining Production Standards', 'Redefiniendo Estándares de Producción')}
                </h2>
                <div className="space-y-4">
                  {productData.features.map((f: string, i: number) => (
                    <div key={i} className="group flex items-start p-6 bg-slate-50 rounded-2xl hover:bg-slate-900 transition-all duration-300">
                      <div className="w-10 h-10 shrink-0 bg-white rounded-xl flex items-center justify-center text-red-600 shadow-sm mr-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <i className="fas fa-arrow-right text-xs"></i>
                      </div>
                      <div>
                         <span className="text-lg font-extrabold text-slate-900 group-hover:text-white transition-colors block mb-1">{f}</span>
                         <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                           {getTranslated('实现刺绣流程的深度数字化与效率倍增。', 'Enabling deep digitization and performance multiplication.', 'Permitiendo una digitalización profunda y multiplicación del rendimiento.')}
                         </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <img src={featureImages[type]} className="rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] relative z-10" alt="Feature" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Scenarios for Customization */}
      {isCustom && (
        <section className="py-32 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-20">
              <span className="text-red-600 font-black text-[11px] uppercase tracking-[0.4em] mb-4 block">Endless Possibilities</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">{getTranslated('多场景落地应用', 'Vertical Solutions', 'Soluciones Verticales')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {scenarios.map((s, idx) => (
                <div key={idx} className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
                  <div className="h-64 overflow-hidden">
                    <img src={s.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={s.title} />
                  </div>
                  <div className="p-8">
                    <h4 className="font-black text-xl mb-4 text-slate-900 tracking-tight">{s.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Advantage Grid */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
           <h2 className="text-4xl md:text-7xl font-black mb-24 tracking-tighter leading-none">
             {getTranslated('为何选择 RICOMA CLOUD?', 'THE RICOMA ADVANTAGE', 'LA VENTAJA RICOMA')}
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-[40px] overflow-hidden">
              <div className="p-16 border-b md:border-b-0 md:border-r border-white/10 bg-white/5 hover:bg-red-600 transition-all duration-500 group">
                <i className="fas fa-server text-3xl mb-10 text-red-600 group-hover:text-white"></i>
                <h4 className="text-2xl font-black mb-6 tracking-tight">{getTranslated('无需服务器', 'No Infrastructure', 'Sin Infraestructura')}</h4>
                <p className="text-slate-400 group-hover:text-white/80 leading-relaxed font-medium">
                  {getTranslated('零硬件投入，SaaS 订阅即开即用，我们负责维护与安全更新。', 'Zero hardware overhead. SaaS subscription for instant deployment.', 'Sin gastos de hardware. Suscripción SaaS para implementación instantánea.')}
                </p>
              </div>
              <div className="p-16 border-b md:border-b-0 md:border-r border-white/10 bg-white/5 hover:bg-red-600 transition-all duration-500 group">
                <i className="fas fa-bolt text-3xl mb-10 text-red-600 group-hover:text-white"></i>
                <h4 className="text-2xl font-black mb-6 tracking-tight">{getTranslated('实时互联', 'Real-time Sync', 'Sincronización en Tiempo Real')}</h4>
                <p className="text-slate-400 group-hover:text-white/80 leading-relaxed font-medium">
                  {getTranslated('所有设备在线，状态、针数、效率数据实时同步到云端。', 'Full IoT connectivity. Live machine statuses synced instantly to your dashboard.', 'Conectividad IoT completa. Estados de máquina sincronizados al instante.')}
                </p>
              </div>
              <div className="p-16 bg-white/5 hover:bg-red-600 transition-all duration-500 group">
                <i className="fas fa-users text-3xl mb-10 text-red-600 group-hover:text-white"></i>
                <h4 className="text-2xl font-black mb-6 tracking-tight">{getTranslated('高效协同', 'Seamless Collab', 'Colaboración Fluida')}</h4>
                <p className="text-slate-400 group-hover:text-white/80 leading-relaxed font-medium">
                  {getTranslated('打破线上线下的壁垒，让门店、设计、工厂无缝协作。', 'Bridge the gap between design and production. Align your floor effortlessly.', 'Cierre la brecha entre el diseño y la producción de forma sencilla.')}
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">
            {getTranslated('准备好升级您的刺绣业务了吗？', 'Ready to upgrade your embroidery business?', '¿Listo para mejorar su negocio de bordado?')}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-red-600 text-white px-12 py-5 rounded text-sm font-black uppercase tracking-widest hover:bg-slate-900 transition-all">
              {getTranslated('预约产品演示', 'Request a Demo', 'Solicitar una Demostración')}
            </button>
            <button className="border-2 border-slate-900 text-slate-900 px-12 py-5 rounded text-sm font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
              {getTranslated('咨询专家', 'Talk to an Expert', 'Hablar con un Experto')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
