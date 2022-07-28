import { LocationState } from "../../types/types";
import locationsSlice, {
  addLocationActionCreator,
  loadLocationsActionCreator,
} from "./locationsSlice";

describe("Given a load locations reducer", () => {
  describe("When it receives an initial state and a load action with the locations info", () => {
    test("Then it should return the new locations with the received info", () => {
      const initialState: LocationState = {
        features: [
          {
            type: "",
            properties: {
              id: "",
              name: "",
              description: "",
              image: "",
            },
            geometry: {
              type: "",
              coordinates: [],
            },
          },
        ],
      };

      const locationsInfo = {
        features: [
          {
            type: "Feature",
            properties: {
              id: "1",
              name: "Lele's home",
              description: "Carrer Templers Home",
              image: "",
            },
            geometry: {
              type: "Point",
              coordinates: [41.38184338079825, 2.1788420566189455],
            },
          },
          {
            type: "Feature",
            properties: {
              id: "2",
              name: "Francesco's home",
              description: "Carrer Carretes Home",
              image: "",
            },
            geometry: {
              type: "Point",
              coordinates: [41.37822586448357, 2.1669059934929518],
            },
          },
        ],
      };

      const expectedState = locationsInfo;

      const loadAction = loadLocationsActionCreator(locationsInfo);
      const newState = locationsSlice(initialState, loadAction);

      expect(newState).toEqual(expectedState);
    });
  });
});

describe("Given an add locations reducer", () => {
  describe("When it receives an initial state and an add action with the locations info", () => {
    test("Then it should return the new location with the received info", () => {
      const initialState: LocationState = {
        features: [],
      };

      const locationInfo = {
        type: "Feature",
        properties: {
          id: "1",
          name: "Casa Battlo",
          description: "",
          image: "image.jpg",
        },
        geometry: {
          type: "Point",
          coordinates: [41.38184338079825, 2.1788420566189455],
        },
      };

      const expectedState = {
        features: [locationInfo],
      };

      const addLocationAction = addLocationActionCreator(locationInfo);
      const newState = locationsSlice(initialState, addLocationAction);

      expect(newState).toEqual(expectedState);
    });
  });
});
