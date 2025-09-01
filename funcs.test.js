import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./funcs";

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

describe("caesar cipher test", () => {
  test("lower case test", () => {
    expect(caesarCipher("test", 5)).toBe("yjxy");
  });

  test("upper case test", () => {
    expect(caesarCipher("TEST", 5)).toBe("YJXY");
  });

  test("mixed case test", () => {
    expect(caesarCipher("TeSt", 5)).toBe("YjXy");
  });

  test("with punctuation test", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
})

describe("analyze array test", () => {
  test("returns proper object", () => {
    const checkObject = {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };

    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(checkObject);
  });
});
