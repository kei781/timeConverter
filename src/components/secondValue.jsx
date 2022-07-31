import React from "react";

const secondValue = ({ active, amount }) => {
  if (active === 1) {
    return amount;
  } else if (active === 2) {
    return amount * 60;
  } else if (active === 3) {
    return amount * 360;
  }
};

export default secondValue;
