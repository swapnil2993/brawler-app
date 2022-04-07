import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Brawler from "./brawler";

describe("Brawler", () => {
  it("renders brawler correctly", () => {
    const onDeleteAction = jest.fn();
    const onEditAction = jest.fn();
    const handleNavigate = jest.fn();
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
        onEditAction={onEditAction}
        handleNavigate={handleNavigate}
      />
    );
    expect(screen.getByText("Barley")).toBeInTheDocument();
    userEvent.click(screen.getByText("Delete"));
    expect(onDeleteAction).toHaveBeenCalledWith(1);
    userEvent.click(screen.getByText("Edit"));
    expect(onEditAction).toHaveBeenCalledWith(1);
    userEvent.click(screen.getByText("Barley"));
    expect(handleNavigate).toHaveBeenCalledWith(1);
  });
});
