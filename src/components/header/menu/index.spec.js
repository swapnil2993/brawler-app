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

  it("should apply correct class to active and inactive link", () => {
    const items = [{ path: "/path", text: "Sample" },{ path: "/path-inactive", text: "Sample 2" }];
    render(<Menu items={items} />, { wrapper: BrowserRouter });
    expect(screen.getByRole("list")).toBeInTheDocument();
    const itemsElements = screen.getAllByRole("listitem");
    expect(itemsElements).toHaveLength(2);
    expect(itemsElements[0]).toHaveClass('menu-item active')
    expect(itemsElements[1]).toHaveClass('menu-item')
  });
});
