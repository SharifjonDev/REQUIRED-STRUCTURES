import { combineReducers } from "redux";
import { useReducer } from "./useReducer";

export const rootReducer = combineReducers({
  data: useReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
