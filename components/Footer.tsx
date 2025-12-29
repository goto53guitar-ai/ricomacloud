
import React from 'react';
import { Language } from '../types';

const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <footer className="bg-slate-900 py-24 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-black tracking-tighter mb-8 block">RICOMA<span className="text-red-600">CLOUD</span></span>
            <p className="text-slate-400 text-[15px] font-medium leading-relaxed pr-6">
              {lang === 'zh' 
                ? '致力于为全球刺绣企业提供最前沿的数字化解决方案。' 
                : 'Empowering the world\'s embroidery businesses with cutting-edge digital solutions.'}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-slate-500">{lang === 'zh' ? '核心产品' : 'SOLUTIONS'}</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li><a href="#" className="hover:text-red-600 transition-colors">{lang === 'zh' ? '生产管理系统 (PMS)' : 'Production Mgmt'}</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">{lang === 'zh' ? '个性化定制系统' : 'Store Customizer'}</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">{lang === 'zh' ? '在线设计空间' : 'Creative Studio'}</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">{lang === 'zh' ? '刺绣数字化服务' : 'Digitizing Pro'}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-slate-500">{lang === 'zh' ? '关于公司' : 'COMPANY'}</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li><a href="#" className="hover:text-red-600 transition-colors">{lang === 'zh' ? '关于 Ricoma' : 'About Ricoma'}</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">{lang === 'zh' ? '全球据点' : 'Global Offices'}</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">{lang === 'zh' ? '加入我们' : 'Careers'}</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">{lang === 'zh' ? '媒体中心' : 'Newsroom'}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-slate-500">{lang === 'zh' ? '联系我们' : 'GET IN TOUCH'}</h4>
            <div className="flex space-x-6 mb-10">
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-xl"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-xl"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-xl"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="text-[11px] text-slate-500 font-black tracking-widest">© 2024 RICOMA INTERNATIONAL CORP.</p>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex space-x-8 text-[11px] font-black uppercase tracking-widest text-slate-600">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
             <a href="#" className="hover:text-white">Cookie Settings</a>
           </div>
           <div className="flex items-center space-x-2 text-[10px] font-black text-slate-500">
             <i className="fas fa-globe"></i>
             <span>HEADQUARTERED IN MIAMI, FL</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
