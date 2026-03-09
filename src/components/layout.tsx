import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/common';
import { Menu, X, ChevronRight, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { name: '首页', path: '/' },
  { name: '模型广场', path: '/models' },
  { name: '算力资源', path: '/compute' },
  { name: '数据资源', path: '/datasets' },
  { name: '智能体市场', path: '/apps' },
  { name: '政策中心', path: '/policy' },
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white/95 backdrop-blur",
        isScrolled 
          ? "border-slate-200 shadow-sm" 
          : "border-slate-100"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[52px] flex items-center justify-between">
          <Link to="/" className="lg:hidden flex items-center">
            <img src={NORTH_LATITUDE_LOGO} alt="中关村AI北纬社区 Logo" className="h-8 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-[13px] font-medium transition-all duration-200 relative py-1 px-2 rounded-md",
                  location.pathname === item.path
                    ? "text-blue-700 font-semibold bg-blue-50/70 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-blue-700/80 after:rounded-full"
                    : "text-slate-600 hover:text-blue-700 hover:bg-blue-50/55 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-blue-300/0 hover:after:bg-blue-300/70 after:rounded-full after:transition-colors after:duration-200"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center">
            <Link to="/" className="flex items-center">
              <img src={NORTH_LATITUDE_LOGO} alt="中关村AI北纬社区 Logo" className="h-8 w-auto object-contain" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                    location.pathname === item.path 
                      ? "bg-blue-50 text-blue-700" 
                      : "text-slate-700 hover:bg-slate-50"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 mt-4">
                <Button variant="secondary" className="w-full justify-center border-slate-200">企业入驻</Button>
                <Button variant="primary" className="w-full justify-center bg-blue-700 hover:bg-blue-800">企业认证</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-4">
            <div className="mb-6">
              <img src={NORTH_LATITUDE_WHITE_LOGO} alt="中关村AI北纬社区 Logo（白）" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              围绕AI创业与产业生态建设的综合服务平台，提供模型、算力、数据、政策等全方位支持，助力中国AI产业蓬勃发展。
            </p>
            <div className="rounded-xl border border-slate-200 bg-white p-4.5 max-w-sm">
              <p className="text-xs text-slate-600 font-medium mb-2">平台战略合作伙伴</p>
              <div className="flex items-center justify-center gap-8 px-1">
                <img src={CAICT_LOGO} alt="中国信通院 Logo" className="h-10 w-auto object-contain" />
                <img src={RUANJIMU_LOGO} alt="软积木 Logo" className="h-10 w-auto object-contain" />
              </div>
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide border-l-2 border-blue-600 pl-3">平台服务</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/models" className="hover:text-white transition-colors duration-200">模型广场</Link></li>
              <li><Link to="/compute" className="hover:text-white transition-colors duration-200">算力资源</Link></li>
              <li><Link to="/datasets" className="hover:text-white transition-colors duration-200">数据资源</Link></li>
              <li><Link to="/apps" className="hover:text-white transition-colors duration-200">智能体市场</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide border-l-2 border-blue-600 pl-3">支持与政策</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/policy" className="hover:text-white transition-colors duration-200">政策中心</Link></li>
              <li><Link to="/training" className="hover:text-white transition-colors duration-200">培训认证</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors duration-200">活动社群</Link></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">企业入驻</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">文档中心</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide border-l-2 border-blue-600 pl-3">联系我们</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-500 mt-0.5" />
                <span className="text-slate-400">中关村AI北纬社区</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400">contact@opc-ai.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400">010-88888888</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 中关村AI北纬社区OPC技术服务平台 版权所有</p>
          <div className="flex gap-6">
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

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-grow pt-[52px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
