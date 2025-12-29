
import React, { useState } from 'react';
import { Language, Page } from '../types';
import { translations } from '../i18n';

interface RegisterPageProps {
  lang: Language;
  setPage: (page: Page) => void;
}

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  agreement?: string;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ lang, setPage }) => {
  const t = translations[lang].auth;
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    agreed: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = lang === 'zh' ? '请输入邮箱地址' : 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = lang === 'zh' ? '请输入有效的邮箱格式' : 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = lang === 'zh' ? '请输入密码' : 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = lang === 'zh' ? '密码长度至少为8位' : 'Password must be at least 8 characters';
    }

    // Confirm password validation
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = lang === 'zh' ? '两次输入的密码不一致' : 'Passwords do not match';
    }

    // Agreement validation
    if (!formData.agreed) {
      newErrors.agreement = lang === 'zh' ? '请先阅读并同意服务协议' : 'Please agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        alert(lang === 'zh' ? '注册请求已发送！' : 'Registration request sent!');
        setIsSubmitting(false);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for the field being edited
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="flex min-h-screen bg-white overflow-hidden relative">
      {/* Back button */}
      <button 
        onClick={() => setPage('home')}
        className="absolute top-8 left-8 z-50 flex items-center space-x-2 text-slate-900 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-100 shadow-sm hover:bg-slate-900 hover:text-white transition-all group"
      >
        <i className="fas fa-arrow-left text-xs group-hover:-translate-x-1 transition-transform"></i>
        <span className="text-[10px] font-black uppercase tracking-widest">{lang === 'zh' ? '返回首页' : 'Home'}</span>
      </button>

      {/* Left side: Full-screen Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=2018&auto=format&fit=crop" 
          alt="Ricoma Industrial Embroidery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent flex flex-col justify-end p-20">
          <div className="max-w-md animate-fade-in">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-black tracking-[0.3em] uppercase rounded mb-6">
              Global Network
            </span>
            <h2 className="text-4xl font-black text-white mb-4 tracking-tighter leading-tight">
              {lang === 'zh' ? '智造未来，刺绣无界' : 'The Future of Embroidery is Here.'}
            </h2>
            <p className="text-slate-200 font-medium text-lg leading-relaxed opacity-90">
              {lang === 'zh' ? '加入全球数千家正在使用 Ricoma Cloud 的刺绣企业。' : 'Join thousands of embroidery businesses worldwide powered by Ricoma Cloud.'}
            </p>
          </div>
        </div>
      </div>

      {/* Right side: Registration Interface */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white relative overflow-y-auto">
        <div className="max-w-md w-full animate-fade-in">
          <div className="mb-12">
            <div className="mb-8 cursor-pointer inline-block" onClick={() => setPage('home')}>
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                RICOMA<span className="text-red-600">CLOUD</span>
              </span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{t.registerTitle}</h1>
            <p className="text-slate-500 font-medium">{t.registerSub}</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">{t.passwordLabel}</label>
                <input 
                  name="password"
                  type="password" 
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-slate-50 border ${errors.password ? 'border-red-500' : 'border-slate-100'} rounded-xl focus:outline-none focus:border-red-600 focus:bg-white transition-all font-medium`} 
                />
                {errors.password && <p className="text-red-500 text-[10px] mt-1 font-bold uppercase tracking-tight">{errors.password}</p>}
              </div>
              <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">{t.confirmPasswordLabel}</label>
                <input 
                  name="confirmPassword"
                  type="password" 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-slate-50 border ${errors.confirmPassword ? 'border-red-500' : 'border-slate-100'} rounded-xl focus:outline-none focus:border-red-600 focus:bg-white transition-all font-medium`} 
                />
                {errors.confirmPassword && <p className="text-red-500 text-[10px] mt-1 font-bold uppercase tracking-tight">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">{t.companyLabel}</label>
              <input 
                name="company"
                type="text" 
                value={formData.company}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-red-600 focus:bg-white transition-all font-medium" 
              />
            </div>

            <div>
              <div className="flex items-center space-x-3">
                <input 
                  name="agreed"
                  type="checkbox" 
                  id="agree" 
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="w-4 h-4 accent-red-600 cursor-pointer" 
                />
                <label htmlFor="agree" className="text-xs text-slate-500 font-medium leading-relaxed cursor-pointer select-none">
                  {t.agreement}
                </label>
              </div>
              {errors.agreement && <p className="text-red-500 text-[10px] mt-1 font-bold uppercase tracking-tight">{errors.agreement}</p>}
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
                <span>{t.submitBtn}</span>
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-50 text-center">
            <p className="text-sm font-medium text-slate-500">
              {t.hasAccount} <button onClick={() => setPage('login')} className="text-red-600 font-black hover:underline ml-1">{t.loginLink}</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;