import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Root from '../components/layout/Layout';
import Main from '../components/main/Main';
import Results from '../components/results/Results';

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
