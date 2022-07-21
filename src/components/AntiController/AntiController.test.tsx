import { render, screen } from "@testing-library/react";
import AntiController from "./AntiController";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

let mockLogged = true;

jest.mock("../../redux/store/hooks", () => ({
  useAppSelector: () => ({ logged: mockLogged }),
}));

describe("Given an AntiController function", () => {
  describe("When it's invoked", () => {
    test("Then it should navigate to the home when the user is logged", () => {
      render(
        <AntiController>
          <h1>Hello</h1>
        </AntiController>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/home");
    });

    test("Then it should render its children when the user is no logged", () => {
      mockLogged = false;

      render(
        <AntiController>
          <h1>Hello</h1>
        </AntiController>
      );

      const header = screen.getByRole("heading", { name: "Hello" });

      expect(header).toBeInTheDocument();
    });
  });
});
