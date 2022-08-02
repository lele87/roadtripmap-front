import axios from "axios";
import { AppDispatch } from "../store/store";
import {
  addLocationActionCreator,
  deleteLocationActionCreator,
  loadLocationsActionCreator,
} from "../features/locationsSlice";
import {
  loadedOffActionCreator,
  loadedOnActionCreator,
} from "../features/uiSlice";
import toast from "react-hot-toast";

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
      toast.dismiss();
      toast.error("Something went wrong");
      return error.message;
    }
  };

export const addLocationThunk =
  (formData: any, userId: string) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}locations/${userId}`;
    const token = localStorage.getItem("token");

    try {
      dispatch(loadedOnActionCreator());
      const {
        data: { new_location },
      } = await axios.post(url, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (new_location) {
        dispatch(loadedOffActionCreator());
        await dispatch(addLocationActionCreator(new_location));
        dispatch(loadLocationsThunk(userId));
      }
    } catch (error: any) {
      dispatch(loadedOffActionCreator());
      toast.error("Something went wrong");
      return error.message;
    }
  };

export const deleteLocationThunk =
  (locationId: string) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}locations/${locationId}`;
    const token = localStorage.getItem("token");

    try {
      dispatch(loadedOnActionCreator());
      const { status } = await axios.delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(loadedOffActionCreator());
      if (status === 200) {
        await dispatch(deleteLocationActionCreator(locationId));
        toast.dismiss();
        toast.success("You deleted a location");
      }
    } catch (error: any) {
      dispatch(loadedOffActionCreator());
      toast.dismiss();
      toast.error("Something went wrong");
      return error.message;
    }
  };
