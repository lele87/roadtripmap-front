import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationState, Location } from "../../types/types";

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
    addLocation: (location, action: PayloadAction<Location>) => ({
      features: [...location.features, action.payload],
    }),
  },
});

export const {
  loadLocations: loadLocationsActionCreator,
  addLocation: addLocationActionCreator,
} = locationsSlice.actions;

export default locationsSlice.reducer;
