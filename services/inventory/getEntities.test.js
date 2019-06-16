const { buildFederatedSchema } = require("@apollo/federation");
const { graphql } = require("graphql");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const schema = buildFederatedSchema([
  {
    typeDefs,
    resolvers
  }
]);

test("query using GetEntities", async () => {
  const query = `query GetEntities($representations: [_Any!]!) {
      _entities(representations: $representations) {
        ... on Product {
          shippingEstimate
        }
      }
    }`;

  const variables = {
    representations: [
      { __typename: "Product", upc: "1", weight: 10, price: 100 }
    ]
  };

  const { data, errors } = await graphql(schema, query, null, null, variables);
  expect(errors).toBeUndefined();
  expect(data._entities[0].shippingEstimate).toEqual(5);
})
