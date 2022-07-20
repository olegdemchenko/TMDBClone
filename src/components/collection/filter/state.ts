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
  addGenre = 'ADDGENRE',
  deleteGenre = 'DELETEGENRE',
}

export type ReducerAction =
| { type: ActionTypes.sortAlg, payload: SortAlg }
| { type: ActionTypes.dates, payload: Dates }
| { type: ActionTypes.deleteGenre, payload: number }
| { type: ActionTypes.addGenre, payload: number };

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
    case ActionTypes.addGenre:
      return { ...state, genres: [...state.genres, action.payload] };
    case ActionTypes.deleteGenre:
      return { ...state, genres: state.genres.filter((genre) => genre !== action.payload) };
    default:
      throw new Error('Unknown action type');
  }
}
