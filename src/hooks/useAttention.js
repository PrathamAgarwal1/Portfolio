import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Images with the "attend" class stay greyscale until they get attention. With a
// mouse that's hover (pure CSS); on touch screens there's no hover, so they turn
// to colour once they're mostly in view instead.
export default function useAttention() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('is-attended', e.isIntersecting)),
      { threshold: 0.6 },
    );
    const watch = () => document.querySelectorAll('.attend').forEach((el) => observer.observe(el));
    watch();
    // Sections render after navigation, so look again once the page has settled.
    const timer = setTimeout(watch, 300);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);
}
