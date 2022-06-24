import { useEffect, useState, useRef } from 'react';

export function useHideOnScroll() {
  const [position, setPosition] = useState(0);
  const [isVisible, setVisibility] = useState(true);
  const ref = useRef<HTMLBodyElement | null>(null);
  const toggleHeader = () => {
    if (ref.current && window.scrollY < ref.current.clientHeight) {
      return;
    }
    const isMoveUp = (window.scrollY - position) < 0;
    setVisibility(isMoveUp);
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleHeader);
    return () => window.removeEventListener('scroll', toggleHeader);
  });

  return [ref, isVisible] as const;
}
