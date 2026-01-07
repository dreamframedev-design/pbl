'use client';

import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Testimonial {
  quote: string;
  attribution: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "There is no match for the support you provide. The PBL team is always very clear, thorough, and prompt with its responses. We've greatly benefitted from the depth of scientific knowledge and project design expertise that PBL brings to the table.",
    attribution: 'Senior Scientist & Program Lead, Large U.S. Pharma',
  },
  {
    quote:
      "I appreciate your care in reliably producing high-quality data, and I'm always grateful for the work you invest into our studies.",
    attribution: 'Director of Biology, Midsize U.S. Biotech',
  },
  {
    quote:
      "The moment we hear that you've qualified a difficult assay, we breathe a sigh of relief because we know our samples are in good hands.",
    attribution: 'Senior Scientist & Program Lead, Large U.S. Pharma',
  },
  {
    quote:
      'PBL is superfast and always very helpful and knowledgeable.',
    attribution: 'Postdoctoral Fellow, Large U.S. University',
  },
  {
    quote:
      "I appreciate your team's support, expertise, and thoughtfulness. It's been a delight working together, and I look forward to future collaborations.",
    attribution: 'Research Scientist, Large U.S. Pharma',
  },
  {
    quote:
      'Thank you, PBL, for producing fantastic data, your quick turnaround time, and your responsiveness to my needs.',
    attribution: 'Senior Scientist, Small U.S. Biotech',
  },
  {
    quote:
      "I appreciate PBL's strong support and flexibility and look forward to your continued support on additional high-priority projects.",
    attribution: 'Senior Director, Large U.S. Pharma',
  },
  {
    quote:
      'Having the opportunity to work with you has been a real pleasure. We very much enjoy working with the PBL team. Your project support and flexibility are absolutely appreciated.',
    attribution: 'Associate Director, Small U.S. Biotech',
  },
];

export default function TestimonialsSlider() {
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const dragStartX = useRef(0);

  // Duplicate testimonials for seamless loop (2 sets for smooth infinite scroll)
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    if (!isDragging && sliderRef.current) {
      const slider = sliderRef.current;
      const firstChild = slider.firstElementChild as HTMLElement;
      
      if (firstChild && firstChild.offsetWidth > 0) {
        const cardWidth = firstChild.offsetWidth;
        const gap = 24; // gap-6 = 24px
        const singleSetWidth = testimonials.length * (cardWidth + gap);
        
        // Get current position (preserves drag position)
        const currentPosition = x.get();
        
        // Start animation from current position
        controls.start({
          x: [currentPosition, currentPosition - singleSetWidth],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 60,
              ease: 'linear',
            },
          },
        });
      } else {
        // Retry if element not ready
        const timeout = setTimeout(() => {
          if (!isDragging) {
            // Trigger re-render to retry
            setIsDragging(false);
          }
        }, 100);
        return () => clearTimeout(timeout);
      }
    } else if (isDragging) {
      controls.stop();
    }
  }, [isDragging, controls, x]);

  return (
    <div className="relative w-full py-4 overflow-x-hidden" style={{ overflowY: 'visible', paddingBottom: '64px' }}>
      {/* Padding wrapper to allow shadows to show and full-width travel - negative margins break out of container */}
      <div className="px-6 lg:px-12 -mx-6 lg:-mx-12" style={{ paddingBottom: '32px' }}>
        {/* Slider Container */}
        <motion.div
          ref={sliderRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing will-change-transform"
          drag="x"
          dragElastic={0.1}
          dragMomentum={false}
          dragConstraints={{ left: -Infinity, right: Infinity }}
          animate={controls}
          onDragStart={() => {
            setIsDragging(true);
            controls.stop();
            dragStartX.current = x.get();
          }}
          onDrag={(event, info) => {
            const newX = dragStartX.current + info.offset.x;
            x.set(newX);
          }}
          onDragEnd={() => {
            setIsDragging(false);
          }}
          style={{ width: 'max-content', x }}
        >
        {duplicatedTestimonials.map((testimonial, index) => (
          <motion.div
            key={`${index}-${testimonial.attribution.slice(0, 20)}`}
            className="flex-shrink-0 w-[320px] md:w-[380px] lg:w-[450px]"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="relative p-10 rounded-[3rem] h-full flex flex-col" style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              marginBottom: '40px'
            }}>
              <div className="text-cyan-400 text-6xl absolute top-4 left-6 opacity-20 font-serif leading-none">"</div>
              <p className="text-xl font-light text-gray-700 italic leading-relaxed mb-4 flex-grow relative z-10 pl-8 pt-2">
                {testimonial.quote}
              </p>
              <p className="text-sm md:text-base text-gray-600 font-medium relative z-10">
                — {testimonial.attribution}
              </p>
            </div>
          </motion.div>
        ))}
        </motion.div>
      </div>
    </div>
  );
}

