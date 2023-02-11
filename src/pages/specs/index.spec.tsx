import { screen, render } from "@testing-library/react";

import Index from "..";

describe("Index", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<Index />);
    }).not.toThrow();
  });

  it("renders a form", () => {
    render(<Index />);

    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("ID Number (NRIC/FIN)")).toBeInTheDocument();
    expect(screen.getByText("Postal Code")).toBeInTheDocument();
    expect(screen.getByText("Unit Number")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("Remarks")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

// Snapshot test
describe("Index", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Index />);

    expect(baseElement).toMatchSnapshot();
  });
});
