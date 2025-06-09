import React from 'react';
import { Tent } from 'lucide-react';

interface LogoProps {
  isScrolled?: boolean;
  footer?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false, footer = false }) => {
  const textColor = footer 
    ? 'text-cream-50' 
    : isScrolled 
      ? 'text-secondary-800' 
      : 'text-cream-50';

  return (
    <div className="flex items-center">
      <div className="relative mr-2">
        <Tent className={`h-8 w-8 ${textColor}`} />
        {/* Sparkles */}
        <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary-400 rounded-full animate-sparkle" />
        <span className="absolute bottom-1 left-0 w-1 h-1 bg-accent-300 rounded-full animate-sparkle animation-delay-700" />
      </div>
      <div className="flex flex-col">
        <span className={`font-display text-xl font-bold leading-none ${textColor}`}>
          Glamping
        </span>
        <span className={`text-xs font-medium tracking-wider ${textColor} opacity-80`}>
          WESTERN NEW YORK
        </span>
      </div>
    </div>
  );
};

export default Logo;