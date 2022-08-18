import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Root from '../components/Layout';
import Main from '../components/Main';
import Results from '../components/results/Results';
import Movies from '../components/movies';
import TVShows from '../components/tvShows';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Main />} />
          <Route path='search' element={<Results />} />
          <Route path='movie/*' element={<Movies />} />
          <Route path='tv/*' element={<TVShows />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
