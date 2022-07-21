import uiSlice, {
  loadedOffActionCreator,
  loadedOnActionCreator,
} from "./uiSlice";

describe("Given a uiSlice reducer", () => {
  describe("When it receives an initial state and a loaded off action", () => {
    test("Then it should return the state to false", () => {
      const initialState = {
        loaded: true,
      };
      const expectedState = { loaded: false };

      const loadOffAction = loadedOffActionCreator();
      const loadedOff = uiSlice(initialState, loadOffAction);

      expect(loadedOff).toEqual(expectedState);
    });
  });

  describe("When it receives an initial state and a loaded on action", () => {
    test("Then it should return the state to true", () => {
      const initialState = {
        loaded: false,
      };
      const expectedState = { loaded: true };

      const loadOnAction = loadedOnActionCreator();
      const loadedOff = uiSlice(initialState, loadOnAction);

      expect(loadedOff).toEqual(expectedState);
    });
  });
});
