import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MainPageRepresenation from './MainPageRepr';
import ResultsPageRepresentation from './ResultsPageRepr';

interface SearchProps {
  mode: 'main' | 'results';
}

function Search({ mode }: SearchProps) {
  const navigate = useNavigate();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      'search input': {
        value: string
      }
    };
    const query = target['search input'].value;
    navigate(`/search?query=${query}`);
  }

  const memoizedHandleSubmit = useCallback(handleSubmit, []);
  const Representation = mode === 'main' ? MainPageRepresenation : ResultsPageRepresentation;
  return (
    <Representation
      onSubmit={memoizedHandleSubmit}
    />
  );
}

export default Search;
