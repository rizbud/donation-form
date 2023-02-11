import { render, screen } from "@testing-library/react";

import "intersection-observer";

import userEvent from "@testing-library/user-event";

import { BaseModal } from ".";

describe("BaseModal", () => {
  it("should render without close button", () => {
    render(
      <BaseModal isOpen={true}>
        <div>Modal Content</div>
      </BaseModal>,
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", async () => {
    const onClose = jest.fn();

    render(
      <BaseModal isOpen={true} onClose={onClose}>
        <div>Modal Content</div>
      </BaseModal>,
    );

    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button"));

    expect(onClose).toHaveBeenCalled();
  });
});

// Snapshot
describe("BaseModal", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <BaseModal isOpen={true}>
        <div>Modal Content</div>
      </BaseModal>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render with close button", () => {
    const { container } = render(
      <BaseModal isOpen={true} onClose={() => null}>
        <div>Modal Content</div>
      </BaseModal>,
    );

    expect(container).toMatchSnapshot();
  });
});
