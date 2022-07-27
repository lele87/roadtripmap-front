import { LocationState } from "../../types/types";
import locationsSlice, { loadLocationsActionCreator } from "./locationsSlice";

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
      const locationStatus = locationsSlice(initialState, loadAction);

      expect(locationStatus).toEqual(expectedState);
    });
  });
});
