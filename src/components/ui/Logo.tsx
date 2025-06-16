import React from 'react';
import { Tent } from 'lucide-react';

interface LogoProps {
  isScrolled?: boolean;
  footer?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false, footer = false }) => {
  const textColor = footer 
    ? 'text-white' 
    : isScrolled 
      ? 'text-lavender-900' 
      : 'text-white';

  return (
    <div className="flex items-center">
      <div className="relative mr-2">
        <Tent className={`h-8 w-8 ${textColor}`} />
        {/* Sparkles */}
        <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-lavender-400 rounded-full animate-sparkle" />
        <span className="absolute bottom-1 left-0 w-1 h-1 bg-teal-400 rounded-full animate-sparkle animation-delay-700" />
      </div>
      <div className="flex flex-col">
        <span className={`font-display text-xl font-bold leading-none ${textColor}`}>
          Glamping WNY
        </span>
        <span className={`text-xs font-medium tracking-wider ${textColor} opacity-80`}>
          MAGICAL EXPERIENCES
        </span>
      </div>
    </div>
  );
};

export default Logo;