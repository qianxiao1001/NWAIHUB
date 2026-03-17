import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/common';
import { Menu, X, ChevronRight, ChevronUp, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { name: '首页', path: '/' },
  { name: '模型广场', path: '/models' },
  { name: '算力资源', path: '/compute' },
  { name: '数据资源', path: '/datasets' },
  { name: '智能体市场', path: '/apps' },
  { name: '政策支持', path: '/policy' },
  { name: '培训认证', path: '/training' },
  { name: '活动社群', path: '/community' },
];
const BASE_URL = import.meta.env.BASE_URL;
const NORTH_LATITUDE_LOGO = `${BASE_URL}Logos/微信图片_20260308232726_966_99.jpg`;
const NORTH_LATITUDE_WHITE_LOGO = `${BASE_URL}Logos/北纬白色.png`;
const RUANJIMU_LOGO = `${BASE_URL}Logos/图片1.png`;
const CAICT_LOGO = `${BASE_URL}Logos/20260307072409-c0c263379b8032a24285272397b28a05-18c9a7.png`;

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white/95 backdrop-blur",
          isScrolled 
            ? "border-slate-200 shadow-sm h-[46px]" 
            : "border-slate-100 h-[50px]"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full flex items-center justify-between">
            <div className="flex items-center mobile-touch-feedback">
              <img src={NORTH_LATITUDE_LOGO} alt="中关村AI北纬社区 Logo" className="h-7 w-auto object-contain" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-[13px] font-medium transition-all duration-200 relative py-1.5",
                    location.pathname === item.path
                      ? "text-blue-700 font-semibold"
                      : "text-slate-600 hover:text-blue-600"
                  )}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Action */}
            <div className="hidden lg:flex items-center">
              <Button
                variant="secondary"
                className="h-8 px-3 text-xs border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                登录与认证
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-md mobile-touch-feedback"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden mobile-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <div className="flex items-center">
              <img src={NORTH_LATITUDE_LOGO} alt="中关村AI北纬社区 Logo" className="h-6 w-auto object-contain" />
              <span className="ml-2 text-sm font-semibold text-slate-900">中关村AI北纬社区</span>
            </div>
            <button
              className="p-1.5 text-slate-600 hover:bg-slate-50 rounded-md mobile-touch-feedback"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors mobile-touch-feedback",
                  location.pathname === item.path 
                    ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600 pl-4" 
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <ChevronRight className="w-4 h-4 ml-auto text-blue-600" />
                )}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="p-4 border-t border-slate-200 space-y-2">
            <Button 
              variant="secondary" 
              className="w-full justify-center border-slate-200 mobile-button"
              onClick={() => setMobileMenuOpen(false)}
            >
              企业入驻
            </Button>
            <Button 
              variant="primary" 
              className="w-full justify-center bg-blue-700 hover:bg-blue-800 mobile-button"
              onClick={() => setMobileMenuOpen(false)}
            >
              企业认证
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-5 md:py-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 mb-4 md:mb-5">
          <div className="col-span-1 md:col-span-4">
            <div className="mb-3 md:mb-4">
              <img src={NORTH_LATITUDE_WHITE_LOGO} alt="中关村AI北纬社区 Logo（白）" className="h-7 md:h-8 w-auto object-contain" />
            </div>
            <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed mb-3 md:mb-5 max-w-sm">
              围绕AI创业与产业生态建设的综合服务平台，提供模型、算力、数据、政策等全方位支持，助力中国AI产业蓬勃发展。
            </p>
            <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-2.5 md:p-3 max-w-sm">
              <p className="text-[10px] text-slate-500 font-medium mb-1.5">平台战略合作伙伴</p>
              <div className="flex items-center gap-4 px-1">
                <img src={CAICT_LOGO} alt="中国信通院 Logo" className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                <img src={RUANJIMU_LOGO} alt="软积木 Logo" className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          <div className="hidden md:block col-span-1 md:col-span-2 md:col-start-6">
            <h3 className="text-white font-semibold mb-3 text-xs tracking-wide border-l-2 border-blue-600 pl-2.5">平台服务</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/models" className="hover:text-white transition-colors duration-200">模型广场</Link></li>
              <li><Link to="/compute" className="hover:text-white transition-colors duration-200">算力资源</Link></li>
              <li><Link to="/datasets" className="hover:text-white transition-colors duration-200">数据资源</Link></li>
              <li><Link to="/apps" className="hover:text-white transition-colors duration-200">智能体市场</Link></li>
            </ul>
          </div>

          <div className="hidden md:block col-span-1 md:col-span-2">
            <h3 className="text-white font-semibold mb-3 text-xs tracking-wide border-l-2 border-blue-600 pl-2.5">支持与政策</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/policy" className="hover:text-white transition-colors duration-200">政策支持</Link></li>
              <li><Link to="/training" className="hover:text-white transition-colors duration-200">培训认证</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors duration-200">活动社群</Link></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">企业入驻</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">文档中心</a></li>
            </ul>
          </div>

          <div className="hidden md:block col-span-1 md:col-span-3">
            <h3 className="text-white font-semibold mb-3 text-xs tracking-wide border-l-2 border-blue-600 pl-2.5">联系我们</h3>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500 mt-0.5" />
                <span className="text-slate-400">中关村AI北纬社区</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-400">opc.krstar.com.cn</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-400">010-88888888</span>
              </li>
            </ul>
          </div>

          <div className="md:hidden space-y-1.5">
            <details className="rounded-md border border-slate-800 bg-slate-800/40">
              <summary className="list-none cursor-pointer px-3 py-2.5 text-xs font-medium text-slate-200 flex items-center justify-between">
                <span>平台服务</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </summary>
              <ul className="px-3 pb-3 space-y-2 text-[11px] text-slate-400">
                <li><Link to="/models" className="hover:text-white transition-colors duration-200">模型广场</Link></li>
                <li><Link to="/compute" className="hover:text-white transition-colors duration-200">算力资源</Link></li>
                <li><Link to="/datasets" className="hover:text-white transition-colors duration-200">数据资源</Link></li>
                <li><Link to="/apps" className="hover:text-white transition-colors duration-200">智能体市场</Link></li>
              </ul>
            </details>
            <details className="rounded-md border border-slate-800 bg-slate-800/40">
              <summary className="list-none cursor-pointer px-3 py-2.5 text-xs font-medium text-slate-200 flex items-center justify-between">
                <span>支持与政策</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </summary>
              <ul className="px-3 pb-3 space-y-2 text-[11px] text-slate-400">
                <li><Link to="/policy" className="hover:text-white transition-colors duration-200">政策支持</Link></li>
                <li><Link to="/training" className="hover:text-white transition-colors duration-200">培训认证</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors duration-200">活动社群</Link></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">企业入驻</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">文档中心</a></li>
              </ul>
            </details>
            <details className="rounded-md border border-slate-800 bg-slate-800/40">
              <summary className="list-none cursor-pointer px-3 py-2.5 text-xs font-medium text-slate-200 flex items-center justify-between">
                <span>联系我们</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </summary>
              <ul className="px-3 pb-3 space-y-2 text-[11px] text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 mt-0.5" />
                  <span>中关村AI北纬社区</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>opc.krstar.com.cn</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>010-88888888</span>
                </li>
              </ul>
            </details>
          </div>
        </div>
        
        <div className="pt-4 md:pt-5 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-2.5 md:gap-3 text-[10px] text-slate-500">
          <p>© 2026 中关村AI北纬社区OPC技术服务平台 版权所有</p>
          <div className="flex gap-4 md:gap-5 flex-wrap justify-center">
            <a href="#" className="hover:text-slate-300 transition-colors duration-200">隐私政策</a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-200">服务条款</a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-200">京ICP备12345678号</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('main section, main .ui-reveal, main .ui-reveal-group'));
    if (!revealTargets.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [children]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 420);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-grow pt-[52px]">
        {children}
      </main>
      <Footer />
      {showBackTop && (
        <button
          className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-40 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:bg-slate-800 transition-colors mobile-touch-feedback"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="返回顶部"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
