import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { fetchBrawlers } from "../../services";
import Brawlers from "./index";

jest.mock("../../services");

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
 useNavigate: () => mockedUsedNavigate,
}));


describe("page/brawlers", () => {

  it("should fetch all the brawlers correctly", async () => {
    fetchBrawlers.mockResolvedValue([
      {
        id: 1,
        name: "Barley",
        power: 400,
        health: 500,
        type: "Rare",
      },
      {
        id: 2,
        name: "Ant-2",
        power: 400,
        health: 500,
        type: "Rare",
      },
    ]);
    render(<Brawlers />, { wrapper: BrowserRouter });
    expect(await screen.findByText("Barley")).toBeVisible();
    expect(fetchBrawlers).toHaveBeenCalled();
    expect(screen.getByText("Ant-2")).toBeInTheDocument();
  });

  it("should trigger correct actions on user events", async () => {
    fetchBrawlers.mockResolvedValue([
      {
        id: 1,
        name: "Barley",
        power: 400,
        health: 500,
        type: "Rare",
      },
      {
        id: 2,
        name: "Ant-2",
        power: 400,
        health: 500,
        type: "Rare",
      },
    ]);
    render(<Brawlers />, { wrapper: BrowserRouter });
    expect(await screen.findByText("Barley")).toBeVisible();
    userEvent.click(screen.getByText("Ant-2"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/brawlers/2');
    userEvent.click(screen.getAllByText("Edit")[0])
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/brawlers/1/edit');
  });
});
