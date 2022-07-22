import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  users: [],
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loadingStart(state) {
      state.isLoading = true;
    },
    loadingFinish(state) {
      state.isLoading = false;
    },
    fetchUsers(state, action) {
      state.users = action.payload;
    },

    deleteUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },

    editUser: (state, action) => {
      console.log(action.payload);
      const { id, name, username } = action.payload.users;
      console.log(id, name, username);
      const existingUser = state.users.find((user) => user.id === id);
      console.log(existingUser);
      console.log(state.users);
      if (existingUser) {
        existingUser.name = name;
        existingUser.username = username;
      }
    },
  },
});

export const userActions = userSlice.actions;
