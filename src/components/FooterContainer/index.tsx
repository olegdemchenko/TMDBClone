import React from 'react';
import Footer from '../Footer';

interface FooterContainerProps {
  children: React.ReactNode;
}

function FooterContainer({ children }: FooterContainerProps) {
  return (
    <div className='d-flex min-vh-100 flex-column justify-content-between'>
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default FooterContainer;
