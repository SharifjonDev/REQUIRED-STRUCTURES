import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootReducer } from "../store/reducers";

export const UseTypedSelectorHook: TypedUseSelectorHook<RootReducer> =
  useSelector;
