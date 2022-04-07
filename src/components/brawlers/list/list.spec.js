import { render, screen } from "@testing-library/react";
import BrawlerList from "./list";

jest.mock("./brawler.js", () => () => <div>Item</div>);
describe("brawlers/list", () => {
  it("should display list headers correctly", () => {
    render(<BrawlerList list={[]} />);
    expect(screen.getByText("#Id")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
    expect(screen.getByText("No brawlers to display")).toBeInTheDocument();
  });

  it("should display list correctly", () => {
    render(
      <BrawlerList
        list={[
          {
            id: 1,
            name: "Barley",
            power: 400,
            health: 500,
            type: "Rare",
          },
        ]}
      />
    );
    expect(screen.getByText("Item")).toBeInTheDocument();
    expect(screen.queryByText("No brawlers to display")).not.toBeInTheDocument();
  });
});
