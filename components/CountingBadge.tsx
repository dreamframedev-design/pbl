'use client';

import { useEffect, useState } from 'react';

interface CountingBadgeProps {
  targetValue: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CountingBadge({ 
  targetValue, 
  suffix = '%', 
  duration = 2000,
  className = '' 
}: CountingBadgeProps) {
  const [count, setCount] = useState(1);

  useEffect(() => {
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
  }, [targetValue, duration]);

  return (
    <div className={className}>
      {count}{suffix}
    </div>
  );
}

