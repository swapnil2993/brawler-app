import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateBrawler from "./index";
import { BrowserRouter } from "react-router-dom";
import { createBrawler } from "../../services";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("../../services");

describe("CreateBrawler", () => {
  it("should render CreateBrawler component correctly and trigger submit", () => {
    createBrawler.mockResolvedValue({ message: "Valid" });
    
    render(<CreateBrawler />, { wrapper: BrowserRouter });
    const inputName = screen.getByLabelText("Name");
    expect(inputName.value).toEqual("");
    userEvent.type(inputName, "name");
    const inputHealth = screen.getByLabelText("Health");
    expect(inputHealth.value).toEqual("0");
    userEvent.type(inputHealth, "500");
    const inputPower = screen.getByLabelText("Power");
    expect(inputPower.value).toEqual("0");
    userEvent.type(inputPower, "500");

    userEvent.click(screen.getByText("Submit"));
    expect(createBrawler).toHaveBeenCalled();
    // expect(mockedUsedNavigate).toHaveBeenCalled()
  });
});
