import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Root from '../components/Layout';
import Main from '../components/MainPage';
import Results from '../components/Results';
import Movies from '../components/MoviesTab';
import TVShows from '../components/TvShowsTab';
import People from '../components/People';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Main />} />
          <Route path='search' element={<Results />} />
          <Route path='movie/*' element={<Movies />} />
          <Route path='tv/*' element={<TVShows />} />
          <Route path='people/*' element={<People />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
