import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./input";

describe("Input", () => {
  it("should render input component correctly", () => {
    const onChange = jest.fn();
    render(
      <Input value={""} label="Name" name="name" onChange={onChange} required />
    );
    const input = screen.getByLabelText("Name")
    expect(input.value).toEqual("")
    userEvent.type(input,'good')
    expect(onChange).toHaveBeenCalled()
  });
});
