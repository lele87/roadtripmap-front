import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Location {
  features: [
    {
      type: string;
      properties: {
        id: string;
        name: string;
        description: string;
        images: string;
      };
      geometry: {
        type: string;
        coordinates: number[];
      };
    }
  ];
}

const initialState: Location = {
  features: [
    {
      type: "",
      properties: {
        id: "",
        name: "",
        description: "",
        images: "",
      },
      geometry: {
        type: "",
        coordinates: [],
      },
    },
  ],
};

const locationsSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    loadLocations: (location, action: PayloadAction<Location>) => ({
      ...action.payload,
    }),
  },
});

export const { loadLocations: loadLocationsActionCreator } =
  locationsSlice.actions;

export default locationsSlice.reducer;
