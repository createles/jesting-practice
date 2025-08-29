import { capitalize, reverseString, calculator } from "./funcs";

describe("string functions test", () => {
  test("first letter is capitalized", () => {
    const word = "stay";
    const wordUppered = capitalize(word);
    expect(wordUppered).toMatch(/Stay/);
  });

  test("string is reversed", () => {
    const word = "mayhem";
    const drow = reverseString(word);
    expect(drow).toMatch(/mehyam/);
  });
});

describe("calculator functions test", () => {
  test("addition function check", () => {
    expect(calculator.add(4, 2)).toBe(6);
  });

  test("subtraction function check", () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });

  test("division function check", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test("multiplication function check", () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });
});
