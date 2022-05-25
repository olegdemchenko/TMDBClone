import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import routes from '../../routes';
import { Error } from '../../APIInterfaces';
import Form from './Form';

function handleSubmit(errorCallback: (err: string) => void) {
  return async (e: React.SyntheticEvent) => {
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
      console.log(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorData: Error = error.response?.data;
        errorCallback(errorData.status_message);
      }
    }
  };
}

function Search() {
  const [error, setError] = useState<string | null>(null);
  return (
    <Form
      error={error}
      onChange={() => setError(null)}
      onSubmit={handleSubmit(setError)}
    />
  );
}

export default Search;
