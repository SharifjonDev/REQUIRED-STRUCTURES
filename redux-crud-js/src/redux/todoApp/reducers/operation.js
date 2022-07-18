/* eslint-disable array-callback-return */
import {
  ADD_TODO,
  DELETE_ALL,
  REMOvE_TODO,
  UPDATE_CHECKBOX,
  UPDATE_TODO,
} from "../actions/action";

const initialState = [
  {
    id: 1,
    todo: "Buy Laptop",
    completed: false,
  },
  {
    id: 2,
    todo: "Master Redux",
    completed: false,
  },
  {
    id: 3,
    todo: "Watering Plants",
    completed: true,
  },
];

export const operationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_ALL:
      return [];

    case REMOvE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case UPDATE_TODO:
      let data = action.payload;
      const updateArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todo = data.todo;
          item.completed = data.completed;
        }
        updateArray.push(item);
      });
      return updateArray;

    case UPDATE_CHECKBOX:
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoArray.push(item);
      });
      return todoArray;

    default:
      return state;
  }
};
