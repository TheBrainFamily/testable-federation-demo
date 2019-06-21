exports.estimateShipping = ({price, weight}) => {
  if (price > 1000) {
    return 0
  }
  return weight / 2;
};
