import { regexNRIC } from ".";

describe("regexNRIC", () => {
  it("should match correctly", () => {
    expect("S1234567A".match(regexNRIC)).toBeTruthy();
    expect("T1234567B".match(regexNRIC)).toBeTruthy();
    expect("F1234567C".match(regexNRIC)).toBeTruthy();
    expect("G1234567D".match(regexNRIC)).toBeTruthy();
  });

  it("should not match correctly", () => {
    expect("S1234567".match(regexNRIC)).toBeFalsy();
    expect("S1234567AA".match(regexNRIC)).toBeFalsy();
    expect("S1234567".match(regexNRIC)).toBeFalsy();
    expect("S1234567AA".match(regexNRIC)).toBeFalsy();
    expect("S1234567Aa".match(regexNRIC)).toBeFalsy();
    expect("S1234567a".match(regexNRIC)).toBeFalsy();
    expect("S1234567aa".match(regexNRIC)).toBeFalsy();
    expect("S1234567A ".match(regexNRIC)).toBeFalsy();
    expect(" S1234567A".match(regexNRIC)).toBeFalsy();
    expect("S1234567A ".match(regexNRIC)).toBeFalsy();
    expect(" S1234567A".match(regexNRIC)).toBeFalsy();
  });
});
