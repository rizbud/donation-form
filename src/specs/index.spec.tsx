import { screen, render, fireEvent, act } from "@testing-library/react";

import "intersection-observer";

import Index from "../pages";

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

  it("renders a form and fill with the correct values", async () => {
    const { getByLabelText, getByText } = render(<Index />);
    const amountInput = getByLabelText("Amount");
    const nameInput = getByLabelText("Name");
    const emailInput = getByLabelText("Email");
    const idNumberInput = getByLabelText("ID Number (NRIC/FIN)");
    const postalCodeInput = getByLabelText("Postal Code");
    const unitNumberInput = getByLabelText("Unit Number");
    const addressInput = getByLabelText("Address");
    const remarksInput = getByLabelText("Remarks");
    const submitButton = getByText("SEND");

    fireEvent.change(amountInput, { target: { value: "100" } });
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@gmail.com" } });
    fireEvent.change(idNumberInput, { target: { value: "S1234567A" } });
    fireEvent.change(postalCodeInput, { target: { value: "123456" } });
    fireEvent.change(unitNumberInput, { target: { value: "123-45" } });
    fireEvent.change(addressInput, {
      target: { value: "123 ABC Street" },
    });
    fireEvent.change(remarksInput, { target: { value: "Optional" } });

    expect(amountInput).toHaveValue("100");
    expect(nameInput).toHaveValue("John Doe");
    expect(emailInput).toHaveValue("johndoe@gmail.com");
    expect(idNumberInput).toHaveValue("S1234567A");
    expect(postalCodeInput).toHaveValue(123456);
    expect(unitNumberInput).toHaveValue("123-45");
    expect(addressInput).toHaveValue("123 ABC Street");
    expect(remarksInput).toHaveValue("Optional");

    act(() => {
      fireEvent.click(submitButton);
    });

    // wait for the modal to appear
    await screen.findByText("Thank you for your donation, John Doe!");

    const closeButton = getByText("Close");
    act(() => {
      fireEvent.click(closeButton);
    });

    // wait for the modal to disappear
    await screen.findByText("SEND");

    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(idNumberInput).toHaveValue("");
    expect(postalCodeInput).toHaveValue(null);
    expect(unitNumberInput).toHaveValue("");
    expect(addressInput).toHaveValue("");
    expect(remarksInput).toHaveValue("");
  });
});

// Snapshot test
describe("Index", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Index />);

    expect(baseElement).toMatchSnapshot();
  });
});
