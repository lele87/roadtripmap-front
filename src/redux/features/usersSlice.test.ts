import { mockUser } from "../../mocks/mockUser";
import usersSlice, {
  loginActionCreator,
  logoutActionCreator,
  registerActionCreator,
} from "./usersSlice";

describe("Given a user login reducer", () => {
  describe("When it receives an initial state status and a login action with the login user credentials", () => {
    test("Then it should return the new user state with the received user credentials and the logged property true", () => {
      const initialState = {
        userInfo: {
          username: "",
          id: "",
        },
        logged: false,
      };

      const userInfo = mockUser;

      const expectedState = {
        userInfo: mockUser,
        logged: true,
      };

      const loginAction = loginActionCreator(userInfo);
      const userStatus = usersSlice(initialState, loginAction);

      expect(userStatus).toEqual(expectedState);
    });
  });
});

describe("Given a user register reducer", () => {
  describe("When it receives an initial state status and a register action with the register user credentials", () => {
    test("Then it should return the new user state with the received user credentials and the logged property false", () => {
      const initialState = {
        userInfo: {
          username: "",
          id: "",
        },
        logged: false,
      };

      const userInfo = mockUser;

      const expectedState = {
        userInfo: mockUser,
        logged: false,
      };

      const registerAction = registerActionCreator(userInfo);
      const userStatus = usersSlice(initialState, registerAction);

      expect(userStatus).toEqual(expectedState);
    });
  });
});

describe("Given a user logout reducer", () => {
  describe("When it receives a state status and a logout action with the logged user credentials", () => {
    test("Then it should return the initial user state and the logged property false", () => {
      const initialState = {
        userInfo: {
          username: "lelo",
          id: "1",
        },
        logged: true,
      };

      const expectedState = {
        userInfo: {
          username: "",
          id: "",
        },
        logged: false,
      };

      const logoutAction = logoutActionCreator();
      const userStatus = usersSlice(initialState, logoutAction);

      expect(userStatus).toEqual(expectedState);
    });
  });
});
