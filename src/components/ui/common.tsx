import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 border border-blue-600 shadow-sm transition-colors',
      secondary: 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:text-slate-900 shadow-sm transition-colors',
      outline: 'bg-transparent border border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 transition-colors',
      ghost: 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-transparent transition-colors',
    };

    const sizes = {
      sm: 'px-2.5 h-7 text-xs font-medium rounded',
      md: 'px-3 h-8 text-sm font-medium rounded-md',
      lg: 'px-5 h-9 text-sm font-medium rounded-md',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
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
    "card-enterprise p-3",
    hoverEffect && "hover:border-blue-300 hover:shadow-sm",
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
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    purple: 'bg-violet-50 text-violet-700 border-violet-100',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    gray: 'bg-slate-100 text-slate-600 border-slate-200',
    outline: 'bg-transparent border-slate-300 text-slate-600',
    dark: 'bg-slate-800 text-slate-200 border-slate-700',
  };
  
  return (
    <span className={cn(
      "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border transition-colors duration-200 select-none",
      interactive ? "cursor-pointer hover:bg-opacity-80" : "cursor-default",
      variants[variant],
      className
    )} {...props}>
      {children}
    </span>
  );
};

export const Section = ({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) => (
  <section id={id} className={cn("py-6 md:py-10 relative overflow-hidden", className)}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {children}
    </div>
  </section>
);

export const SectionHeader = ({ title, subtitle, align = 'center', className }: { title: string; subtitle?: string; align?: 'left' | 'center'; className?: string }) => (
  <div className={cn("mb-5", align === 'center' ? 'text-center' : 'text-left', className)}>
    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 tracking-tight">{title}</h2>
    {subtitle && <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);
