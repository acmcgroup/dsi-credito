"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Force scroll to top on route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Ensure scroll restoration is disabled
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Force scroll to top only when page loads (after reload completes)
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTop;