import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Root from './Root';
import Main from '../features/mainPage/MainPage';
import SearchResults from '../features/searchResults/SearchResults';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Main />} />
          <Route path="search" element={<SearchResults />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
