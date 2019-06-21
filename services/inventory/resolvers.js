const { estimateShipping } = require("./estimateShipping");

exports.resolvers = {
  Product: {
    __resolveReference(object) {
      return {
        ...object,
        ...inventory.find(product => product.upc === object.upc)
      };
    },
    shippingEstimate: object =>
      estimateShipping({
        price: object.price,
        weight: object.weight
      })
  }
};

const inventory = [
  { upc: "1", inStock: true },
  { upc: "2", inStock: false },
  { upc: "3", inStock: true }
];
