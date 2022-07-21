import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  DecodeToken,
  ResponseApi,
  UserLogin,
  UserRegister,
} from "../../types/types";
import {
  loadedOffActionCreator,
  loadedOnActionCreator,
} from "../features/uiSlice";
import {
  loginActionCreator,
  registerActionCreator,
} from "../features/usersSlice";
import { AppDispatch } from "../store/store";

export const userRegisterThunk =
  (userData: UserRegister) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;

    try {
      dispatch(loadedOnActionCreator());
      const { data } = await axios.post(url, userData);
      dispatch(loadedOffActionCreator());

      if (data) {
        const newUser = {
          username: userData.username,
          password: userData.password,
        };
        dispatch(userLoginThunk(newUser));
      }
      dispatch(registerActionCreator(data));
    } catch (error: any) {
      dispatch(loadedOffActionCreator());
      return error.message;
    }
  };

export const userLoginThunk =
  (userData: UserLogin) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/login`;

    try {
      dispatch(loadedOnActionCreator());
      const {
        data: { token },
      }: ResponseApi = await axios.post(url, userData);

      if (token) {
        const { username, id }: DecodeToken = jwtDecode(token);
        dispatch(loginActionCreator({ username, id }));
        localStorage.setItem("token", token);
        dispatch(loadedOffActionCreator());
      }
    } catch (error: any) {
      dispatch(loadedOffActionCreator());
      return error.message;
    }
  };
