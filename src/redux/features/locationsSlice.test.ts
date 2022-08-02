import { mockLocations } from "../../mocks/mockLocations";
import { LocationState } from "../../types/types";
import locationsSlice, {
  addLocationActionCreator,
  deleteLocationActionCreator,
  loadLocationsActionCreator,
} from "./locationsSlice";

describe("Given a load locations reducer", () => {
  describe("When it receives an initial state and a load action with the locations info", () => {
    test("Then it should return the new locations with the received info", () => {
      const initialState: LocationState = {
        features: [
          {
            type: "",
            id: "",
            properties: {
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
            id: "1",
            properties: {
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
            id: "2",
            properties: {
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
        id: "1",
        properties: {
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

describe("Given a deleteLocation reducer", () => {
  describe("When it receives an initial state with 2 locations and a delete action with an id", () => {
    test("Then it should return 1 location", () => {
      const idToDelete = "2";

      const deleteAction = deleteLocationActionCreator(idToDelete);

      const initialState = {
        features: [mockLocations.features[0], mockLocations.features[1]],
      };

      const expectedState = {
        features: [
          {
            type: "Feature",
            id: "1",
            properties: {
              name: "Lele's home",
              description: "Carrer Templers Home",
              image: "",
            },
            geometry: {
              type: "Point",
              coordinates: [41.38184338079825, 2.1788420566189455],
            },
          },
        ],
      };
      const newState = locationsSlice(initialState, deleteAction);
      expect(newState).toEqual(expectedState);
    });
  });
});
