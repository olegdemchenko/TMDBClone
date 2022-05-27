import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Root from './Root';
import Main from '../features/mainPage/MainPage';
import Results from '../features/search/Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Main />} />
          <Route path="search" element={<Results />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
