import { createContext } from "react";

const initialState = {
  first: "Sharifjon",
  last: "Yulchiboev",
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
