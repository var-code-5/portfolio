"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  ease?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  ease = "power2.out",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [displayValue, setDisplayValue] = useState<string>("");
  const isCountingRef = useRef(false);
  const hasCountedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  // Get number of decimal places in a number
  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  // Format number with separator and decimal places
  const formatNumber = (value: number): string => {
    const hasDecimals = maxDecimals > 0;
    const options: Intl.NumberFormatOptions = {
      useGrouping: !!separator,
      minimumFractionDigits: hasDecimals ? maxDecimals : 0,
      maximumFractionDigits: hasDecimals ? maxDecimals : 0,
    };
    
    const formattedNumber = Intl.NumberFormat("en-US", options).format(value);
    return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
  };

  // Easing function for custom animation easing
  const getEasedProgress = (progress: number, easeType: string) => {
    switch (easeType) {
      case "linear":
        return progress;
      case "power2.in":
        return Math.pow(progress, 2);
      case "power2.out":
        return 1 - Math.pow(1 - progress, 2);
      case "power2.inOut":
        return progress < 0.5 ? Math.pow(progress * 2, 2) / 2 : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      default:
        return progress;
    }
  };

  useEffect(() => {
    if (isCountingRef.current) return;
    isCountingRef.current = true;

    const start = parseFloat(from.toString());
    const end = parseFloat(to.toString());
    const startTime = performance.now();
    
    const tick = () => {
      const now = performance.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = getEasedProgress(progress, ease);
      const value = start + (end - start) * easedProgress;
      
      setDisplayValue(formatNumber(value));
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        isCountingRef.current = false;
        onEnd?.();
      }
    };
    
    tick();
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        isCountingRef.current = false;
      }
    };
  }, [from, to, duration, ease, formatNumber, onEnd]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial value
    const initialValue = direction === "down" ? to : from;
    element.textContent = formatNumber(initialValue);

    // Create animation object to hold the current value
    const animationObject = { value: initialValue };

    // Create the GSAP animation
    const createAnimation = () => {
      const targetValue = direction === "down" ? from : to;
      
      animationRef.current = gsap.to(animationObject, {
        value: targetValue,
        duration,
        delay,
        ease,
        onStart: () => {
          if (typeof onStart === "function") {
            onStart();
          }
        },
        onUpdate: () => {
          if (element) {
            element.textContent = formatNumber(animationObject.value);
          }
        },
        onComplete: () => {
          if (typeof onEnd === "function") {
            onEnd();
          }
        },
      });
    };

    // Set up ScrollTrigger if startWhen is true
    if (startWhen) {
      ScrollTrigger.create({
        trigger: element,
        start: "top bottom-=100px",
        once: true,
        onEnter: createAnimation,
      });
    } else {
      // Start immediately if startWhen is false
      createAnimation();
    }

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [to, from, direction, delay, duration, startWhen, separator, ease, onStart, onEnd, maxDecimals]);

  return <span className={className} ref={ref}>{displayValue}</span>;
}

// Alternative version without ScrollTrigger for simpler use cases
export function SimpleCountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  separator = "",
  ease = "power2.out",
  onStart,
  onEnd,
}: Omit<CountUpProps, 'startWhen'>) {
  const ref = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimatedRef = useRef(false);
  const [displayValue, setDisplayValue] = useState<string>("");
  const isCountingRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatNumber = (value: number): string => {
    const hasDecimals = maxDecimals > 0;
    const options: Intl.NumberFormatOptions = {
      useGrouping: !!separator,
      minimumFractionDigits: hasDecimals ? maxDecimals : 0,
      maximumFractionDigits: hasDecimals ? maxDecimals : 0,
    };
    
    const formattedNumber = Intl.NumberFormat("en-US", options).format(value);
    return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
  };

  // Easing function for custom animation easing
  const getEasedProgress = (progress: number, easeType: string) => {
    switch (easeType) {
      case "linear":
        return progress;
      case "power2.in":
        return Math.pow(progress, 2);
      case "power2.out":
        return 1 - Math.pow(1 - progress, 2);
      case "power2.inOut":
        return progress < 0.5 ? Math.pow(progress * 2, 2) / 2 : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      default:
        return progress;
    }
  };

  useEffect(() => {
    if (isCountingRef.current) return;
    isCountingRef.current = true;

    const start = parseFloat(from.toString());
    const end = parseFloat(to.toString());
    const startTime = performance.now();
    
    const tick = () => {
      const now = performance.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = getEasedProgress(progress, ease);
      const value = start + (end - start) * easedProgress;
      
      setDisplayValue(formatNumber(value));
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        isCountingRef.current = false;
        onEnd?.();
      }
    };
    
    tick();
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        isCountingRef.current = false;
      }
    };
  }, [from, to, duration, ease, formatNumber, onEnd]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ref.current) return;
    
    const scrollAction = () => {
      if (isCountingRef.current || hasAnimatedRef.current) return;
      
      const rect = ref.current!.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
      
      if (isInView) {
        isCountingRef.current = true;
        hasAnimatedRef.current = true;
        
        const start = parseFloat(from.toString());
        const end = parseFloat(to.toString());
        const startTime = performance.now();
        
        const tick = () => {
          const now = performance.now();
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          const easedProgress = getEasedProgress(progress, ease);
          const value = start + (end - start) * easedProgress;
          
          setDisplayValue(formatNumber(value));
          
          if (progress < 1) {
            rafRef.current = requestAnimationFrame(tick);
          } else {
            isCountingRef.current = false;
            onEnd?.();
          }
        };
        
        tick();
      }
    };
    
    scrollAction();
    window.addEventListener('scroll', scrollAction);
    
    return () => {
      window.removeEventListener('scroll', scrollAction);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [from, to, duration, ease, formatNumber, onEnd]);

  return <span className={className} ref={ref}>{displayValue}</span>;
}