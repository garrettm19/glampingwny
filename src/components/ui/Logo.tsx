import React from 'react';
import { Tent } from 'lucide-react';

interface LogoProps {
  isScrolled?: boolean;
  footer?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ 
  isScrolled = false, 
  footer = false, 
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const subTextSizeClasses = {
    sm: 'text-xs',
    md: 'text-xs',
    lg: 'text-sm'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${sizeClasses[size]} rounded-xl flex items-center justify-center mr-3 ${
        footer 
          ? 'bg-emerald-600 text-white' 
          : isScrolled 
            ? 'bg-emerald-600 text-white' 
            : 'bg-white/20 text-white backdrop-blur-sm'
      }`}>
        <Tent className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}`} />
      </div>
      <div className="flex flex-col">
        <span className={`font-serif ${textSizeClasses[size]} font-bold leading-none ${
          footer 
            ? 'text-white' 
            : isScrolled 
              ? 'text-gray-900' 
              : 'text-white'
        }`}>
          Glamping WNY
        </span>
        <span className={`${subTextSizeClasses[size]} font-medium tracking-wider ${
          footer 
            ? 'text-gray-300' 
            : isScrolled 
              ? 'text-gray-600' 
              : 'text-white/80'
        }`}>
          LUXURY EXPERIENCES
        </span>
      </div>
    </div>
  );
};

export default Logo;