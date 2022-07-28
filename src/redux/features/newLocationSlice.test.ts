import newLocationSlice, {
  addCoordinatesActionCreator,
  closeFormActionCreator,
  openFormActionCreator,
} from "./newLocationSlice";

describe("Given an openForm reducer", () => {
  describe("When it receives an initial state and an openForm action", () => {
    test("Then it should return the new state with openForm true", () => {
      const initialState = {
        coordinates: [],
        openForm: false,
      };

      const expectedState = {
        coordinates: [],
        openForm: true,
      };

      const openFormAction = openFormActionCreator();
      const newState = newLocationSlice(initialState, openFormAction);

      expect(newState).toEqual(expectedState);
    });
  });
});

describe("Given a closeForm reducer", () => {
  describe("When it receives an initial state and an closeForm action", () => {
    test("Then it should return the new state with openForm false", () => {
      const initialState = {
        coordinates: [],
        openForm: true,
      };

      const expectedState = {
        coordinates: [],
        openForm: false,
      };

      const closeFormAction = closeFormActionCreator();
      const newState = newLocationSlice(initialState, closeFormAction);

      expect(newState).toEqual(expectedState);
    });
  });
});

describe("Given an addCoordinates reducer", () => {
  describe("When it receives an initial state and an addCoordinates action", () => {
    test("Then it should return the new state with the coordinates received", () => {
      const initialState = {
        coordinates: [],
        openForm: false,
      };

      const expectedState = {
        coordinates: [41.37822586448357, 2.1669059934929518],
        openForm: false,
      };

      const addCoordinatesAction = addCoordinatesActionCreator([
        41.37822586448357, 2.1669059934929518,
      ]);
      const newState = newLocationSlice(initialState, addCoordinatesAction);

      expect(newState).toEqual(expectedState);
    });
  });
});
