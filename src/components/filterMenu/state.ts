import { SortAlg } from './constants';

type Dates = {
  from: Date | null;
  to: Date | null;
};

export interface FilterState {
  sortAlg: SortAlg | null;
  dates: Dates | null;
}

export enum ActionTypes {
  sortAlg = 'SETSORTALG',
}

export type ReducerAction =
| { type: ActionTypes.sortAlg, payload: SortAlg };

export const initialState: FilterState = {
  sortAlg: null,
  dates: null,
};

export function reducer(state: FilterState, action: ReducerAction) {
  switch (action.type) {
    case ActionTypes.sortAlg:
      return { ...state, sortAlg: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
