import axios from "axios";
import { loadedOffActionCreator } from "../features/uiSlice";
import { userLoginThunk, userRegisterThunk } from "./usersThunks";

describe("Given a loginsThunk function", () => {
  describe("When it's called and the there's no username match", () => {
    test("Then it should call the toast's error method", async () => {
      const dispatch = jest.fn();

      const mockToast = jest.fn();

      jest.mock("react-hot-toast", () => ({
        error: mockToast,
      }));

      const userData = {
        username: "lele",
        password: "lele",
      };

      const thunk = userLoginThunk(userData);

      await thunk(dispatch);

      const loadingOff = loadedOffActionCreator();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadingOff);
    });
  });
});

describe("Given a registerThunk function", () => {
  describe("When it's called and the there's is already a username in the database", () => {
    test("Then it should call the toast's error method", async () => {
      const dispatch = jest.fn();

      const mockToast = jest.fn();

      jest.mock("react-hot-toast", () => ({
        error: mockToast,
      }));

      axios.post = jest.fn().mockRejectedValue({});

      const userData = {
        username: "lele",
        password: "lele",
      };

      const thunk = userRegisterThunk(userData);
      const loadingOff = loadedOffActionCreator();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadingOff);
    });
  });
});
