const { gql } = require("apollo-server");
const { executeGraphql } = require("federation-testing-tool");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const service = { typeDefs, resolvers };

describe("Based on the data passed down from the gateway, the shippingEstimate", () => {
  const query = gql`
    {
      _getProduct {
        shippingEstimate
      }
    }
  `;
  it("should be 0 for an item with a price over 1000", async () => {
    const mocks = { Product: () => ({ price: 1001 }) };

    const result = await executeGraphql({ query, service, mocks });

    expect(result.data._getProduct.shippingEstimate).toEqual(0);
  });
  it("should be calculated as 1 dollar per 2 pounds if price 1000 or below", async () => {
    const mocks = { Product: () => ({ price: 999, weight: 100 }) };

    const result = await executeGraphql({ query, service, mocks });

    expect(result.data._getProduct.shippingEstimate).toEqual(50);
  });
});
