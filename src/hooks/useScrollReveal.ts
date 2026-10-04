import { useEffect, useRef } from 'react';

/**
 * Lightweight hook using IntersectionObserver to trigger scroll-reveal animations.
 * Gracefully degrades if IntersectionObserver is not available or if the user
 * prefers reduced motion. Elements are guaranteed to never remain stuck invisible.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      el.classList.add('is-revealed');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '60px 0px 60px 0px',
      }
    );

    observer.observe(el);

    // Fallback safety timeout: ensure content is revealed even on slow rendering / edge cases
    const safetyTimer = setTimeout(() => {
      if (el && !el.classList.contains('is-revealed')) {
        el.classList.add('is-revealed');
      }
    }, 1500);

    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, []);

  return ref;
}
