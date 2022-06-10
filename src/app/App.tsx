import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Root from './Root';
import Main from '../features/main/Main';
import Results from '../features/search/Results';

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
