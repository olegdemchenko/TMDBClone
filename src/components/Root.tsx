import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Main from './MainPage';

function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Root;
