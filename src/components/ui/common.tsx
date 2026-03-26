import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-container)] border border-[var(--color-primary)]/60 shadow-[0_12px_30px_-18px_rgba(0,61,166,0.5)] transition-all',
      secondary: 'bg-[var(--color-surface-container-lowest)] text-[var(--color-on-surface-variant)] border border-[var(--color-outline-variant)]/40 hover:bg-[var(--color-surface-container-low)] hover:text-[var(--color-on-surface)] shadow-sm transition-all',
      outline: 'bg-transparent border border-[var(--color-outline-variant)]/40 text-[var(--color-on-surface-variant)] hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all',
      ghost: 'bg-transparent text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-low)] hover:text-[var(--color-on-surface)] border border-transparent transition-all',
    };

    const sizes = {
      sm: 'px-2.5 h-7 text-xs font-medium rounded-md',
      md: 'px-3.5 h-9 text-sm font-medium rounded-lg',
      lg: 'px-5 h-10 text-sm font-medium rounded-lg',
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
    "card-enterprise p-4",
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
    blue: 'bg-[var(--color-primary-fixed)] text-[var(--color-on-primary-fixed-variant)] border-[var(--color-primary-fixed-dim)]',
    purple: 'bg-violet-50 text-violet-700 border-violet-200',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    gray: 'bg-[var(--color-surface-container-low)] text-[var(--color-on-surface-variant)] border-[var(--color-outline-variant)]',
    outline: 'bg-transparent border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)]',
    dark: 'bg-[var(--color-on-surface)] text-[var(--color-on-background)] border-transparent',
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
