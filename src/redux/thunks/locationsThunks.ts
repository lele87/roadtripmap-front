import axios from "axios";
import { AppDispatch } from "../store/store";
import { loadLocationsActionCreator } from "../features/locationsSlice";

export const loadLocationsThunk =
  (userId: string) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}locations/list/${userId}`;
    const token = localStorage.getItem("token");

    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data) {
      dispatch(loadLocationsActionCreator(data));
    }
  };
