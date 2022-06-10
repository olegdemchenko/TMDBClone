import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Root from '../features/layout/Layout';
import Main from '../features/main/Main';
import Results from '../features/results/Results';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Main />} />
        <Route path="search" element={<Results />} />
      </Route>
    </Routes>
  );
}

export default App;
