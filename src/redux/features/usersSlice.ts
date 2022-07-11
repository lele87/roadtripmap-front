import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../types/types";

const initialState: UserState = {
  userInfo: {
    username: "",
    id: "",
  },
  logged: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user, action: PayloadAction<User>) => ({
      userInfo: { ...action.payload },
      logged: true,
    }),
    register: (user, action: PayloadAction<User>) => ({
      userInfo: { ...action.payload },
      logged: false,
    }),
    logout: (user) => ({
      userInfo: {
        username: "",
        id: "",
      },
      logged: false,
    }),
  },
});

export const {
  login: loginActionCreator,
  register: registerActionCreator,
  logout: logoutActionCreator,
} = usersSlice.actions;

export default usersSlice.reducer;
