const { gql } = require("apollo-server");

exports.typeDefs = gql`
  extend type Product @key(fields: "upc") {
    upc: String! @external
    weight: Int @external
    price: Int @external
    inStock: Boolean
    shippingEstimate: Float @requires(fields: "price weight")
  }
`;
