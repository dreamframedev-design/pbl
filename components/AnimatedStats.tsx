'use client';

import { useEffect, useState } from 'react';

interface AnimatedStatsProps {
  targetValue: number;
  suffix?: string;
  duration?: number;
}

function CountingNumber({ targetValue, suffix = '+', duration = 2000 }: AnimatedStatsProps) {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${targetValue}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [targetValue, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Ease-out function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(1 + (targetValue - 1) * easeOut);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(targetValue);
      }
    };

    const animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [targetValue, duration, isVisible]);

  return (
    <div id={`counter-${targetValue}`} className="text-cyan-500 font-bold text-2xl mb-1">
      {count}{suffix}
    </div>
  );
}

function AnimatedGlobal() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const words = ['Global', 'Worldwide', 'International'];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('animated-global');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let cycleInterval: NodeJS.Timeout;
    
    // Start cycling after initial slide-up animation completes (1.5s)
    const startCycling = setTimeout(() => {
      cycleInterval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, 2000);
    }, 1500);

    return () => {
      clearTimeout(startCycling);
      if (cycleInterval) {
        clearInterval(cycleInterval);
      }
    };
  }, [isVisible, words.length]);

  return (
    <div 
      id="animated-global"
      className="text-cyan-500 font-bold text-2xl mb-1 h-8 overflow-hidden relative"
    >
      <div 
        className={`absolute inset-0 transition-all duration-500 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        key={currentIndex}
      >
        {words[currentIndex]}
      </div>
    </div>
  );
}

function AnimatedISO() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => setShowCheckmark(true), 300);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('animated-iso');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isVisible]);

  return (
    <div 
      id="animated-iso"
      className="text-cyan-500 font-bold text-2xl mb-1 flex items-center justify-center md:justify-start gap-2"
    >
      <span className={`transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
      }`}>
        ISO 9001
      </span>
      <span className={`transition-all duration-300 ${
        showCheckmark ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}>
        <svg 
          className="w-6 h-6 text-green-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={3} 
            d="M5 13l4 4L19 7" 
          />
        </svg>
      </span>
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <section className="bg-white border-y border-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <CountingNumber targetValue={60} suffix="+" />
          <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Validated Reagents</div>
        </div>
        <div>
          <CountingNumber targetValue={30} suffix="+" />
          <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Years Expertise</div>
        </div>
        <div>
          <AnimatedGlobal />
          <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Logistics Network</div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <AnimatedISO />
          <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Quality Certified</div>
        </div>
      </div>
    </section>
  );
}

