'use client';

import { motion, useAnimation } from 'framer-motion';
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

  // Duplicate testimonials for seamless loop (2 sets for smooth infinite scroll)
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    if (!isDragging && sliderRef.current) {
      // Calculate width based on actual rendered size
      const slider = sliderRef.current;
      const firstChild = slider.firstElementChild as HTMLElement;
      if (firstChild) {
        const cardWidth = firstChild.offsetWidth;
        const gap = 24; // gap-6 = 24px
        const singleSetWidth = testimonials.length * (cardWidth + gap);
        
        controls.start({
          x: [0, -singleSetWidth],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 60,
              ease: 'linear',
            },
          },
        });
      }
    }
  }, [isDragging, controls]);

  return (
    <div className="relative w-full overflow-hidden py-4 -mx-3">
      {/* Slider Container */}
      <motion.div
        ref={sliderRef}
        className="flex gap-6 cursor-grab active:cursor-grabbing will-change-transform"
        drag="x"
        dragElastic={0.2}
        dragMomentum={false}
        onDragStart={() => {
          setIsDragging(true);
          controls.stop();
        }}
        onDragEnd={() => {
          setIsDragging(false);
        }}
        animate={controls}
        style={{ width: 'max-content' }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <motion.div
            key={`${index}-${testimonial.attribution.slice(0, 20)}`}
            className="flex-shrink-0 w-[320px] md:w-[380px] lg:w-[450px]"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md h-full flex flex-col">
              <p className="text-primary-navy italic leading-relaxed font-light mb-6 flex-grow text-base md:text-lg">
                "{testimonial.quote}"
              </p>
              <p className="text-sm md:text-base text-neutral-steel font-medium">
                — {testimonial.attribution}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

