const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it adds commas where its supposed to", () => {
    expect(addCommas(1234)).toBe("1,234");
    expect(addCommas(1234567)).toBe("1,234,567");
  });

  test("it handles decimals", () => {
    expect(addCommas(1234.99)).toBe("1,234.99");
    expect(addCommas(1234567.999)).toBe("1,234,567.999");
  });

  test("it handles negatives and with decimals", () => {
    expect(addCommas(-1234)).toBe("-1,234");
    expect(addCommas(-1234567.999)).toBe("-1,234,567.999");
  });


});