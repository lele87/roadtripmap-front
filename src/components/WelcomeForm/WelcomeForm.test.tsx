import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import WelcomeForm from "./WelcomeForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a WelcomeForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 2 input and 1 button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <WelcomeForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameInput = screen.getByPlaceholderText("username");
      const passwordInput = screen.getByPlaceholderText("password");
      const button = screen.getByRole("button");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When the user types the username 'lelo' in the input field", () => {
    test("Then it should render the username 'lelo'", () => {
      const expectedInputText = "lelo";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <WelcomeForm />
          </Provider>
        </BrowserRouter>
      );

      const inputField = screen.getByPlaceholderText("username");

      userEvent.type(inputField, expectedInputText);

      expect(inputField).toHaveValue(expectedInputText);
    });
  });
  describe("When the user fill the username and password input fields and the user clicks on the login button", () => {
    test("Then the dispatch should be invoked", () => {
      const username = "lelo";
      const password = "lelo";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <WelcomeForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameInput = screen.getByPlaceholderText("username");
      const passwordInput = screen.getByPlaceholderText("password");
      const loginButton = screen.getByRole("button", { name: "Login" });

      userEvent.type(usernameInput, username);
      userEvent.type(passwordInput, password);

      userEvent.click(loginButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
