import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./index";

describe("Form", () => {
  it("should render Form component correctly", () => {
    const onSubmit = jest.fn();
    render(<Form onSubmit={onSubmit} />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Health")).toBeInTheDocument();
    expect(screen.getByLabelText("Power")).toBeInTheDocument();
    expect(screen.getByLabelText("Type")).toBeInTheDocument();
  });

  it("should not trigger onSubmit if form is incompletely filled", () => {
    const onSubmit = jest.fn();
    render(
      <Form
        onSubmit={onSubmit}
        initialData={{ name: "", health: 0, power: 0, type: "common" }}
      />
    );
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Health")).toBeInTheDocument();
    expect(screen.getByLabelText("Power")).toBeInTheDocument();
    expect(screen.getByLabelText("Type")).toBeInTheDocument();
    userEvent.click(screen.getByText("Submit"))
    expect(onSubmit).not.toHaveBeenCalled()
  });

  it("should trigger onSubmit if form is completely filled", () => {
    const onSubmit = jest.fn();
    render(
      <Form
        onSubmit={onSubmit}
        initialData={{ name: "sd", health: 1, power: 1, type: "common" }}
      />
    );
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Health")).toBeInTheDocument();
    expect(screen.getByLabelText("Power")).toBeInTheDocument();
    expect(screen.getByLabelText("Type")).toBeInTheDocument();
    userEvent.click(screen.getByText("Submit"))
    expect(onSubmit).toHaveBeenCalled()
  });
});
