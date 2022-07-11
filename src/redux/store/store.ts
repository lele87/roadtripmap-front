import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/usersSlice";

const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
