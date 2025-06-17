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
    lg: 'h-16'
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
      <img 
        src="/glamping-logo.png" 
        alt="Glamping WNY Logo" 
        className={`${sizeClasses[size]} w-auto mr-3 drop-shadow-sm`}
      />
      <div className="flex flex-col">
        <span className={`font-display ${textSizeClasses[size]} font-bold leading-none ${
          footer 
            ? 'text-neutral-800' 
            : 'text-neutral-800'
        }`}>
          Glamping WNY
        </span>
        <span className={`${subTextSizeClasses[size]} font-medium tracking-wider ${
          footer 
            ? 'text-neutral-600' 
            : 'text-neutral-600'
        }`}>
          LUXURY EXPERIENCES
        </span>
      </div>
    </div>
  );
};

export default Logo;