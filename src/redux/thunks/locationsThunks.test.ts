import axios from "axios";
import { mockLocations } from "../../mocks/mockLocations";
import { server } from "../../mocks/server";
import { loadLocationsActionCreator } from "../features/locationsSlice";
import { addLocationThunk, loadLocationsThunk } from "./locationsThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loadLocationsThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the loadLocationsActionCreator", async () => {
      const dispatch = jest.fn();

      const userId = "1";

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      axios.get = jest.fn().mockResolvedValue({
        data: mockLocations,
      });

      const loadAction = loadLocationsActionCreator(mockLocations);
      const thunk = loadLocationsThunk(userId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadAction);
    });
  });
  describe("When it's called with an authorized token", () => {
    test("Then it shouldn't call the toast's error method", async () => {
      const dispatch = jest.fn();

      const userId = "1";

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      axios.get = jest.fn().mockRejectedValue({});

      const loadAction = loadLocationsActionCreator(mockLocations);

      const thunk = loadLocationsThunk(userId);

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalledWith(loadAction);
    });
  });
});

describe("Given an addLocationThunk function", () => {
  const dispatch = jest.fn();

  const locationData = {
    name: "Lele's home",
    description: "Carrer Templers Home",
    latitude: "41.38184338079825",
    longitude: "2.1788420566189455",
    image: ["file.jpg"],
  };

  const userId = "1";

  describe("When it's called", () => {
    test("Then it should dispatch the addLocationActionCreator", async () => {
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      axios.post = jest.fn().mockResolvedValue({
        data: mockLocations.features[0],
      });

      const thunk = addLocationThunk(locationData, userId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
