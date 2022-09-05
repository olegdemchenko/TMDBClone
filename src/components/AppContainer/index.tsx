import React from 'react';

interface AppContainerProps {
  children: React.ReactNode;
}

function AppContainer({ children }: AppContainerProps) {
  return (
    <div className='d-flex min-vh-100 flex-column justify-content-between'>
      <div>{children}</div>
    </div>
  );
}

export default AppContainer;
