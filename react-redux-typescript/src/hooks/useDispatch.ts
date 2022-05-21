import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../store/action-creators";

export const UserDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
