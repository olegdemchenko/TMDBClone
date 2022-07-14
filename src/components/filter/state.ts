import { SortAlg } from './constants';

export interface FilterState {
  sortAlg: SortAlg | null;
  dates: {
    from: Date | null;
    to: Date | null;
  } | null;
}

export type ActionTypes = 'SETSORTALG';

export type ReducerAction = {
  type: ActionTypes,
  payload: SortAlg,
};

export const initialState: FilterState = {
  sortAlg: null,
  dates: null,
};

export function reducer(state: FilterState, action: ReducerAction) {
  switch (action.type) {
    case 'SETSORTALG':
      return { ...state, sortAlg: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
