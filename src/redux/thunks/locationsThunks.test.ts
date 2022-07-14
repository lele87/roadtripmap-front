import { mockLocations } from "../../mocks/mockLocations";
import { server } from "../../mocks/server";
import { loadLocationsActionCreator } from "../features/locationsSlice";
import { loadLocationsThunk } from "./locationsThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loadLocationsThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the loadLocationsActionCreator", async () => {
      const dispatch = jest.fn();

      const userId = "1";

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      const loadAction = loadLocationsActionCreator(mockLocations);
      const thunk = loadLocationsThunk(userId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadAction);
    });
  });
});
