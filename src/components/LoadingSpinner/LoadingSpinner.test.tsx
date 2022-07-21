import { render, screen } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

describe("Given a Loading Spinner Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a div element", () => {
      render(<LoadingSpinner />);

      const svgElement = screen.getByTestId("dot-pulse__dot");

      expect(svgElement).toBeInTheDocument();
    });
  });
});
