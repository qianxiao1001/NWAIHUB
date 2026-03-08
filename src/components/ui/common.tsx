import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-blue-700 text-white hover:bg-blue-800 border border-blue-700 shadow-[0_6px_20px_-16px_rgba(30,64,175,0.9)] hover:shadow-[0_12px_24px_-18px_rgba(30,64,175,0.85)]',
      secondary: 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-[0_6px_14px_-14px_rgba(15,23,42,0.5)]',
      outline: 'bg-white/90 border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-300 hover:text-blue-700',
      ghost: 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs font-medium rounded-md',
      md: 'px-4.5 py-2.5 text-sm font-medium rounded-lg',
      lg: 'px-6.5 py-3 text-sm font-semibold rounded-xl',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1.5 }}
        whileTap={{ y: 0 }}
        className={cn(
          'inline-flex items-center justify-center transition-all duration-[220ms] focus:outline-none focus:ring-2 focus:ring-blue-500/15 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export const Card = ({ className, children, hoverEffect = true, ...props }: React.HTMLAttributes<HTMLDivElement> & { hoverEffect?: boolean }) => (
  <div className={cn(
    "glass-card rounded-xl p-5",
    hoverEffect && "hover:-translate-y-0.5",
    className
  )} {...props}>
    {children}
  </div>
);

export const Badge = ({ 
  className, 
  children, 
  variant = 'blue',
  interactive = false,
  ...props
}: { 
  className?: string; 
  children: React.ReactNode; 
  variant?: 'blue' | 'purple' | 'green' | 'gray' | 'outline' | 'dark';
  interactive?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>) => {
  const variants = {
    blue: 'bg-blue-50/80 text-blue-700 border-blue-100 hover:bg-blue-100/70 hover:border-blue-200 hover:text-blue-800',
    purple: 'bg-violet-50/70 text-violet-700 border-violet-100 hover:bg-violet-100/70 hover:border-violet-200 hover:text-violet-800',
    green: 'bg-emerald-50/75 text-emerald-700 border-emerald-100 hover:bg-emerald-100/70 hover:border-emerald-200 hover:text-emerald-800',
    gray: 'bg-slate-100/85 text-slate-600 border-slate-200 hover:bg-slate-200/80 hover:border-slate-300 hover:text-slate-800',
    outline: 'bg-transparent border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/30',
    dark: 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 hover:text-white',
  };
  
  return (
    <span className={cn(
      "inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium border transition-all duration-[200ms] ease-out select-none",
      interactive ? "cursor-pointer hover:-translate-y-0.5 hover:shadow-sm" : "cursor-default hover:-translate-y-0.5",
      variants[variant],
      className
    )} {...props}>
      {children}
    </span>
  );
};

export const Section = ({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) => (
  <section id={id} className={cn("ui-reveal py-12 md:py-16 relative overflow-hidden", className)}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {children}
    </div>
  </section>
);

export const SectionHeader = ({ title, subtitle, align = 'center' }: { title: string; subtitle?: string; align?: 'left' | 'center' }) => (
  <div className={cn("ui-reveal-group mb-8 md:mb-10", align === 'center' ? 'text-center' : 'text-left')}>
    <h2 className="ui-reveal-item text-[28px] md:text-[34px] font-bold text-slate-900 mb-3 tracking-tight">{title}</h2>
    {subtitle && <p className="ui-reveal-item text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);
