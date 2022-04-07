import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Brawler from "./brawler";

describe("Brawler", () => {
  it("renders brawler correctly", () => {
    const onDeleteAction = jest.fn();
    render(
      <Brawler
        item={{
          id: 1,
          name: "Barley",
          power: 400,
          health: 500,
          type: "Rare",
        }}
        onDeleteAction={onDeleteAction}
      />
    );
    expect(screen.getByText("Barley")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button"))
    expect(onDeleteAction).toHaveBeenCalled()
  });
});
