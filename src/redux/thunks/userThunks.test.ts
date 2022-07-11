import { mockUser } from "../../mocks/mockUser";
import { server } from "../../mocks/server";
import {
  loginActionCreator,
  registerActionCreator,
} from "../features/usersSlice";
import { userLoginThunk, userRegisterThunk } from "./usersThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () => () => ({
  username: "lillo",
  id: "1",
}));

describe("Given a registerThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the registerActionCreator", async () => {
      const dispatch = jest.fn();

      const userData = {
        username: "lelo",
        password: "lelo",
      };

      const registerAction = registerActionCreator(mockUser);

      const thunk = userRegisterThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(registerAction);
    });
  });
});

describe("Given a loginThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the loginActionCreator", async () => {
      const dispatch = jest.fn();

      const userData = {
        username: "lillo",
        password: "lillo",
      };

      const loginAction = loginActionCreator(mockUser);

      const thunk = userLoginThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loginAction);
    });
  });
});
