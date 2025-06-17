import React from 'react';

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
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/glamping-logo.png" 
        alt="Glamping WNY Logo" 
        className={`${sizeClasses[size]} w-auto mr-3`}
      />
      <div className="flex flex-col">
        <span className={`font-display text-xl font-bold leading-none ${
          footer 
            ? 'text-gray-800' 
            : isScrolled 
              ? 'text-gray-800' 
              : 'text-white'
        }`}>
          Glamping WNY
        </span>
        <span className={`text-xs font-medium tracking-wider ${
          footer 
            ? 'text-gray-600' 
            : isScrolled 
              ? 'text-gray-600' 
              : 'text-white/80'
        }`}>
          MAGICAL EXPERIENCES
        </span>
      </div>
    </div>
  );
};

export default Logo;