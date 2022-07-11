import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  DecodeToken,
  ResponseApi,
  UserLogin,
  UserRegister,
} from "../../types/types";
import {
  loginActionCreator,
  registerActionCreator,
} from "../features/usersSlice";
import { AppDispatch } from "../store/store";

export const userRegisterThunk =
  (userData: UserRegister) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;

    const { data } = await axios.post(url, userData);

    if (data) {
      const newUser = {
        username: userData.username,
        password: userData.password,
      };
      dispatch(userLoginThunk(newUser));
    }
    dispatch(registerActionCreator(data));
  };

export const userLoginThunk =
  (userData: UserLogin) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/login`;

    const {
      data: { token },
    }: ResponseApi = await axios.post(url, userData);

    if (token) {
      const { username, id }: DecodeToken = jwtDecode(token);
      dispatch(loginActionCreator({ username, id }));
      localStorage.setItem("token", token);
    }
  };
