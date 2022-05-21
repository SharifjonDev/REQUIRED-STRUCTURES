export interface UseState {
  data: any[];
  loading: boolean;
  error: null | string;
}

export enum UseActionTypes {
  FETCH_USE = "FETCH_USE",
  FETCH_SUCCES = "FETCH_SECCES",
  FETCH_ERROR = "FETCH_ERROR",
}

interface FetchUseAction {
  type: UseActionTypes.FETCH_USE;
}

interface FetchSuccesAction {
  type: UseActionTypes.FETCH_SUCCES;
  payload: any[];
}

interface FetchErrorAction {
  type: UseActionTypes.FETCH_ERROR;
  payload: string;
}

export type UseAction = FetchUseAction | FetchSuccesAction | FetchErrorAction;
