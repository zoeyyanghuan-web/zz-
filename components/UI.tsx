import React from 'react';

interface UIProps {
  isFormed: boolean;
  toggleFormed: () => void;
}

export const UI: React.FC<UIProps> = ({ isFormed, toggleFormed }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-8 z-10">
      
      {/* Header */}
      <header className="flex justify-center mt-4">
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-[#D4AF37] tracking-wider uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Grand Holiday
          </h1>
          <p className="font-sans text-[#E5E4E2] text-sm md:text-lg tracking-[0.3em] mt-2 opacity-80">
            INTERACTIVE EXPERIENCE
          </p>
        </div>
      </header>

      {/* Controls */}
      <div className="flex justify-center mb-12 pointer-events-auto">
        <button
          onClick={toggleFormed}
          className={`
            group relative px-12 py-4 bg-black/40 backdrop-blur-md border border-[#D4AF37] 
            text-[#D4AF37] font-serif text-xl tracking-widest uppercase transition-all duration-500
            hover:bg-[#D4AF37] hover:text-black overflow-hidden
          `}
        >
          <span className="relative z-10">
            {isFormed ? "Release Chaos" : "Assemble Tree"}
          </span>
          
          {/* Shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
        </button>
      </div>
      
      {/* Decorative Corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/50" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]/50" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37]/50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]/50" />

    </div>
  );
};
