import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { Error } from '../APIInterfaces';

const axiosBaseQuery: BaseQueryFn<
{
  url: string
  method: AxiosRequestConfig['method']
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
},
unknown,
unknown
> = (
  async ({
    url,
    method,
    data,
    params,
  }) => {
    const baseUrl = 'https://api.themoviedb.org/3';
    const apiKey = '93e4398b13ae3ceac59da2647741318';
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params: { ...params, api_key: apiKey },
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data ?? err.message,
        },
      };
    }
  }
);

export default axiosBaseQuery;
