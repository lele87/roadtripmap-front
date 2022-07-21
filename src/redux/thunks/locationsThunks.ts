import axios from "axios";
import { AppDispatch } from "../store/store";
import { loadLocationsActionCreator } from "../features/locationsSlice";
import {
  loadedOffActionCreator,
  loadedOnActionCreator,
} from "../features/uiSlice";

export const loadLocationsThunk =
  (userId: string) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}locations/list/${userId}`;
    const token = localStorage.getItem("token");

    try {
      loadedOnActionCreator();
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data) {
        dispatch(loadLocationsActionCreator(data));
        dispatch(loadedOffActionCreator());
      }
    } catch (error: any) {
      dispatch(loadedOffActionCreator());
      return error.message;
    }
  };
