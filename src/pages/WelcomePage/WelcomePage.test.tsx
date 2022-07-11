import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import WelcomePage from "./WelcomePage";

describe("Given a Welcome Page", () => {
  describe("When it's invoked", () => {
    test("Then it should render a WelcomeText component and a WelcomeForm component", () => {
      render(
        <BrowserRouter>
          <WelcomePage />
        </BrowserRouter>
      );

      const usernameInput = screen.getByPlaceholderText("username");
      const passwordInput = screen.getByPlaceholderText("password");
      const button = screen.getByRole("button");

      const expectedImage = screen.getByAltText("trippy logo");
      const expectedText = screen.getByText("Create your perfect road trip");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();

      expect(expectedImage).toBeInTheDocument();
      expect(expectedText).toBeInTheDocument();
    });
  });
});
