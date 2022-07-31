import React from "react";

function hoursValue({ active, amount }) {
  if (active === 1) {
    return Math.floor(amount / 360);
  } else if (active === 2) {
    return Math.floor(amount / 60);
  } else if (active === 3) {
    return amount;
  }
}

export default hoursValue;
