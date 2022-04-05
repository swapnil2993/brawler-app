import { render, screen } from "@testing-library/react";
import Menu from "./index";
import { BrowserRouter } from "react-router-dom";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        pathname: "/path"
    })
}));

describe("Menu", () => {
  it("renders menu correctly", () => {
    render(<Menu />, { wrapper: BrowserRouter });
    expect(screen.getByRole("list")).toBeInTheDocument();
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
  });
});
