import { UseAction, UseActionTypes } from "../../types/use";
import { Dispatch } from "redux";
import axios from "axios";

export const FetchData = () => {
  return async (dispatch: Dispatch<UseAction>) => {
    try {
      dispatch({
        type: UseActionTypes.FETCH_USE,
      });
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: UseActionTypes.FETCH_SUCCES, payload: res.data });
    } catch (error) {
      dispatch({
        type: UseActionTypes.FETCH_ERROR,
        payload: "Something went wrong 404",
      });
    }
  };
};
