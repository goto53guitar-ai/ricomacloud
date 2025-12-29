
import React, { useState } from 'react';
import { Language, Page } from '../types';
import { translations } from '../i18n';

interface LoginPageProps {
  lang: Language;
  setPage: (page: Page) => void;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ lang, setPage }) => {
  const t = translations[lang].auth;
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.email) {
      newErrors.email = lang === 'zh' ? '请输入邮箱地址' : 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = lang === 'zh' ? '请输入有效的邮箱格式' : 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = lang === 'zh' ? '请输入密码' : 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        alert(lang === 'zh' ? '登录成功！' : 'Login successful!');
        setIsSubmitting(false);
        setPage('home');
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="flex min-h-screen bg-white overflow-hidden relative">
      <button 
        onClick={() => setPage('home')}
        className="absolute top-8 left-8 z-50 flex items-center space-x-2 text-slate-900 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-100 shadow-sm hover:bg-slate-900 hover:text-white transition-all group"
      >
        <i className="fas fa-arrow-left text-xs group-hover:-translate-x-1 transition-transform"></i>
        <span className="text-[10px] font-black uppercase tracking-widest">{lang === 'zh' ? '返回首页' : 'Home'}</span>
      </button>

      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bbda38a5f85d?q=80&w=2070&auto=format&fit=crop" 
          alt="Ricoma Professional Setup" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent flex flex-col justify-end p-20">
          <div className="max-w-md animate-fade-in">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-black tracking-[0.3em] uppercase rounded mb-6">
              Empowering Business
            </span>
            <h2 className="text-4xl font-black text-white mb-4 tracking-tighter leading-tight">
              {lang === 'zh' ? '数字化您的刺绣工作室' : 'Digitize Your Embroidery Studio.'}
            </h2>
            <p className="text-slate-200 font-medium text-lg leading-relaxed opacity-90">
              {lang === 'zh' ? '通过 Ricoma Cloud，随时随地掌控生产进度、管理花版与订单。' : 'Monitor production, manage designs and orders anywhere, anytime with Ricoma Cloud.'}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white relative overflow-y-auto">
        <div className="max-w-md w-full animate-fade-in">
          <div className="mb-12">
            <div className="mb-8 cursor-pointer inline-block" onClick={() => setPage('home')}>
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                RICOMA<span className="text-red-600">CLOUD</span>
              </span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{t.loginTitle}</h1>
            <p className="text-slate-500 font-medium">{t.loginSub}</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">{t.emailLabel}</label>
              <input 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full px-5 py-4 bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-100'} rounded-xl focus:outline-none focus:border-red-600 focus:bg-white transition-all font-medium text-slate-900`} 
              />
              {errors.email && <p className="text-red-500 text-[10px] mt-1 font-bold uppercase tracking-tight">{errors.email}</p>}
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400">{t.passwordLabel}</label>
                <button type="button" className="text-[10px] font-black text-red-600 uppercase tracking-widest hover:underline">{t.forgotPassword}</button>
              </div>
              <input 
                name="password"
                type="password" 
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-5 py-4 bg-slate-50 border ${errors.password ? 'border-red-500' : 'border-slate-100'} rounded-xl focus:outline-none focus:border-red-600 focus:bg-white transition-all font-medium`} 
              />
              {errors.password && <p className="text-red-500 text-[10px] mt-1 font-bold uppercase tracking-tight">{errors.password}</p>}
            </div>

            <div className="flex items-center space-x-3">
              <input 
                name="rememberMe"
                type="checkbox" 
                id="remember" 
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 accent-red-600 cursor-pointer" 
              />
              <label htmlFor="remember" className="text-xs text-slate-500 font-bold cursor-pointer select-none">
                {t.rememberMe}
              </label>
            </div>

            <button 
              disabled={isSubmitting}
              className={`w-full ${isSubmitting ? 'bg-slate-400' : 'bg-red-600 hover:bg-slate-900'} text-white py-5 rounded-xl text-sm font-black uppercase tracking-widest shadow-xl shadow-red-200 transition-all transform active:scale-95 flex justify-center items-center space-x-2`}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-circle-notch animate-spin"></i>
                  <span>{lang === 'zh' ? '处理中...' : 'Processing...'}</span>
                </>
              ) : (
                <span>{t.loginBtn}</span>
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-50 text-center">
            <p className="text-sm font-medium text-slate-500">
              {t.noAccount} <button onClick={() => setPage('register')} className="text-red-600 font-black hover:underline ml-1">{t.registerLink}</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
