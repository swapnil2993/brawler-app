import { render, screen } from "@testing-library/react";
import Menu from "./index";
import { BrowserRouter } from "react-router-dom";

describe("Menu", () => {
  it("renders menu correctly", () => {
    render(<Menu />, { wrapper: BrowserRouter });
    expect(screen.getByRole("list")).toBeInTheDocument();
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
  });

  it("renders menu with correct props", () => {
    const items = [{ path: "/path", text: "Sample" }];
    render(<Menu items={items} />, { wrapper: BrowserRouter });
    expect(screen.getByRole("list")).toBeInTheDocument();
    const itemsElements = screen.getAllByRole("listitem");
    expect(itemsElements).toHaveLength(1);
  });
});
