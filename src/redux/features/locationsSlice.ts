import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationState } from "../../types/types";

const initialState: LocationState = {
  features: [],
};

const locationsSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    loadLocations: (location, action: PayloadAction<LocationState>) => ({
      ...action.payload,
    }),
  },
});

export const { loadLocations: loadLocationsActionCreator } =
  locationsSlice.actions;

export default locationsSlice.reducer;
