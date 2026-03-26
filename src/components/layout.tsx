import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/common';
import { Menu, X, ChevronRight, ChevronUp, MapPin, Phone, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { name: '首页', path: '/' },
  { name: '模型广场', path: '/models' },
  { name: '算力资源', path: '/compute' },
  { name: '智能体市场', path: '/apps' },
  { name: '政策支持', path: '/policy' },
  { name: '培训认证', path: '/training' },
  { name: '活动社群', path: '/community' },
];
const BASE_URL = import.meta.env.BASE_URL;
const BRAND_LOGO = `${BASE_URL}Logos/krstar-long-logo.png`;
const RUANJIMU_LOGO = `${BASE_URL}Logos/软积木logo.png`;
const KRSTAR_LOGO = `${BASE_URL}Logos/krstar-long-logo.png`;

const Icon = ({ name, className = '' }: { name: string; className?: string }) => (
  <span className={cn('material-symbols-outlined', className)}>{name}</span>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Header — matches reference: bg-white/80 with backdrop-blur-md */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/82 backdrop-blur-md shadow-[0_10px_24px_-22px_rgba(0,61,166,0.12)] border-b border-[var(--color-outline-variant)]/30 h-[52px]'
            : 'bg-white/80 backdrop-blur-md border-b border-[var(--color-outline-variant)]/20 h-[56px]'
        )}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 h-full">
          <div className="h-full flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center mobile-touch-feedback">
              <img src={BRAND_LOGO} alt="氪星创服 Logo" className="h-8 w-auto object-contain" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'text-sm font-medium transition-all duration-200 relative py-1.5 ui-link-underline ui-focus-ring',
                    location.pathname === item.path
                      ? 'text-[var(--color-primary)] font-semibold'
                      : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]'
                  )}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-primary)] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-outline)] text-base" />
                <input
                  type="text"
                  placeholder="搜索资源..."
                  className="pl-10 pr-4 py-1.5 bg-[var(--color-surface-container-highest)] border-none rounded-full text-sm w-44 focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)]"
                />
              </div>
              <Button className="h-9 px-5 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-container)] shadow-md font-bold rounded-xl text-sm active:scale-95 border-0">
                登录 / 注册
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-low)] rounded-md mobile-touch-feedback ui-focus-ring"
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

      {/* Mobile Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-[280px] bg-white/96 backdrop-blur-xl shadow-2xl z-50 lg:hidden transform transition-transform duration-300 border-l border-[var(--color-outline-variant)]/30',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-[var(--color-outline-variant)]/30">
            <div className="flex items-center">
              <img src={BRAND_LOGO} alt="氪星创服 Logo" className="h-7 w-auto object-contain" />
              <span className="ml-2 text-sm font-semibold text-[var(--color-on-surface)]">氪星创服</span>
            </div>
            <button
              className="p-1.5 text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-low)] rounded-md mobile-touch-feedback"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-colors mobile-touch-feedback ui-hover-lift ui-focus-ring',
                  location.pathname === item.path
                    ? 'bg-[var(--color-primary)]/8 text-[var(--color-primary)] font-semibold border-l-2 border-[var(--color-primary)] pl-[10px]'
                    : 'text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-low)]'
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <ChevronRight className="w-4 h-4 ml-auto text-[var(--color-primary)]" />
                )}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-[var(--color-outline-variant)]/30 space-y-2">
            <Button
              variant="secondary"
              className="w-full justify-center border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)] mobile-button ui-button-pop ui-focus-ring"
            >
              企业入驻
            </Button>
            <Button
              className="w-full justify-center bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-container)] mobile-button ui-button-pop ui-focus-ring border-0"
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
    <footer className="bg-[var(--color-surface-container-low)] mt-20 border-t border-[var(--color-outline-variant)]/30">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand column */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <img src={KRSTAR_LOGO} alt="氪星创服" className="h-9 w-auto object-contain opacity-90" />
            </div>
            <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed max-w-xs">
              立足中关村，连接全球AI创新力量。打造国内领先的人工智能全要素资源服务平台。
            </p>
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-[var(--color-outline)] hover:text-[var(--color-primary)] transition-colors cursor-pointer text-xl">hub</span>
              <span className="material-symbols-outlined text-[var(--color-outline)] hover:text-[var(--color-primary)] transition-colors cursor-pointer text-xl">language</span>
              <span className="material-symbols-outlined text-[var(--color-outline)] hover:text-[var(--color-primary)] transition-colors cursor-pointer text-xl">share</span>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold text-[var(--color-on-surface)] mb-5 text-sm border-l-2 border-[var(--color-primary)] pl-2.5">关于我们</h4>
            <ul className="space-y-3 text-sm">
              {['社区简介', '专家团队', '合作伙伴', '联系我们'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold text-[var(--color-on-surface)] mb-5 text-sm border-l-2 border-[var(--color-primary)] pl-2.5">帮助中心</h4>
            <ul className="space-y-3 text-sm">
              {['文档中心', '企业入驻', '服务条款', '隐私政策'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QR Code */}
          <div>
            <h4 className="font-bold text-[var(--color-on-surface)] mb-5 text-sm border-l-2 border-[var(--color-primary)] pl-2.5">关注我们</h4>
            <div className="bg-[var(--color-surface-container-lowest)] p-4 rounded-2xl border border-[var(--color-outline-variant)]/20 w-fit">
              <div
                className="w-28 h-28 rounded-xl flex items-center justify-center overflow-hidden"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--color-surface-container-low) 25%, transparent 25%), linear-gradient(225deg, var(--color-surface-container-low) 25%, transparent 25%), linear-gradient(45deg, var(--color-surface-container-low) 25%, transparent 25%), linear-gradient(315deg, var(--color-surface-container-low) 25%, var(--color-surface-container) 25%)',
                  backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
                  backgroundSize: '20px 20px',
                  backgroundRepeat: 'repeat',
                }}
              >
                <span className="material-symbols-outlined text-4xl text-[var(--color-outline-variant)]">qr_code_2</span>
              </div>
              <p className="text-center text-[10px] text-[var(--color-on-surface-variant)] mt-2">扫码关注微信公众号</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--color-outline-variant)]/30 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-[var(--color-on-surface-variant)]">
          <p>© 2026 中关村AI北纬社区OPC技术服务平台 版权所有 | 京ICP备12345678号</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">京公网安备1101080202xxxx号</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">法律声明</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [showBackTop, setShowBackTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pageEntering, setPageEntering] = useState(false);

  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('main section, main .ui-reveal, main .ui-reveal-group'));
    if (!revealTargets.length) return;

    revealTargets.forEach((target) => {
      if (!target.classList.contains('ui-reveal') && target.tagName.toLowerCase() === 'section') {
        target.classList.add('ui-reveal');
      }
    });

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
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) { setScrollProgress(0); return; }
      const progress = Math.min(100, Math.max(0, (window.scrollY / scrollHeight) * 100));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setPageEntering(true);
    const timer = window.setTimeout(() => setPageEntering(false), 520);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-on-surface)]">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-container)] to-indigo-500 shadow-[0_0_12px_rgba(0,61,166,0.5)] origin-left transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Header />

      <main className={cn('flex-grow pt-[56px]', pageEntering && 'ui-page-enter')}>
        {children}
      </main>

      <Footer />

      {showBackTop && (
        <button
          className="fixed bottom-5 right-5 z-40 w-10 h-10 rounded-full bg-[var(--color-surface-container-lowest)] text-[var(--color-on-surface)] border border-[var(--color-outline-variant)] flex items-center justify-center shadow-lg hover:shadow-xl hover:border-[var(--color-primary)]/30 transition-all mobile-touch-feedback ui-button-pop ui-focus-ring"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="返回顶部"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
