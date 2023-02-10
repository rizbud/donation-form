import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import userEvent from "@testing-library/user-event";

import { BaseTextArea } from ".";

describe("BaseTextArea", () => {
  it("should render a text area", () => {
    render(<BaseTextArea label="Label" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render a hidden text area", () => {
    render(<BaseTextArea label="Label" hidden />);

    expect(screen.getByLabelText("Label")).toBeInTheDocument();
  });

  it("should render a text area with error message", () => {
    render(<BaseTextArea label="Label" error="Error" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("should render a text area with placeholder", () => {
    render(<BaseTextArea label="Label" placeholder="Placeholder" />);

    expect(screen.getByPlaceholderText("Placeholder")).toBeInTheDocument();
  });

  it("should render a text area and write", async () => {
    render(<BaseTextArea label="Label" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();

    await userEvent.type(screen.getByRole("textbox"), "Text");

    expect(screen.getByRole("textbox")).toHaveValue("Text");
  });
});

// Snapshots
describe("BaseTextArea", () => {
  it("should render a text area", () => {
    const { container } = render(<BaseTextArea label="Label" />);

    expect(container).toMatchSnapshot();
  });

  it("should render a hidden text area", () => {
    const { container } = render(<BaseTextArea label="Label" hidden />);

    expect(container).toMatchSnapshot();
  });

  it("should render a text area with error message", () => {
    const { container } = render(<BaseTextArea label="Label" error="Error" />);

    expect(container).toMatchSnapshot();
  });

  it("should render a text area with placeholder", () => {
    const { container } = render(
      <BaseTextArea label="Label" placeholder="Placeholder" />,
    );

    expect(container).toMatchSnapshot();
  });
});
