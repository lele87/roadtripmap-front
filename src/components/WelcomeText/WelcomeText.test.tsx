import { render, screen } from "@testing-library/react";
import WelcomeText from "./WelcomeText";

describe("Given a WelcomeText component", () => {
  describe("When it's invoked", () => {
    test("Then it should render an image and a paragraph with the text 'Create your perfect road trip'", () => {
      render(<WelcomeText />);

      const expectedImage = screen.getByAltText("trippy logo");
      const expectedText = screen.getByText("Create your perfect road trip");

      expect(expectedImage).toBeInTheDocument();
      expect(expectedText).toBeInTheDocument();
    });
  });
});
