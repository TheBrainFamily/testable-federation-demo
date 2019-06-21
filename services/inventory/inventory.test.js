const td = require("testdouble");
require("testdouble-jest")(td, jest);
const { gql } = require("apollo-server");
const { executeGraphql } = require("federation-testing-tool");

const { estimateShipping } = td.replace("./estimateShipping");

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
  it("should be calculated with estimateShipping based on the price and weight", async () => {
    const PRICE = 999;
    const WEIGHT = 100;
    const mocks = { Product: () => ({ price: PRICE, weight: WEIGHT }) };

    td.when(estimateShipping({ price: PRICE, weight: WEIGHT })).thenReturn(99);

    const result = await executeGraphql({
      query,
      service,
      mocks
    });

    expect(result.data._getProduct.shippingEstimate).toEqual(99);
  });
});
