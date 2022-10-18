import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Main from '../features/MainPage';
import Results from '../features/Results';
import MoviesRouter from '../features/MoviesRouter';
import TVShowsRouter from '../features/TvShowsRouter';
import PeopleRouter from '../features/PeopleRouter';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='search' element={<Results />} />
        <Route path='movie/*' element={<MoviesRouter />} />
        <Route path='tv/*' element={<TVShowsRouter />} />
        <Route path='person/*' element={<PeopleRouter />} />
      </Routes>
    </Provider>
  );
}

export default App;
