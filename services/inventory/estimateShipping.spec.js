const { estimateShipping } = require("./estimateShipping");

test("estimateShipping should be 0 for an item with a price over 1000", () => {
  expect(estimateShipping({price: 1001})).toStrictEqual(0)
});
test("estimateShipping should be calculated as 1 dollar per 2 pounds for an item with a price of 1000 or below", () => {
  expect(estimateShipping({price: 1000, weight: 500})).toEqual(250)
});
