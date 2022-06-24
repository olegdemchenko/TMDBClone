import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Error } from '../../app/APIInterfaces';

export enum FetchState {
  fetching = 'fetching',
  success = 'success',
  error = 'error',
}

export function useFetch<Response>(url: string) {
  const [state, setState] = useState<FetchState>(FetchState.fetching);

  const [response, setResponse] = useState<Response | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetch() {
      setState(FetchState.fetching);
      try {
        const { data } = await axios.get(url);
        setState(FetchState.success);
        setResponse(data);
      } catch (err) {
        if (err instanceof AxiosError) {
          const e = err.response?.data as Error;
          setState(FetchState.error);
          setResponse(null);
          setError(e.status_message ?? err.message);
          return;
        }
        throw err;
      }
    }
    fetch();
  }, [url]);

  return [state, response, error] as const;
}
