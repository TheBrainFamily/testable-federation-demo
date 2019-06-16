const { resolvers } = require("./resolvers");

test("shipping is free if the price is over 1000", () => {
  expect(resolvers.Product.shippingEstimate({ price: 1001 })).toEqual(0);
});

test("Shipping is one dollar per two pounds, if price 1000 or below", () => {
  expect(
    resolvers.Product.shippingEstimate({ price: 500, weight: 100 })
  ).toEqual(50);
});
