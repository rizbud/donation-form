import { formValidation, notOnlyDigits } from ".";

describe("formValidation", () => {
  it("validates correct input", async () => {
    const data = {
      amount: 123,
      name: "John",
      email: "johndoe@mail.com",
      id_number: "S1234567A",
      postal_code: "123456",
      unit_number: "123-45",
      address: "123 abc",
      remarks: "123",
    };
    const result = await formValidation.validate(data);

    expect(result).toBe(data);
  });

  it("validates correct input when address is empty", async () => {
    const data = {
      amount: 123,
      name: "John",
      email: "johndoe@mail.com",
      id_number: "S1234567A",
      postal_code: "123456",
      unit_number: "123-45",
      address: "",
      remarks: "123",
    };
    const result = await formValidation.validate(data);

    expect(result).toBe(data);
  });

  it("validates correct input when address is empty", async () => {
    const data = {
      amount: 123,
      name: "John",
      email: "johndoe@mail.com",
      id_number: "S1234567A",
      postal_code: "123456",
      unit_number: "123-45",
      address: "ABCabc",
      remarks: "123",
    };
    const result = await formValidation.validate(data);

    expect(result).toBe(data);
  });

  it("validates incorrect input", async () => {
    const data = {
      amount: 123,
      name: "John",
      email: "johndoe@mail.com",
      id_number: "S1234567A",
      postal_code: "123456",
      unit_number: "123-45",
      address: "123",
      remarks: "123",
    };

    await expect(formValidation.validate(data)).rejects.toThrow();
  });
});

describe("notOnlyDigits", () => {
  it("should return true when input is not only digits", () => {
    expect(notOnlyDigits("abc")).toBeTruthy();
  });

  it("should return false when input is only digits", () => {
    expect(notOnlyDigits("123")).toBeFalsy();
  });

  it("should return false when input is empty", () => {
    expect(notOnlyDigits("")).toBeFalsy();
  });

  it("should return false when input is undefined", () => {
    expect(notOnlyDigits(undefined)).toBeFalsy();
  });
});
