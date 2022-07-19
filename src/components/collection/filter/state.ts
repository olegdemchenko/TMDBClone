import { SortAlg } from './constants';

export type Dates = {
  from?: Date;
  to?: Date;
};

export interface FilterState {
  sortAlg: SortAlg | null;
  dates: Dates;
  genres: number[],
}

export enum ActionTypes {
  sortAlg = 'SETSORTALG',
  dates = 'SETDATES',
  setGenres = 'SETGENRES',
}

export type ReducerAction =
| { type: ActionTypes.sortAlg, payload: SortAlg }
| { type: ActionTypes.dates, payload: Dates };

export const initialState: FilterState = {
  sortAlg: null,
  dates: {
    to: new Date(),
  },
  genres: [],
};

export function reducer(state: FilterState, action: ReducerAction) {
  switch (action.type) {
    case ActionTypes.sortAlg:
      return { ...state, sortAlg: action.payload };
    case ActionTypes.dates:
      return { ...state, dates: { ...state.dates, ...action.payload } };
    default:
      throw new Error('Unknown action type');
  }
}
