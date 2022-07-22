import { userActions } from "./user-slice";
import axios from "axios";

export const addNewUser = (newUser) => {
  return async (dispatch) => {
    try {
      dispatch(userActions.loadingStart());
      await axios.post("http://localhost:4000/Users", newUser);
    } catch (err) {
      console.log(err.message);
    }
    dispatch(userActions.loadingFinish());
  };
};

export const UserFetch = () => {
  return async (dispatch) => {
    try {
      dispatch(userActions.loadingStart());
      const res = await axios.get("http://localhost:4000/Users");
      dispatch(userActions.fetchUsers(res.data));
    } catch (error) {
      console.log(error.message);
    }
    dispatch(userActions.loadingFinish());
  };
};

export const Delete = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:4000/Users/${id}`);
      dispatch(userActions.deleteUser({ id }));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const EditUser = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:4000/Users/${id}`);
      dispatch(userActions.editUser({ users: res.data }));
    } catch (error) {
      console.log(error.message);
    }
  };
};
