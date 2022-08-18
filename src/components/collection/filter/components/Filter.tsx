import React, { useReducer, Reducer } from 'react';
import { FilterState, initialState, reducer, ReducerAction } from '../state';
import { MovieListItem, TVListItem } from '../../../../app/TMDBAPIInterfaces';
import GalleryItemsList from '../../../gallery/GalleryItemsList';
import Container from './Container';
import filter from '../filterUtils';
import Menu from './Menu';

interface FilterProps {
  heading: string;
  list: MovieListItem[] | TVListItem[];
}

function Filter({ heading, list }: FilterProps) {
  const [state, dispatch] = useReducer<Reducer<FilterState, ReducerAction>>(
    reducer,
    initialState
  );

  return (
    <Container heading={heading}>
      <Menu state={state} dispatch={dispatch} />
      <GalleryItemsList
        mode='multiline'
        heading={heading}
        list={filter(state, list)}
      />
    </Container>
  );
}

export default Filter;
