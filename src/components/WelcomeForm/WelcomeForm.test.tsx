import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WelcomeForm from "./WelcomeForm";

describe("Given a WelcomeForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 2 input and 1 button", () => {
      render(<WelcomeForm />);

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

      render(<WelcomeForm />);

      const inputField = screen.getByPlaceholderText("username");

      userEvent.type(inputField, expectedInputText);

      expect(inputField).toHaveValue(expectedInputText);
    });
  });
});
