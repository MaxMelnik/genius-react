import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter/counterSlice";
import usersReducer from "../redux/users/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
