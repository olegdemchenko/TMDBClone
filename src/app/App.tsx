import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Main from '../components/MainPage';
import Results from '../components/Results';
import MoviesRouter from '../components/MoviesRouter';
import TVShowsRouter from '../components/TvShowsRouter';
import People from '../components/People';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='search' element={<Results />} />
        <Route path='movie/*' element={<MoviesRouter />} />
        <Route path='tv/*' element={<TVShowsRouter />} />
        <Route path='person/*' element={<People />} />
      </Routes>
    </Provider>
  );
}

export default App;
