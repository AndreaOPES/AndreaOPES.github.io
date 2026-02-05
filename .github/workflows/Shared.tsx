
import React from 'react';
import { LucideIcon, ChevronRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'black';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  fullWidth = false, 
  size = 'md', 
  icon: Icon 
}) => {
  const baseStyle = "rounded-xl font-semibold transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 select-none";
  const sizes = {
    sm: "py-2 px-3 text-sm",
    md: "py-2.5 px-5 text-sm",
    lg: "py-3.5 px-8 text-base"
  };
  const variants = {
    primary: "bg-slate-900 text-white shadow-lg shadow-blue-900/10 hover:bg-slate-800",
    secondary: "bg-[#1F4650] text-white hover:bg-opacity-90",
    outline: "border border-gray-200 text-gray-700 bg-white hover:bg-gray-50",
    ghost: "text-gray-500 hover:text-gray-900 hover:bg-gray-100",
    black: "bg-black text-white hover:bg-gray-800 shadow-md",
  };

  return (
    <button 
      className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : 18} />}
      {children}
    </button>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  action?: React.ReactNode;
  noPadding?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = "", title, action, noPadding = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-2xl border border-gray-100 shadow-sm ${className} overflow-hidden flex flex-col h-full ${onClick ? 'cursor-pointer hover:shadow-md hover:border-gray-200 transition-all active:scale-[0.99]' : ''}`}
  >
    {(title || action) && (
      <div className="flex justify-between items-center px-6 py-5 border-b border-gray-50">
        {title && <h3 className="font-bold text-gray-900 text-lg">{title}</h3>}
        {action}
      </div>
    )}
    <div className={`${noPadding ? '' : 'p-6'} flex-1`}>
      {children}
    </div>
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode; variant?: 'neutral' | 'success' | 'warning' | 'danger' }> = ({ children, variant = 'neutral' }) => {
  const variants = {
    neutral: 'bg-gray-100 text-gray-600',
    success: 'bg-emerald-50 text-emerald-700',
    warning: 'bg-amber-50 text-amber-700',
    danger: 'bg-rose-50 text-rose-700',
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
};

export const ToggleFilter: React.FC<{ options: string[]; active: string; onChange: (opt: string) => void }> = ({ options, active, onChange }) => (
  <div className="flex bg-gray-100 p-1 rounded-lg">
    {options.map((opt: string) => (
      <button
        key={opt}
        onClick={(e) => { e.stopPropagation(); onChange(opt); }}
        className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
          active === opt 
            ? 'bg-white text-slate-900 shadow-sm' 
            : 'text-gray-400 hover:text-gray-900'
        }`}
      >
        {opt}
      </button>
    ))}
  </div>
);
