import React, { useState, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes';
import { Error } from '../../APIInterfaces';
import MainPageRepresenation from './MainPageRepresentation';
import ResultsPageRepresentation from './ResultsPageRepresentation';

interface SearchProps {
  mode: 'main' | 'results';
}

function Search({ mode }: SearchProps) {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      'search input': {
        value: string
      }
    };
    const query = target['search input'].value;
    try {
      const url = routes.getMultiSearch(query);
      const { data } = await axios.get(url);
      navigate(`/search?query=${query}`);
    } catch (err) {
      if (err instanceof AxiosError) {
        const errorData: Error = err.response?.data;
        setError(errorData.status_message);
      }
    }
  }

  const memoizedHandleSubmit = useCallback(handleSubmit, []);
  const Representation = mode === 'main' ? MainPageRepresenation : ResultsPageRepresentation;
  return (
    <Representation
      error={error}
      onChange={() => setError(null)}
      onSubmit={memoizedHandleSubmit}
    />
  );
}

export default Search;
