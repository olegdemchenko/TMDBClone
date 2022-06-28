import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { QueryDefinition } from '@reduxjs/toolkit/dist/query';
import { useSelector, Selector } from 'react-redux';
import { RootState } from '../../app/store/store';
import { MovieListItem, MovieListResult } from '../../app/APIInterfaces';
import axiosBaseQuery from '../../app/store/api/axiosBaseQuery';

type QueryHookParams = number;
type Results = (MovieListItem)[];

type UseQueryHookType = UseQuery<
QueryDefinition<
QueryHookParams,
typeof axiosBaseQuery,
any,
MovieListResult>
>;
type SelectorType = Selector<RootState, Results>;

export default function useCashedUseQuery(
  useQueryHook: UseQueryHookType,
  querySelector: SelectorType,
) {
  return (param: QueryHookParams) => {
    const queryRes = useQueryHook(param);
    const storedData = useSelector(querySelector);
    return { ...queryRes, data: storedData };
  };
}
