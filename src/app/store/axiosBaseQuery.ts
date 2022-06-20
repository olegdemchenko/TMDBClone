import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: '' },
): BaseQueryFn<
{
  url: string
  method: AxiosRequestConfig['method']
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
},
unknown,
unknown
> => (
  async ({
    url,
    method,
    data,
    params,
  }) => {
    const apiKey = '93e4398b13ae3ceac59da26477413183';
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
  });

export default axiosBaseQuery;
