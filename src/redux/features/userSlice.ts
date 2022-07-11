import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../types/types";

const initialState: UserState = {
  userInfo: {
    username: "",
    id: "",
  },
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user, action: PayloadAction<User>) => ({
      userInfo: { ...action.payload },
      logged: true,
    }),
  },
});

export const { login: loginActionCreator } = userSlice.actions;

export default userSlice.reducer;
