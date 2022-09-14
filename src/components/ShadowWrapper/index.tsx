import React, { useEffect, useRef } from 'react';
import { outerContainerStyles, innerContainerStyles } from './styles';

interface ShadowWrapperProps {
  children: React.ReactNode;
}

function ShadowWrapper({ children }: ShadowWrapperProps) {
  const outerContainerRef = useRef<HTMLDivElement | null>(null);
  const innerContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outerContainer = outerContainerRef.current;
    const innerContainer = innerContainerRef.current;

    function hideShadow() {
      if (!outerContainer || !innerContainer) {
        return;
      }
      if (innerContainer.scrollLeft > 30) {
        outerContainer.classList.add('hidden');
      } else {
        outerContainer.classList.remove('hidden');
      }
    }

    innerContainer?.addEventListener('scroll', hideShadow);
    return () => {
      innerContainer?.removeEventListener('scroll', hideShadow);
    };
  }, []);

  return (
    <div ref={outerContainerRef} css={outerContainerStyles}>
      <div ref={innerContainerRef} css={innerContainerStyles}>
        {children}
      </div>
    </div>
  );
}

export default ShadowWrapper;
