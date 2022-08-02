import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newLocation } from "../../types/types";

const initialState: newLocation = {
  coordinates: [],
  openForm: false,
};

const newLocationSlice = createSlice({
  name: "newLocation",
  initialState,
  reducers: {
    openForm: (newLocation) => ({
      ...newLocation,
      openForm: true,
    }),
    closeForm: (newLocation) => ({
      ...newLocation,
      openForm: false,
    }),
    addCoordinates: (newLocation, action: PayloadAction<number[]>) => ({
      ...newLocation,
      coordinates: [...action.payload],
    }),
  },
});

export const {
  openForm: openFormActionCreator,
  closeForm: closeFormActionCreator,
  addCoordinates: addCoordinatesActionCreator,
} = newLocationSlice.actions;

export default newLocationSlice.reducer;
