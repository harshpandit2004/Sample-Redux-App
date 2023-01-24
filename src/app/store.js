import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Features/Counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
