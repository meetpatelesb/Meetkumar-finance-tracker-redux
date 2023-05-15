import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./ducks/counterSlice";

export const store = configureStore({
  reducer: {
  meet: counterSlice,
  },
});

export default store;