import { gsap } from 'gsap';

/**
 * Reusable Editorial Animation Utilities
 */

export const animateReveal = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;
  gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, delay, ease: 'power2.out' }
  );
};

export const animateText = (element: HTMLElement | null) => {
  if (!element) return;
  gsap.fromTo(
    element,
    { opacity: 0 },
    { opacity: 1, duration: 0.8, ease: 'power1.inOut' }
  );
};

export const animateImageReveal = (element: HTMLElement | null) => {
  if (!element) return;
  gsap.fromTo(
    element,
    { scale: 1.05, filter: 'brightness(70%)' },
    { scale: 1, filter: 'brightness(100%)', duration: 0.8, ease: 'power2.out' }
  );
};

export const animateEditorialSection = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0.9, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
  });
};

export const animateProjectHover = (element: HTMLElement | null, isHovering: boolean) => {
  if (!element) return;
  gsap.to(element, {
    scale: isHovering ? 1.02 : 1,
    duration: 0.3,
    ease: 'power1.out',
  });
};
