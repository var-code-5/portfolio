'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type ScrollDownIndProps = {
  className?: string;
};

const ScrollDownInd: React.FC<ScrollDownIndProps> = ({
    className
}) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    const spans = boxRef.current.querySelectorAll('span');
    const tl = gsap.timeline({ repeat: -1 });

    spans.forEach((span, index) => {
      gsap.set(span, {
        opacity: 0,
        x: 0,
        y: -20 - index * 10,
        rotation: 45
      });

      // Add animation to timeline with delay
      tl.to(span, {
        opacity: 1,
        x: 0,
        y: 0 - (20 + index * 10),
        duration: 1.5,
        ease: "power2.inOut"
      })
      .to(span, {
        opacity: 0,
        x: 0,
        y: 20 + (index * 10),
        duration: 1.5,
        ease: "power2.inOut"
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={`w-32 h-auto  flex items-center justify-center ${className}`}>
      <div ref={boxRef} className="relative">
        <span className="block w-5 h-5 border-b-6 border-r-6 border-cgreen absolute -m-2.5 rotate-45"></span>
        <span className="block w-5 h-5 border-b-6 border-r-6 border-cgreen absolute -m-1.5 rotate-45"></span>
        <span className="block w-5 h-5 border-b-6 border-r-6 border-cgreen absolute -m-0.5 rotate-45"></span>
      </div>
    </div>
  );
};

export default ScrollDownInd;