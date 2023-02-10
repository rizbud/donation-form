import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import userEvent from "@testing-library/user-event";

import { BaseInput } from ".";

import { Eye } from "~/assets/svg";

describe("BaseInput", () => {
  it("should render a text input", () => {
    render(<BaseInput label="Label" type="text" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render a hidden text input", () => {
    render(<BaseInput label="Label" hidden />);

    expect(screen.getByLabelText("Label")).toBeInTheDocument();
  });

  it("should render a hidden text input", () => {
    render(<BaseInput label="Label" type="hidden" />);

    expect(screen.getByLabelText("Label")).toBeInTheDocument();
  });

  it("should render a email input", () => {
    render(<BaseInput label="Email" type="email" />);

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("should render a text input with error message", () => {
    render(<BaseInput label="Label" type="text" error="Error" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  it("should render a password input with action icon eye and onClick event", async () => {
    const onClick = jest.fn();

    render(
      <BaseInput
        label="Password"
        type="password"
        action={{ icon: Eye, onClick }}
      />,
    );

    expect(screen.getByLabelText("Password")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

//  Snapshots
describe("BaseInput", () => {
  it("should render a text input", () => {
    const { container } = render(<BaseInput label="Label" type="text" />);

    expect(container).toMatchSnapshot();
  });

  it("should render a hidden text input", () => {
    const { container } = render(<BaseInput label="Label" hidden />);

    expect(container).toMatchSnapshot();
  });

  it("should render a hidden text input", () => {
    const { container } = render(<BaseInput label="Label" type="hidden" />);

    expect(container).toMatchSnapshot();
  });

  it("should render a email input", () => {
    const { container } = render(<BaseInput label="Email" type="email" />);

    expect(container).toMatchSnapshot();
  });

  it("should render a text input with error message", () => {
    const { container } = render(
      <BaseInput label="Label" type="text" error="Error" />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render a password input with action icon eye and onClick event", async () => {
    const onClick = jest.fn();

    const { container } = render(
      <BaseInput
        label="Password"
        type="password"
        action={{ icon: Eye, onClick }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
