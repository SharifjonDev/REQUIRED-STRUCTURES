import { UseAction, UseActionTypes, UseState } from "../../types/use";

const initialData: UseState = {
  data: [],
  loading: false,
  error: null,
};

export const useReducer = (state = initialData, action: UseAction) => {
  switch (action.type) {
    case UseActionTypes.FETCH_USE:
      return { ...state, loading: true };
    case UseActionTypes.FETCH_SUCCES:
      return { loading: false, error: null, data: action.payload };
    case UseActionTypes.FETCH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
