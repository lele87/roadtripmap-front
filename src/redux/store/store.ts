import { configureStore } from "@reduxjs/toolkit";
import locationsReducer from "../features/locationsSlice";
import uiReducer from "../features/uiSlice";
import usersReducer from "../features/usersSlice";

const store = configureStore({
  reducer: {
    user: usersReducer,
    location: locationsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
