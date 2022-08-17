import React from 'react';

interface ContainerProps {
  heading: string;
  children: React.ReactNode;
}

function Container({ heading, children }: ContainerProps) {
  return (
    <>
      <h3 className='m-0 pb-4'>{heading}</h3>
      <div className='d-flex'>{children}</div>
    </>
  );
}

export default Container;
