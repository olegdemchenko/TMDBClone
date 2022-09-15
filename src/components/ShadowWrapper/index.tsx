import React, { useEffect, useRef } from 'react';
import { containerStyles } from './styles';

interface ShadowWrapperProps {
  children: React.ReactNode;
}

function ShadowWrapper({ children }: ShadowWrapperProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleScroll(e: Event) {
      const target = e.target as HTMLBodyElement;
      const currentTarget = e.currentTarget as HTMLDivElement;
      if (target.scrollLeft > 30) {
        currentTarget.classList.add('hidden');
      } else {
        currentTarget.classList.remove('hidden');
      }
    }
    containerRef.current?.addEventListener('scroll', handleScroll, true);
    return () => {
      containerRef.current?.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <div ref={containerRef} css={containerStyles}>
      {children}
    </div>
  );
}

export default ShadowWrapper;
